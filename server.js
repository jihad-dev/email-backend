const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');
const Log = require('./models/Log');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Send email with tracking
app.post('/send-email', async (req, res) => {
  const { to, subject, message } = req.body;
  const pixelId = uuidv4();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const htmlBody = `
    <p>${message}</p>
    <img src="${process.env.BASE_URL}/track/${pixelId}" width="1" height="1" />
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    html: htmlBody,
  });

  res.json({ success: true, pixelId });
});

// Track pixel endpoint
app.get('/track/:id', async (req, res) => {
  console.log('✅ Hit received:', req.params.id);

  try {
    const log = new Log({
      pixelId: req.params.id,
      ip: req.ip,
      userAgent: req.headers['user-agent'],
      viewedAt: new Date()
    });

    await log.save();
    console.log('✅ Log saved to DB');
  } catch (error) {
    console.error('❌ Error saving to DB:', error.message);
  }

  // Transparent 1x1 gif
  const pixel = Buffer.from(
    'R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==',
    'base64'
  );
  res.writeHead(200, {
    'Content-Type': 'image/gif',
    'Content-Length': pixel.length
  });
  res.end(pixel);
});


// Get all logs
app.get('/logs', async (req, res) => {
  const logs = await Log.find().sort({ viewedAt: -1 });
  res.json(logs);
});
app.get('/', async (req, res) => {

  res.send('email is running')
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

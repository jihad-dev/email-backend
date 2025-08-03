const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  pixelId: String,
  viewedAt: Date,
  ip: String,
  userAgent: String
});

module.exports = mongoose.model('Log', logSchema);

# 📧 Email Tracker

A comprehensive email tracking application that allows users to send emails with embedded tracking pixels and monitor open rates, engagement, and detailed analytics.

## ✨ Features

### 🔐 Authentication & User Management
- User registration and login with JWT authentication
- Secure password hashing with bcrypt
- User profile management
- Password change functionality

### 📨 Email Campaign Management
- Create and manage email campaigns
- Rich email editor with preview
- Campaign status tracking (draft, sent, opened, failed)
- Bulk campaign management

### 📊 Email Tracking & Analytics
- Embedded tracking pixels for email open detection
- Real-time open tracking and logging
- Detailed analytics including:
  - Open rates and counts
  - Device and browser detection
  - IP address tracking
  - Geographic location (optional)
  - Timestamp tracking

### 📈 Dashboard & Reporting
- Comprehensive dashboard with key metrics
- Campaign performance overview
- Real-time statistics
- Detailed campaign reports
- Export functionality

### 🎨 Modern UI/UX
- Responsive design with Tailwind CSS
- Modern React components
- Real-time notifications
- Intuitive navigation
- Mobile-friendly interface

## 🛠 Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database with Mongoose ODM
- **JWT** - Authentication
- **Nodemailer** - Email sending
- **bcryptjs** - Password hashing
- **express-validator** - Input validation
- **helmet** - Security middleware
- **express-rate-limit** - Rate limiting

### Frontend
- **React.js** - UI framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **React Hot Toast** - Notifications
- **React Icons** - Icon library
- **Recharts** - Data visualization
- **date-fns** - Date utilities

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- Gmail account for sending emails

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd email-tracker
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Environment Configuration**
   ```bash
   cp env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   # Server Configuration
   NODE_ENV=development
   PORT=5000
   BASE_URL=http://localhost:5000
   
   # Frontend URL (for CORS)
   FRONTEND_URL=http://localhost:3000
   
   # MongoDB Configuration
   MONGO_URI=mongodb://localhost:27017/email-tracker
   
   # JWT Configuration
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   
   # Email Configuration (Gmail)
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

5. **Gmail Setup**
   - Enable 2-factor authentication on your Gmail account
   - Generate an App Password
   - Use the App Password in your `.env` file

6. **Start the application**
   ```bash
   # Development mode (both backend and frontend)
   npm run dev:full
   
   # Or start separately:
   # Backend only
   npm run dev
   
   # Frontend only (in another terminal)
   npm run client
   ```

7. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📖 Usage Guide

### 1. User Registration
- Navigate to the registration page
- Fill in your details (name, email, password)
- Verify your email (if required)

### 2. Creating Campaigns
- Click "Create Campaign" from the dashboard
- Fill in campaign details:
  - Campaign name
  - Recipient email
  - Subject line
  - Message content
- Choose to save as draft or send immediately

### 3. Sending Emails
- For draft campaigns, navigate to the campaign details
- Click "Send Campaign" to send the email
- The email will include a tracking pixel automatically

### 4. Tracking Analytics
- View real-time tracking data in the dashboard
- Check individual campaign statistics
- Monitor open rates and engagement

### 5. Campaign Management
- View all campaigns in the campaigns list
- Filter by status (draft, sent, opened, failed)
- Access detailed analytics for each campaign

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update profile
- `PUT /api/auth/change-password` - Change password

### Campaigns
- `GET /api/track/campaigns` - Get user campaigns
- `POST /api/track/campaigns` - Create new campaign
- `POST /api/track/campaigns/:id/send` - Send campaign
- `GET /api/track/campaigns/:id/stats` - Get campaign statistics

### Tracking
- `GET /api/track/logs` - Get tracking logs
- `GET /api/track/:campaignId/pixel.gif` - Tracking pixel

## 🏗 Project Structure

```
email-tracker/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── contexts/       # React contexts
│   │   ├── pages/          # Page components
│   │   └── index.js        # App entry point
│   └── package.json
├── controllers/            # Route controllers
├── middleware/             # Custom middleware
├── models/                 # Database models
├── routes/                 # API routes
├── utils/                  # Utility functions
├── server.js              # Express server
└── package.json
```

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Input validation and sanitization
- Rate limiting
- CORS configuration
- Helmet security headers
- Environment variable protection

## 📊 Database Schema

### User Model
- Email, password, name
- Account status and verification
- Timestamps

### Campaign Model
- Campaign details (name, subject, message)
- Recipient information
- Status tracking
- Analytics data

### Log Model
- Tracking pixel hits
- Device and browser information
- IP address and location
- Timestamp data

## 🚀 Deployment

### Backend Deployment (Heroku)
1. Create a Heroku app
2. Set environment variables
3. Deploy using Git:
   ```bash
   heroku create your-app-name
   git push heroku main
   ```

### Frontend Deployment (Vercel)
1. Connect your GitHub repository to Vercel
2. Configure build settings
3. Set environment variables
4. Deploy automatically

### Environment Variables for Production
```env
NODE_ENV=production
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-production-jwt-secret
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
BASE_URL=https://your-backend-url.com
FRONTEND_URL=https://your-frontend-url.com
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the code comments

## 🔮 Future Enhancements

- [ ] Email templates
- [ ] A/B testing
- [ ] Advanced analytics
- [ ] Email scheduling
- [ ] Bulk email sending
- [ ] Email list management
- [ ] Click tracking
- [ ] Geographic analytics
- [ ] Email automation
- [ ] Integration with third-party services

---

**Note**: This application is for educational and personal use. Ensure compliance with email regulations and privacy laws in your jurisdiction. 
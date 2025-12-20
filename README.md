# MERN Authentication Project

A full-stack authentication system built with MongoDB, Express, React, Node.js, and styled with Tailwind CSS.

## Features

- User Registration (Signup)
- User Login
- User Logout
- Forgot Password functionality
- JWT-based authentication
- Protected routes
- Responsive UI with Tailwind CSS

## Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- Axios
- React Router

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcrypt
- nodemailer

## Installation

### Prerequisites
- Node.js installed
- MongoDB installed and running
- npm or yarn package manager

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the server directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
CLIENT_URL=http://localhost:3000
```

Start the backend server:

```bash
npm start
```

### Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file in the client directory:

```
REACT_APP_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm start
```



## Usage

1. Navigate to `http://localhost:3000`
2. Sign up with your email and password
3. Log in with your credentials
4. Access protected routes after authentication
5. Use forgot password if needed

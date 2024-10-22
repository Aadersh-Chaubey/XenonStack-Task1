# XenonStack-Task1


# Real Estate Web Application

## Overview
This is a real estate web application that allows users to view property listings, sign up, log in, and receive AI-driven property recommendations based on their browsing history and preferences. The app is built with a responsive design to ensure seamless usability on both desktop and mobile devices.

## Technologies Used
### Frontend:
- **React.js**: For building the user interface.
- **CSS**: For styling the application.
- **React Router**: For navigation between different pages.

### Backend:
- **Node.js (Express)**: For handling server-side operations and API requests.
- **MongoDB**: As the database to store user and property data.

### Other Tools:
- **Axios**: For making HTTP requests to the backend.
- **Mongoose**: For interacting with MongoDB from Node.js.
- **React Router**: For navigation between pages.

## Features
- **User Authentication**: Users can sign up, log in, and log out.
- **Property Listings**: Users can view property listings fetched from a database, filtered by price, location, etc.
- **Responsive Design**: The app works well on both desktop and mobile devices.

## Project Structure
```bash
├── backend
│   ├── app.js              # Main server file
│   ├── models
│   │   └── Property.js      # Mongoose model for properties
│   │   └── User.js          # Mongoose model for users
│   ├── routes
│   │   └── auth.js          # Authentication routes (signup, login)
│   │   └── property.js      # Property listing routes
│   └── ai_recommendation.py # Python script for AI property recommendations
├── frontend
│   ├── public
│   │   └── index.html       # Main HTML file
│   ├── src
│   │   ├── components
│   │   │   └── Signup.js    # Signup component
│   │   │   └── Login.js     # Login component
│   │   │   └── Navbar.js    # Navbar component
│   │   │   └── Profile.js    # Profile component
│   │   │   └── PropertyList.js # Property listings component
│   │   ├── App.js           # Main React app component
│   │   ├── index.js         # Entry point for React app
│   └── package.json         # Frontend dependencies
└── README.md                # Project README



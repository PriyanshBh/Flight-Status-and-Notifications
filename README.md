# Flight Status & Notifications App

## Overview

The Flight Status & Notifications App is a full-stack application designed to provide real-time flight status updates and notifications to users. It allows users to view flight details, filter by flight number, and send notifications via email or SMS.

## Features

- **View Flight Status**: Display flight details including status, gate number, departure, and arrival times.
- **Search Flights**: Filter flights by flight number.
- **Send Notifications**: Notify users about flight status via email or SMS.

## Libraries and Technologies Used

- **Frontend**:
  - **React**: A JavaScript library for building user interfaces.
  - **Tailwind CSS**: A utility-first CSS framework for styling.
  - **axios**: A promise-based HTTP client for making API requests.
  - **React Router**: For routing in the application.

- **Backend**:
  - **Node.js**: A JavaScript runtime for building server-side applications.
  - **Express**: A web application framework for Node.js.
  - **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
  - **Nodemailer**: A module for sending emails.
  - **Twilio**: A service for sending SMS messages.

- **Database**:
  - **MongoDB**: A NoSQL database for storing flight information.

## Getting Started

To run this application locally, follow these steps:

1. **Clone the Repository**

   Setup the Backend

Navigate to the backend directory:

bash
cd backend


Install dependencies:

bash
npm install


Create a .env file in the backend directory and add your environment variables. Use the provided .env sample:

# MongoDB URI
MONGO_URI=mongodb://localhost:27017/your_database_name

# Gmail SMTP Credentials
EMAIL_USER=your_gmail_email@gmail.com
EMAIL_PASS=your_gmail_app_password

# Twilio Credentials
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
Populate the database with mock data:


npm run populate



Start the backend server:
bash
npm start
Setup the Frontend



Navigate to the frontend directory:
bash
cd ../frontend


Install dependencies:
bash
npm install


Start the frontend development server:
bash
npm start
Access the Application


Open your browser and go to http://localhost:3000 to access the application.


Folder Structure
backend: Contains the server-side code, including API routes, controllers, and database models.
frontend: Contains the client-side code, including React components and styling.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any questions or support, please contact krpriyanshbhardwaj@gmail.com.

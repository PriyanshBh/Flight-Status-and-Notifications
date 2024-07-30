require('dotenv').config(); // Load environment variables from .env file

const express = require('express'); // Import Express for server setup
const cors = require('cors'); // Import CORS middleware for cross-origin requests
const bodyParser = require('body-parser'); // Import Body-Parser to parse JSON request bodies
const nodemailer = require('nodemailer'); // Import Nodemailer for sending emails
const twilio = require('twilio'); // Import Twilio for sending SMS
const { Flight, connectToDatabase } = require('./config/db'); // Import the Flight model and connect function

const app = express(); // Create an Express application
const port = process.env.PORT || 5000; // Set the port from environment variable or default to 5000

app.use(cors()); // Enable CORS for all origins
app.use(bodyParser.json()); // Parse incoming JSON requests

// Fetch all flights from the database
app.get('/api/flights', async (req, res) => {
  try {
    const flights = await Flight.find(); // Find all flights
    res.json(flights); // Send the flight data as JSON
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch flights' }); // Send error message if fetching fails
  }
});

// Notify user via email
app.post('/api/notify/email', async (req, res) => {
  const { email, flightNumber, status } = req.body; // Destructure the email, flight number, and status from request body

  // Configure Nodemailer transport
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use Gmail service
    auth: {
      user: process.env.EMAIL_USER, // Email username from environment variables
      pass: process.env.EMAIL_PASS // Email password from environment variables
    }
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender email from environment variables
    to: email, // Recipient email from request body
    subject: 'Flight Status Notification', // Subject of the email
    text: `Flight ${flightNumber} is currently ${status}.` // Body of the email
  };

  try {
    await transporter.sendMail(mailOptions); // Send the email
    res.status(200).json({ message: 'Email sent successfully' }); // Send success response
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' }); // Send error message if email sending fails
  }
});

// Notify user via SMS
app.post('/api/notify/sms', async (req, res) => {
  const { phone, flightNumber, status } = req.body; // Destructure phone number, flight number, and status from request body

  // Twilio credentials
  const accountSid = process.env.TWILIO_SID; // Twilio Account SID from environment variables
  const authToken = process.env.TWILIO_AUTH_TOKEN; // Twilio Auth Token from environment variables
  const client = twilio(accountSid, authToken); // Create a Twilio client instance

  // SMS options
  try {
    await client.messages.create({
      body: `Flight ${flightNumber} is currently ${status}.`, // SMS body
      from: process.env.TWILIO_PHONE_NUMBER, // Twilio phone number from environment variables
      to: phone // Recipient phone number from request body
    });
    res.status(200).json({ message: 'SMS sent successfully' }); // Send success response
  } catch (error) {
    res.status(500).json({ error: 'Failed to send SMS' }); // Send error message if SMS sending fails
  }
});

// Connect to the database and start the server
connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // Log server start message
  });
});

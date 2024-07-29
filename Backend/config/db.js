const mongoose = require('mongoose'); // Import mongoose for MongoDB connection
require('dotenv').config(); // Load environment variables from .env file

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Flight Schema
const flightSchema = new mongoose.Schema({
  flightNumber: { type: String, required: true },
  status: { type: String, required: true },
  gate: { type: String, required: true },
  departureTime: { type: Date, required: true },
  arrivalTime: { type: Date, required: true }
});

// Flight Model
const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;

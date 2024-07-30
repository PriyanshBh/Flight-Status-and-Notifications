const mongoose = require('mongoose'); // Import mongoose for MongoDB connection
require('dotenv').config(); // Load environment variables from .env file

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

// Connect to MongoDB
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');
    
    // Populate the database with mock data
    await populateDatabase();
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

// Populate the database with mock data
const populateDatabase = async () => {
  const mockFlights = [
    { flightNumber: 'PB123', status: 'On Time', gate: 'A1', departureTime: new Date(), arrivalTime: new Date() },
    { flightNumber: 'BA456', status: 'Delayed', gate: 'B2', departureTime: new Date(), arrivalTime: new Date() },
    { flightNumber: 'CA789', status: 'Cancelled', gate: 'C3', departureTime: new Date(), arrivalTime: new Date() },
    { flightNumber: 'DL101', status: 'On Time', gate: 'D4', departureTime: new Date(), arrivalTime: new Date() },
    { flightNumber: 'UA202', status: 'Delayed', gate: 'E5', departureTime: new Date(), arrivalTime: new Date() },
    { flightNumber: 'AA303', status: 'Cancelled', gate: 'F6', departureTime: new Date(), arrivalTime: new Date() },
    { flightNumber: 'SW404', status: 'On Time', gate: 'G7', departureTime: new Date(), arrivalTime: new Date() },
    { flightNumber: 'JB505', status: 'Delayed', gate: 'H8', departureTime: new Date(), arrivalTime: new Date() },
    { flightNumber: 'FR606', status: 'Cancelled', gate: 'I9', departureTime: new Date(), arrivalTime: new Date() },
    { flightNumber: 'LH707', status: 'On Time', gate: 'J10', departureTime: new Date(), arrivalTime: new Date() }
  ];

  try {
    // Clear existing flights from the database
    await Flight.deleteMany({});
    console.log('Existing flights cleared');

    // Insert mock flight data
    await Flight.insertMany(mockFlights);
    console.log('Mock flights inserted');
  } catch (error) {
    console.error('Failed to populate database:', error);
  }
};

// Export the Flight model and connect function
module.exports = { Flight, connectToDatabase };

const Flight = require('../config/db'); // Import the Flight model

// Populate the database with mock data
const populateDatabase = async (req, res) => {
  const mockFlights = [
    { flightNumber: 'AA123', status: 'On Time', gate: 'A1', departureTime: new Date(), arrivalTime: new Date() },
    { flightNumber: 'BA456', status: 'Delayed', gate: 'B2', departureTime: new Date(), arrivalTime: new Date() },
    { flightNumber: 'CA789', status: 'Cancelled', gate: 'C3', departureTime: new Date(), arrivalTime: new Date() },
    
  ];

  try {
    await Flight.deleteMany(); // Clear existing flights from the database
    const insertedFlights = await Flight.insertMany(mockFlights); // Insert mock flight data
    console.log('Inserted Flights:', insertedFlights.length); // Log number of inserted flights
    res.status(200).json({ message: 'Database populated successfully', flights: insertedFlights }); // Send success response with inserted flights
  } catch (error) {
    res.status(500).json({ error: 'Failed to populate database' }); // Send error message if database population fails
  }
};

module.exports = { populateDatabase }; // Export the controller function

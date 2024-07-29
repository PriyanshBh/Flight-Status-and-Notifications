const Flight = require('../config/db'); // Import the Flight model

// Controller function to fetch all flights
const getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find(); // Fetch all flights from the database
    res.status(200).json(flights); // Send fetched flights as response
  } catch (error) {
    console.error('Error fetching flights:', error); // Log error
    res.status(500).json({ error: 'Failed to fetch flights' }); // Send error message if fetching flights fails
  }
};

module.exports = { getAllFlights }; // Export the controller function

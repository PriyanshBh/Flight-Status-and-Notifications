const express = require('express'); // Import Express
const router = express.Router(); // Create a new router
const { getAllFlights } = require('../controllers/flightController'); // Import the controller

// Fetch all flights from the database
router.get('/', getAllFlights);

module.exports = router; // Export the router

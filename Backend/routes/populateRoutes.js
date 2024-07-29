const express = require('express'); // Import Express
const router = express.Router(); // Create a new router
const { populateDatabase } = require('../controllers/populateController'); // Import the controller

// Populate the database with mock data
router.post('/', populateDatabase);

module.exports = router; // Export the router

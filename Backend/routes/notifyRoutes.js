const express = require('express'); // Import Express
const router = express.Router(); // Create a new router
const { notifyByEmail, notifyBySMS } = require('../controllers/notifyController'); // Import the controller

// Notify user via email
router.post('/email', notifyByEmail);

// Notify user via SMS
router.post('/sms', notifyBySMS);

module.exports = router; // Export the router

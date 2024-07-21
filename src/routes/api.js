const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

router.get('/weather', weatherController.getWeather);
router.get('/location', weatherController.getLocation);

// Additional API routes
router.get('/additional1', weatherController.getAdditional1);
router.get('/additional2', weatherController.getAdditional2);

module.exports = router;

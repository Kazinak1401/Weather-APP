const weatherService = require('../services/weatherService');

exports.getWeather = async (req, res) => {
  try {
    const city = req.query.city;
    const weatherData = await weatherService.fetchWeather(city);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};

exports.getLocation = async (req, res) => {
  try {
    const city = req.query.city;
    const locationData = await weatherService.fetchLocation(city);
    res.json(locationData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch location data' });
  }
};

// Additional API controllers
exports.getAdditional1 = async (req, res) => {
  try {
    const data = await weatherService.fetchAdditional1();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch additional API data 1' });
  }
};

exports.getAdditional2 = async (req, res) => {
  try {
    const data = await weatherService.fetchAdditional2();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch additional API data 2' });
  }
};

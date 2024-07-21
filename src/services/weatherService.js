const axios = require('axios');

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

exports.fetchWeather = async (city) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}`);
  return response.data;
};

exports.fetchLocation = async (city) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}`);
  const { coord } = response.data;
  return coord;
};

// Additional API services
exports.fetchAdditional1 = async () => {
  // Implement API call
  return {};
};

exports.fetchAdditional2 = async () => {
  // Implement API call
  return {};
};

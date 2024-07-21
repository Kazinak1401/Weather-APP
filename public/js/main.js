async function getWeather() {
    const city = document.getElementById('city').value;
    const response = await fetch(`/api/weather?city=${city}`);
    const data = await response.json();
    document.getElementById('weather').innerText = JSON.stringify(data, null, 2);
  
    const mapResponse = await fetch(`/api/location?city=${city}`);
    const mapData = await mapResponse.json();
    // Implement map display logic here
  }
  
import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for React frontend
app.use(cors());

// Weather API Key
const apiKey = process.env.OPENWEATHER_API_KEY; // Use .env to keep your API key secure

// Endpoint for getting weather by city name
app.get('/weather', async (req, res) => {
  const { city } = req.query;

  if (!city) {
    return res.status(400).send({ error: 'City name is required' });
  }

  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const { main, weather, wind, name } = response.data;

    res.json({
      city: name,
      temperature: main.temp,
      condition: weather[0].main,
      icon: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
      humidity: main.humidity,
      windSpeed: wind.speed,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error fetching weather data' });
  }
});

// Endpoint for getting weather by geolocation (coordinates)
app.get('/weather/by-coordinates', async (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res.status(400).send({ error: 'Latitude and Longitude are required' });
  }

  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    const { main, weather, wind, name } = response.data;

    res.json({
      city: name,
      temperature: main.temp,
      condition: weather[0].main,
      icon: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
      humidity: main.humidity,
      windSpeed: wind.speed,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error fetching weather data by location' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Weather API is running');
}
);
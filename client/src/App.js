import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import axios from 'axios';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWeatherByCity = async (city) => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeather(res.data);
    } catch (err) {
      setError('City not found or network error.');
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await axios.get(
            `http://localhost:5000/weather/by-coordinates?lat=${latitude}&lon=${longitude}`
          );
          setWeather(res.data);
        } catch (err) {
          setError('Could not fetch weather by location.');
        }
      },
      (err) => {
        setError('Location permission denied.');
      }
    );
  };

  useEffect(() => {
    fetchWeatherByLocation();
  }, []);

  return (
    <div className="app">
      <div className="weather-dashboard">
        <div className="sidebar">
          <h2>WeatherWise</h2>
          <div className="status-card">
            <p>Status</p>
            <div className="status-info">
              <span className="status-text"></span>
              <span className="status-curve"></span>
            </div>
          </div>
          <div className="search-location">
            <SearchBar onSearch={fetchWeatherByCity} />
          </div>
        </div>

        <div className="main-card">
          {loading && <p>Loading...</p>}
          {error && <p className="error">{error}</p>}
          {weather && <WeatherCard data={weather} />}
        </div>
      </div>
    </div>
  );
};
export default App;
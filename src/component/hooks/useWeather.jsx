
import { useState } from 'react';
import axios from 'axios';

const API_KEY = '6d9522c2a8cb65f3214256a874403b7d';
    // Custom Hook
const useWeather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    setLoading(true);
    setError('');
    if (!city) {
      setError('Please enter a city name');
      setLoading(false);
      return;
    }
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError('No result found. Please enter a valid city.');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
    setLoading(false);
  };

  return {
    city,
    setCity,
    weather,
    error,
    loading,
    fetchWeather,
  };
};



export default useWeather
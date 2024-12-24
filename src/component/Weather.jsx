import React, { useState } from 'react';

import { CiLocationOn } from 'react-icons/ci';
import useWeather from './hooks/useWeather';




// Component
const Weather = () => {
  const {
    city,
    setCity,
    weather,
    error,
    loading,
    fetchWeather,
  } = useWeather();
  const [isDayMode, setIsDayMode] = useState(true);

  return (
    <div
      className={`min-h-screen  relative bg-cover bg-center transition-all duration-500 ${
        isDayMode
          ? "bg-[url('https://images.unsplash.com/photo-1630260643564-7f9c9c140682?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D')]"
          : "bg-[url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmlnaHR8ZW58MHx8MHx8fDA%3D')]"
      }`}
    >
      
      {/* Overlay */}
      <div className="w-full h-full absolute top-0 left-0 bg-neutral-950/70 "></div>

      {/* Main Content */}
      <div className="z-50 w-full h-full  flex flex-col items-center justify-center gap-5  sm:px-6 md:px-8 lg:flex-row lg:gap-6 lg:h-screen">
        {/* Toggle Day/Night Mode 
        <button
          onClick={() => setIsDayMode((prev) => !prev)}
          className="absolute top-4 right-4 bg-white text-black py-2 px-4 rounded-lg shadow-md font-medium transition duration-200"
        >
          {isDayMode ? 'Switch to Night Mode' : 'Switch to Day Mode'}
        </button>
<h1 className='text-purple-800 sm:text-sm md:text-[30px] py-11 text-center hidden lg:block absolute top-0 w-full bg-white font-medium'>WEATHER</h1>*/}
        {/* Design */}
        <div className="bg-neutral-50/10 backdrop-blur-lg p-6 rounded-xl border border-neutral-200/20 shadow-md w-full max-w-md mt-[120px] md:ml-[200px] lg:mt-0">
          {/* Title */}
          <h1 className="text-center text-2xl font-semibold text-white mb-6">
            Search Weather by City
          </h1>

          {/* Search Input */}
          <div className="w-full h-14 mb-6 flex items-center gap-x-2 px-4 py-3 text-lg rounded-xl bg-transparent border border-neutral-400 text-neutral-200 focus:outline-none">
            <CiLocationOn className="w-6 h-6" />
            <input
              type="text"
              placeholder="Enter city..."
              required
              className="w-full px-2 py-3 text-lg rounded-xl bg-transparent text-neutral-200 focus:outline-none"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          {/* Search Button */}
          <button
            onClick={fetchWeather}
            className="w-full bg-neutral-900 hover:bg-neutral-950 text-white p-3 text-base font-medium rounded-xl transition duration-200"
          >
            Search
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="mt-6 text-neutral-100 ">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-neutral-200 animate-spin fill-red-500"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="mt-8 bg-red-500/30 backdrop-blur-lg p-6 rounded-lg shadow-md w-full max-w-sm md:ml-[200px]">
            <h2 className="text-center text-2xl font-bold text-red-500 mb-2">Error</h2>
            <p className="text-center text-neutral-50 font-normal text-lg">{error}</p>
          </div>
        )}

        {/* Weather Data Card */}
        {weather && !error && !loading && (
          <div className="mt-8 bg-neutral-50/10 backdrop-blur-lg p-6 rounded-lg flex items-center justify-center flex-col border border-neutral-200/20 shadow-md w-full max-w-sm md:ml-[200px]">
            <h2 className="text-xl font-bold text-neutral-100">
              {weather.name}, {weather.sys.country}
            </h2>
            <div className="space-y-0 w-full flex items-center justify-center flex-col text-center mb-4">
              <img
                className="w-52"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
              <p className="text-neutral-100 text-5xl font-bold">{weather.main.temp}°C</p>
            </div>
            <div className="space-y-2 text-center">
              <p className="text-neutral-100 text-base font-normal">
                Humidity:
                <span className="text-2xl font-semibold ml-2">{weather.main.humidity}</span> %
              </p>
              <p className="text-neutral-100 text-base font-normal">
                Wind Speed:
                <span className="text-2xl font-semibold ml-2">{weather.wind.speed}</span> m/s
              </p>
              <p className="text-neutral-100 text-base font-normal">
                Weather:
                <span className="text-2xl font-semibold ml-2">{weather.weather[0].description}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;

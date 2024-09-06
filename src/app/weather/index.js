import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import WeatherCard from "../../components/WeatherCard";
import "bootstrap/dist/css/bootstrap.min.css";

const WeatherApp = () => {
  const [searchText, setSearchText] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/weather`, {
        params: { city: searchText },
      });
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="bg-light"
      style={{
        backgroundImage: "url('/background.webp')",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <div className="container h-100 d-flex flex-column justify-content-center">
        <div className="bg-white p-4 rounded shadow-lg">
          <Header />
          <div className="mt-4">
            <div className="w-100">
              <h3 className="h5 font-weight-bold mt-0 mb-3">Weather by City</h3>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for a city..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="btn btn-primary mt-3" onClick={handleSearch}>
                  Search
                </button>
                {isLoading && <p className="text-muted mt-2">Searching...</p>}
              </div>
            </div>
            <div className="mt-5">
              {weatherData ? (
                <WeatherCard
                  city={weatherData.location}
                  weather={weatherData.current}
                />
              ) : (
                <p className="text-muted mt-3">No cities selected</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;

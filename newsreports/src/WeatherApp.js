import React from "react";
import { useEffect, useState, useRef } from "react";

function WeatherApp() {
  const temploc = useRef("India");
  const [location, setLocation] = useState("New");
  const [Weatherdata, setWeatherData] = useState([]);

  const api_key = process.env.REACT_APP_WEATHER_API_KEY;
  const apiId = `http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${location}&days=2&aqi=yes&alerts=yes`;

  useEffect(() => {
    fetch(apiId)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        console.log(Weatherdata);
      })
      .catch((error) => console.log(error));
  }, [location]);

  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLocation(temploc.current.value);
          }}
        >
          <h1>Enter the Loaction: </h1>
          <input type="text" ref={temploc} />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default WeatherApp;

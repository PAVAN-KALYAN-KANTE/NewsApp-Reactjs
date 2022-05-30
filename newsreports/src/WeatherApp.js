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
      {Weatherdata && (
        <div className="mx-auto p-4 bg-purple-400 h-screen flex justify-center">
          <div className="flex flex-wrap">
            <div className="w-full   px-2">
              <div className="bg-gray-900 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full bg-white dark:bg-gray-600">
                <div className="px-6 py-6 relative">
                  <div className="flex mb-4 justify-between items-center">
                    <div>
                      <h5 className="mb-0 font-medium text-xl">Delhi,IN</h5>
                      <h6 className="mb-0">April 04 2021</h6>
                      <small>Cloudy</small>
                    </div>
                    <div className="text-right">
                      <h3 className="font-bold text-4xl mb-0">
                        <span>39&deg;</span>
                      </h3>
                    </div>
                  </div>
                  <div className="block sm:flex justify-between items-center flex-wrap">
                    <div className="w-full sm:w-1/2">
                      <div className="flex mb-2 justify-between items-center">
                        <span>Temp</span>
                        <small className="px-2 inline-block">
                          39.11&nbsp;&deg;
                        </small>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                      <div className="flex mb-2 justify-between items-center">
                        <span>Feels like</span>
                        <small className="px-2 inline-block">
                          33.33&nbsp;&deg;
                        </small>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                      <div className="flex mb-2 justify-between items-center">
                        <span>Temp min</span>
                        <small className="px-2 inline-block">
                          24.9&nbsp;&deg;
                        </small>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                      <div className="flex mb-2 justify-between items-center">
                        <span>Temp max</span>
                        <small className="px-2 inline-block">
                          39&nbsp;&deg;
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider table mx-2 text-center bg-transparent whitespace-nowrap">
                  <span className="inline-block px-3">
                    <small>Forecast</small>
                  </span>
                </div>
                <div className="px-6 py-6 relative">
                  <div className="text-center justify-between items-center flex flex-flow: initial;">
                    <div className="text-center mb-0 flex items-center justify-center flex-col">
                      <span className="block my-1">Mon</span>
                      <img
                        src="https://i.imgur.com/ffgW9JQ.png"
                        className="block w-8 h-8"
                      />
                      <span className="block my-1">40.1&deg;</span>
                    </div>
                    <div className="text-center mb-0 flex items-center justify-center flex-col">
                      <span className="block my-1">Mon</span>
                      <img
                        src="https://i.imgur.com/BQbzoKt.png"
                        className="block w-8 h-8"
                      />
                      <span className="block my-1">40.1&deg;</span>
                    </div>
                    <div className="text-center mb-0 flex items-center justify-center flex-col">
                      <span className="block my-1">Mon</span>
                      <img
                        src="https://i.imgur.com/BQbzoKt.png"
                        className="block w-8 h-8"
                      />
                      <span className="block my-1">39.9&deg;</span>
                    </div>
                    <div className="text-center mb-0 flex items-center justify-center flex-col">
                      <span className="block my-1">Mon</span>
                      <img
                        src="https://i.imgur.com/ffgW9JQ.png"
                        className="block w-8 h-8"
                      />
                      <span className="block my-1">41.5&deg;</span>
                    </div>
                    <div className="text-center mb-0 flex items-center justify-center flex-col">
                      <span className="block my-1">Mon</span>
                      <img
                        src="https://i.imgur.com/BQbzoKt.png"
                        className="block w-8 h-8"
                      />
                      <span className="block my-1">38&deg;</span>
                    </div>
                    <div className="text-center mb-0 flex items-center justify-center flex-col">
                      <span className="block my-1">Sun</span>
                      <img
                        src="https://i.imgur.com/ffgW9JQ.png"
                        className="block w-8 h-8"
                      />
                      <span className="block my-1">38.3&deg;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WeatherApp;

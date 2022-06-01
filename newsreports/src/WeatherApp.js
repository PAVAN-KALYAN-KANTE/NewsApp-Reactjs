import React from "react";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function WeatherApp() {
  const navigate = useNavigate();
  const temploc = useRef("India");
  const [Location, setLocation] = useState("Vizag");
  const [Weatherdata, setWeatherData] = useState(() => {
    fetch("weatherdatasample.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log(error));
  });

  const api_key = process.env.REACT_APP_WEATHER_API_KEY;
  const apiId = `http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${Location}&days=6&aqi=yes&alerts=yes`;

  useEffect(() => {
    fetch(apiId, {
      headers: {
        //"Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        console.log(Weatherdata);
        console.log(Weatherdata.location.name);
      })
      .catch((error) => console.log(error));
  }, [Location]);

  return (
    <>
      <div className="flex justify-between bg-slate-400">
        <form
          className="m-auto"
          onSubmit={(e) => {
            e.preventDefault();
            setLocation(temploc.current.value);
          }}
        >
          <h1 className="text-lg font-extrabold mt-5 mb-2">
            Enter the Loaction{" "}
          </h1>
          <input
            type="text"
            ref={temploc}
            className="bg-slate-400 text-blue-900 font-semibold border border-orange-700 h-8"
          />
          <br />
          <input
            type="submit"
            className="rounded-full bg-red-400 w-5/6 my-4 mx-4 h-8 text-pink-50 "
          />
        </form>
        <div className="my-auto mx-5">
          <button
            className="mx-10 my-5 border-2 p-3 rounded-full bg-slate-700 text-white font-bold hover:bg-neutral-200 hover:text-red-500"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
        </div>
      </div>
      {Weatherdata && (
        <div className="mx-auto p-4 bg-purple-400 h-screen flex justify-center">
          <div className="flex flex-wrap">
            <div className="w-full   px-2">
              <div className="bg-gray-900 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full  dark:bg-gray-600">
                <div className="px-6 py-6 relative">
                  <div className="flex mb-4 justify-between items-center">
                    <div>
                      <h5 className="mb-0 font-medium text-xl">
                        {Weatherdata.location.name}
                      </h5>
                      <h6 className="mb-0">{Weatherdata.location.localtime}</h6>
                      <small>{Weatherdata.current.condition.text}</small>
                    </div>
                    <div className="text-right">
                      <h3 className="font-bold text-4xl mb-0">
                        <span>{Weatherdata.current.temp_c}&deg;</span>
                      </h3>
                    </div>
                  </div>
                  <div className="block sm:flex justify-between items-center flex-wrap">
                    <div className="w-full sm:w-1/2">
                      <div className="flex mb-2 justify-between items-center">
                        <span>Temp</span>
                        <small className="px-2 inline-block">
                          {Weatherdata.current.temp_c}&nbsp;&deg;
                        </small>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                      <div className="flex mb-2 justify-between items-center">
                        <span>Feels like</span>
                        <small className="px-2 inline-block">
                          {Weatherdata.current.feelslike_c}&nbsp;&deg;
                        </small>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                      <div className="flex mb-2 justify-between items-center">
                        <span>Wind Kph</span>
                        <small className="px-2 inline-block">
                          {Weatherdata.current.wind_kph}
                        </small>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                      <div className="flex mb-2 justify-between items-center">
                        <span>Wind Dir</span>
                        <small className="px-2 inline-block">
                          {Weatherdata.current.wind_dir}
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
                      <span className="block my-1">
                        {Weatherdata.forecast.forecastday[0].date}
                      </span>
                      <img
                        src="https://i.imgur.com/ffgW9JQ.png"
                        className="block w-8 h-8"
                        alt=""
                      />
                      {Weatherdata.forecast.forecastday[0].day.avgtemp_c}&deg;
                      <span className="block my-1"></span>
                    </div>
                    <div className="text-center mb-0 flex items-center justify-center flex-col">
                      <span className="block my-1">
                        {Weatherdata.forecast.forecastday[1].date}
                      </span>
                      <img
                        src="https://i.imgur.com/BQbzoKt.png"
                        className="block w-8 h-8"
                        alt=""
                      />
                      <span className="block my-1">
                        {Weatherdata.forecast.forecastday[1].day.avgtemp_c}&deg;
                      </span>
                    </div>
                    <div className="text-center mb-0 flex items-center justify-center flex-col">
                      {Weatherdata.forecast.forecastday[2].date}
                      <span className="block my-1"></span>
                      <img
                        src="https://i.imgur.com/BQbzoKt.png"
                        className="block w-8 h-8"
                        alt=""
                      />
                      <span className="block my-1">
                        {Weatherdata.forecast.forecastday[2].day.avgtemp_c}&deg;
                      </span>
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

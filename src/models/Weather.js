const City = require("./City");
const ForecastWeather = require("./ForecastWeather");
const CurrentWeather = require("./CurrentWeather");
const axios = require("./../utils/axios");

class Weather {
  constructor() {}
  getDate(city, country, weatherType) {
    return Promise.all(getWeatherDate(city, country)).then(dataArray => {
      const current = dataArray[0].data; //init data current
      const forecast = dataArray[1].data; //init data forecast
      const weather = {
        city: new City(forecast.city), //data from forecast.city(rawData)   class from City.js
        current: new CurrentWeather(current),
        forecast: forecast.list.map(e => new ForecastWeather(e)) //new ForecastWeather(forecast.list)????
      };
      filterDate(weather, weatherType);
      return weather;
    });
  }
}

module.exports = new Weather();

function filterDate(data, weatherType) {
  if (weatherType === "current") {
    delete data.forecast;
  }
  if (weatherType === "forecast") {
    delete data.current;
  }
}

function getWeatherDate(city, country) {
  const queryString = `${city},${country}`;
  const urls = ["weather", "forecast"];
  return urls.map(e => {
    return axios.get(e, { params: { q: queryString } });
  });
}

const CurrentWeather = require("./CurrentWeather");

class ForecastWeather extends CurrentWeather {
  constructor(rawDate) {
    super(rawDate);
    this.time = rawDate.dt;
  }
}

module.exports = ForecastWeather;

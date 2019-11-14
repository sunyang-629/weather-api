const express = require("express");
const responseFormatter = require("./../utils/responseFormatter");
const weather = require("./../models/Weather");
const countryValidator = require("./../middlewares/counrtryValidator");

const router = express.Router();

// const APPID = process.env.APPID;

router.get("/:cc/:city", countryValidator, (req, res, next) => {
  const { cc, city } = req.params;
  const weatherType = req.query.weatherType;
  weather
    .getDate(city, cc, weatherType)
    .then(response => responseFormatter(res, 200, null, response))
    .catch(err => next(err));
});

module.exports = router;

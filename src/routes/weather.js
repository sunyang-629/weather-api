const express = require("express");

const weather = require("./../models/Weather");

const router = express.Router();

// const APPID = process.env.APPID;

router.get("/:cc/:city", (req, res) => {
  const { cc, city } = req.params;
  const weatherType = req.query.weatherType;
  weather
    .getDate(city, cc, weatherType)
    .then(response => {
      res.send(response);
    })
    .catch(err => console.log(err));
});

module.exports = router;

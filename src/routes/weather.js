const express = require("express");

const weather = require("./../models/Weather");

const router = express.Router();

// const APPID = process.env.APPID;

router.get("/:cc/:city", (req, res) => {
  const { cc, city } = req.params;

  weather
    .getDate(city, cc)
    .then(response => {
      res.send(response);
    })
    .catch(err => console.log(err));
});

module.exports = router;

const express = require("express");
const axios = require("axios");

const router = express.Router();

const APPID = process.env.APPID;

router.get("/", (req, res) => {
  const { cc, city } = req.query;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${cc}&appid=${APPID}`
    )
    .then(response => {
      res.send(response.data);
    })
    .catch(err => console.log(err));
});

module.exports = router;

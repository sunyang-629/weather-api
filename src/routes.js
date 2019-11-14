const express = require("express");
const weatherRoutes = require("./routes/weather");
const responseFormatter = require("./utils/responseFormatter");

const router = express.Router();

router.get("/", (req, res) =>
  responseFormatter(
    res,
    200,
    "welcome to the weather api! visit /api-docs for help",
    null
  )
);

router.use("/api/weather", weatherRoutes);

module.exports = router;

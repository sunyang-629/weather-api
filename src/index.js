require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const helmet = require("helmet");
const morgan = require("morgan");
const logger = require("./utils/logger");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(helmet());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("common"));
}
app.use(routes);

app.listen(PORT, () => {
  logger.info(`server has started at port ${PORT}`);
});

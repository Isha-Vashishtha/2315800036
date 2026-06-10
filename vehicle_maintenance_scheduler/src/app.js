const express = require("express");
const logger = require("./middleware/logger");

const app = express();

app.use(express.json());
app.use(logger);

app.use("/api", require("./routes/scheduler.routes"));

module.exports = app;
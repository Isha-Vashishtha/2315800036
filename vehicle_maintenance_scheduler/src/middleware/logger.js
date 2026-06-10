const axios = require("axios");

const API_URL =
  "http://4.224.186.213/evaluation-service/logs";

async function sendLog(message) {
  try {
    const token = process.env.ACCESS_TOKEN;

    if (!token) {
      console.warn("ACCESS_TOKEN missing");
      return;
    }

    await axios.post(
      API_URL,
      {
        stack: "backend",
        level: "info",
        package: "route",
        message
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );

  } catch (error) {
    console.error(
      "Log API Error:",
      error.response?.data || error.message
    );
  }
}

function logger(req, res, next) {
  const message = `${req.method} ${req.originalUrl}`;

  console.log(
    `[${new Date().toISOString()}] ${message}`
  );

  sendLog(message);

  next();
}

module.exports = logger;
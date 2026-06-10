const axios = require("axios");

const BASE_URL = "http://4.224.186.213/evaluation-service";

async function getDepots(token) {
  try {
    const response = await axios.get(
      `${BASE_URL}/depots`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    return response.data.depots;

  } catch (error) {
    console.log("DEPOT ERROR:");
    console.log(error.response?.status);
    console.log(error.response?.data);
    throw error;
  }
}

module.exports = { getDepots };
const axios = require("axios");

async function getDepots(token) {
  console.log("TOKEN START:");
  console.log(token.substring(0, 40));

  try {
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/depots",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    console.log(response.data);
    return response.data.depots;

  } catch (error) {

    console.log("STATUS:");
    console.log(error.response?.status);

    console.log("DATA:");
    console.log(error.response?.data);

    throw error;
  }
}

module.exports = { getDepots };
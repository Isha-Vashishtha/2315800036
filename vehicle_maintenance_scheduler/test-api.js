require("dotenv").config();
const axios = require("axios");

(async () => {
  try {
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/depots",
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
        }
      }
    );

    console.log(response.data);

  } catch (err) {

    console.log("STATUS:");
    console.log(err.response?.status);

    console.log("DATA:");
    console.log(err.response?.data);
  }
})();
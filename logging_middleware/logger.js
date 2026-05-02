const axios = require("axios");

const LOG_API = "http://20.207.122.201/evaluation-service/logs";

const Log = async (stack, level, pkg, message, token) => {
  try {
    console.log("Sending token:", token); // debug

    const response = await axios.post(
      LOG_API,
      {
        stack: stack,
        level: level,
        package: pkg,
        message: message
      },
      {
        headers: {
          Authorization: "Bearer " + token 
        }
      }
    );

    console.log("Log success:", response.data);
  } catch (error) {
    console.log("FULL ERROR:", error.response?.data || error.message);
  }
};

module.exports = Log;
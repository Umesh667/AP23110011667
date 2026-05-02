const Log = require("../../logging_middleware/logger");
const { TOKEN } = require("../config");
const addVehicleService = async (data) => {
  await Log("backend", "info", "service", "Adding vehicle", TOKEN);

  return {
    id: Date.now(),
    ...data
  };
};

module.exports = { addVehicleService };
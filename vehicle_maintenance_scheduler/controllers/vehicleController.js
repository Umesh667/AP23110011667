const Log = require("../../logging_middleware/logger");
const { addVehicleService } = require("../services/vehicleService");
const { TOKEN } = require("../config");

const addVehicle = async (req, res) => {
  try {
    await Log("backend", "info", "controller", "Add vehicle API hit", TOKEN);

    const vehicle = await addVehicleService(req.body);

    res.json(vehicle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { addVehicle };
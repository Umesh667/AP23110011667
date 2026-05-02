const express = require("express");
const router = express.Router();
const { addVehicle } = require("../controllers/vehicleController");
const { TOKEN } = require("../config");
router.post("/vehicle", addVehicle);

module.exports = router;
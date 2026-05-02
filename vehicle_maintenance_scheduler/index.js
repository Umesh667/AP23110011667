const express = require("express");
const vehicleRoutes = require("./routes/vehicleRoutes");
const Log = require("../logging_middleware/logger");
const { TOKEN } = require("./config");
const app = express();
app.use(express.json());
app.use("/api", vehicleRoutes);

app.get("/test", async (req, res) => {
  await Log("backend", "info", "route", "Test API called", TOKEN);
  res.json({ message: "API working" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
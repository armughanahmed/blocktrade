const router = require("express").Router();
const {
  addShip,
  getPort,
  createContainer,
  getShipsByType,
  createSchedule
} = require("./oceanCarrier.controller");
const {
  auth,
  authAdmin,
  authOrganization,
  authOceanCarrier,
} = require("../../middleware/auth");
router.post("/addShip", auth, authOceanCarrier, addShip);
router.post("/createSchedule", auth, authOceanCarrier, createSchedule);
router.post("/getPort", auth, getPort);
router.post("/getShipsByType", auth, authOceanCarrier, getShipsByType);
router.post("/createContainer", auth, authOceanCarrier, createContainer);
module.exports = router;

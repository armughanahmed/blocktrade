const router = require("express").Router();
const { addShip, getPort } = require("./oceanCarrier.controller");
const {
  auth,
  authAdmin,
  authOrganization,
  authOceanCarrier,
} = require("../../middleware/auth");
router.post("/addShip", auth, authOceanCarrier, addShip);
router.get("/getPort", auth, getPort);
router.post("/getShipsByType", auth, getPort);
module.exports = router;

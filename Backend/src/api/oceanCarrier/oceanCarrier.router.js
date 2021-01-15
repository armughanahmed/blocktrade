const router = require("express").Router();
const { createBRequest, addShip } = require("./oceanCarrier.controller");
const {
  auth,
  authAdmin,
  authOrganization,
  authOceanCarrier,
} = require("../../middleware/auth");
router.post("/create-schedule", function(req, res) {
  auth, authOceanCarrier, createBRequest;
});
router.post("/addShip", function(req, res) {
  auth, authOceanCarrier, addShip;
});
module.exports = router;

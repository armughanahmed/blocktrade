const router = require("express").Router();
const {
  addShip,
  getPort,
  createContainer,
  getShipsByType,
  createSchedule,
  acceptBRequest,
  rejectBRequest,
  getContainerBookingRequests,
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
router.post("/acceptBookingRequest", auth, authOceanCarrier, acceptBRequest);
router.post("/rejectBookingRequest", auth, authOceanCarrier, rejectBRequest);
router.post(
  "/getContainerBookingRequest",
  auth,
  authOceanCarrier,
  getContainerBookingRequests
);
module.exports = router;

const router = require("express").Router();

const {
  auth,
  authInlandTransporter,
} = require("../../middleware/auth");

const {
  addVehicle,
} = require("./inlandT.controller");
router.post("/addVehicle", auth, authInlandTransporter, addVehicle);
module.exports = router;
// git check

const router = require("express").Router();
const { auth, authModerator } = require("../../middleware/auth");
const { adminSignup,getUnverifiedOrganizations,registerOrganization, login } = require("./admin.controller");
// router.post("/signup", auth, authModerator, adminSignup);
router.post(
  "/getUnverifiedOrganizations",
  auth,
  authModerator,
  getUnverifiedOrganizations
);
router.post("/registerOrganization", auth, authModerator, registerOrganization);
router.post("/", login);
module.exports = router;

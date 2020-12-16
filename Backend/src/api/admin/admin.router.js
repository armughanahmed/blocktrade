const router = require("express").Router();
const { auth, authModerator } = require("../../middleware/auth");
const { adminSignup, login } = require("./admin.controller");
router.post("/signup", auth, authModerator, adminSignup);
router.post("/", login);
module.exports = router;

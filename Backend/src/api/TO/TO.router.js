const router = require("express").Router();

const {
  auth,
  authTerminalOperator,
} = require("../../middleware/auth");

const {
  addYard,
  addBerth,

} = require("./TO.controller");
router.post("/addBerth", auth, authTerminalOperator, addBerth);
router.post("/addYard", auth, authTerminalOperator, addYard);
module.exports = router;
// git check

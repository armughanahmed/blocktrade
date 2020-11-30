const router = require("express").Router();
const { auth } = require("../../middleware/auth");
const { createOrganization } = require("./organization.controller");
router.post("/", createOrganization);

module.exports = router;

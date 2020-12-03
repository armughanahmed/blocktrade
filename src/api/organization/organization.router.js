const router = require("express").Router();
const { createOrganization } = require("./organization.controller");
router.post("/", createOrganization);
module.exports = router;

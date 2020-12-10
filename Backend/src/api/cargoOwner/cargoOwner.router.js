const router = require("express").Router();
const { createQuotation } = require("./cargoOwner.controller");
const {
  auth,
  authAdmin,
  authOrganization,
  authCargoOwner,
} = require("../../middleware/auth");
router.post("/create-quotation", auth, createQuotation);
module.exports = router;

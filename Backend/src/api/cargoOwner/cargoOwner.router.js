const router = require("express").Router();
const { createQuotation } = require("./cargoOwner.controller");
const {
  auth,
  authAdmin,
  authOrganization,
  authCargoOwner,
} = require("../../middleware/auth");
router.post("/create-quotation", auth, authCargoOwner, createQuotation);
module.exports = router;

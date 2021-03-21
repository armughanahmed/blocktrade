const router = require("express").Router();
const {
  createQuotation,
  viewQuotations,
  viewLCL,
  viewFCL,
  approveQuotation,
  getSchedule,
  checkDate,
  getQuotationUrl,
  rejectQuotation,
} = require("./cargoOwner.controller");
const {
  auth,
  authAdmin,
  authOrganization,
  authCargoOwner,
} = require("../../middleware/auth");
router.post("/create-quotation", auth, authCargoOwner, createQuotation);
router.get("/view-quotations", auth, authCargoOwner, viewQuotations);
router.get("/view-lcl", auth, authCargoOwner, viewLCL);
router.get("/view-fcl", auth, authCargoOwner, viewFCL);
router.post("/approve-quotation", auth, authCargoOwner, approveQuotation);
router.post("/getSchedule", getSchedule);
router.post("/checkDate", checkDate); //verifying departure and arrival date.
router.post("/getQuotationDocument", auth, authCargoOwner, getQuotationUrl);
router.post("/reject-quotation", auth, authCargoOwner, rejectQuotation);
module.exports = router;

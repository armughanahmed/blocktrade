const router = require("express").Router();
<<<<<<< HEAD
const { createQuotation } = require("./cargoOwner.controller");
=======
const {
  createQuotation,
  viewQuotations,
  viewLCL,
  viewFCL,
  approveQuotation,
  getSchedule,
} = require("./cargoOwner.controller");
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
const {
  auth,
  authAdmin,
  authOrganization,
  authCargoOwner,
} = require("../../middleware/auth");
router.post("/create-quotation", auth, authCargoOwner, createQuotation);
<<<<<<< HEAD
=======
router.get("/view-quotations", auth, authCargoOwner, viewQuotations);
router.get("/view-lcl", auth, authCargoOwner, viewLCL);
router.get("/view-fcl", auth, authCargoOwner, viewFCL);
router.post("/approve-quotation", auth, authCargoOwner, approveQuotation);
router.post("/getSchedule", getSchedule);
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
module.exports = router;

const router = require("express").Router();
const {
  createShipment,
  viewQuotations,
  viewQuotationsDetails,
  makeQuotation,
  getPartnerConsignments,
} = require("./shippingCompany.controller");
const { auth, authShippingComapny } = require("../../middleware/auth");
// router.post("/create-shipment", auth, authShippingComapny, createShipment);
router.get("/viewQuotations", auth, authShippingComapny, viewQuotations);
router.post(
  "/viewQuotationsDetails",
  auth,
  authShippingComapny,
  viewQuotationsDetails
);
router.post("/makeQuotation", auth, authShippingComapny, makeQuotation);
router.post(
  "/getCargoOwnerByConsignment",
  auth,
  authShippingComapny,
  getPartnerConsignments
);
module.exports = router;

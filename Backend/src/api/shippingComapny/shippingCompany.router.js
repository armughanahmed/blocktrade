const router = require("express").Router();
const {
  createShipment,
  viewQuotations,
  viewQuotationsDetails,
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
module.exports = router;

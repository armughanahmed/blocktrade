const router = require("express").Router();
const {
  createShipment,
  viewQuotations,
  viewQuotationsDetails,
  makeQuotation,
  getPartnerConsignments,
  getPartnerConsignmentsById,
  bookContainers,
  createBRequest,
  getBookingRequests,
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
router.post(
  "/getConsignmnetsByCargoOwnerId",
  auth,
  authShippingComapny,
  getPartnerConsignmentsById
);
router.post("/bookContainers", auth, authShippingComapny, bookContainers);
router.post("/requestContainer", auth, authShippingComapny, createBRequest);
router.post(
  "/getBookingRequests",
  auth,
  authShippingComapny,
  getBookingRequests
);
module.exports = router;

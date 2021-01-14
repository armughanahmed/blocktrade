const router = require("express").Router();
const { createShipment } = require("./shippingCompany.controller");
const { auth, authShippingComapny } = require("../../middleware/auth");
router.post("/create-shipment", auth, authShippingComapny, createShipment);
module.exports = router;

const router = require("express").Router();
const {
  createOrganization,
  addPartner,
  getPartnerRequests,
  acceptPartner,
  deleteRequest,
  viewPartner,
  deletePartner,
} = require("./organization.controller");
const { auth } = require("../../middleware/auth");
router.post("/", createOrganization);
router.post("/addPartner", auth, addPartner);
router.get("/getRequests", auth, getPartnerRequests);
router.patch("/acceptPartner", auth, acceptPartner);
router.post("/deleteRequest", auth, deleteRequest);
router.get("/getPartners", auth, viewPartner);
router.post("/removePartner", auth, deletePartner);
module.exports = router;

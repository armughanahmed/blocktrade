const {
  getNonAssignedConsignments,
  viewQuotations,
  viewQuotationsById,
  getScheduleById,
  updateFclPrice,
  updateLclPrice,
  updateQuotationPriceAndStatus,
  createDocument,
  updateQuotationDocument,
  getContainerPendingConsignments,
  getQuotationsByShippingCompanyId,
  getQuotationsByCargoOwnerId,
  createBRequest,
  getNonScheduledContainers,
  getBookingRequestsByShippingCompanyId,
} = require("./shippingCompany.service");
const {
  createQuotationDocument,
  createDocHash,
} = require("../constants/functions");
const { viewFCL, viewLCL } = require("../cargoOwner/cargoOwner.service");
const {
  getOrganizationByID,
  viewPartnerReceiver,
  viewPartnerSender,
} = require("../organization/organization.service");
const { getUserByUserId } = require("../users/user.service");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { getPortById } = require("../oceanCarrier/oceanCarrier.service");
module.exports = {
  getNonAssignedConsignments: async (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
      const nonAssignedConsignments = await getNonAssignedConsignments(body);
      if (!nonAssignedConsignments.length) {
        return res.status(404).send({
          success: 0,
          message: "no such consignments",
          data: null,
        });
      }
      res.status(202).send({
        success: 1,
        message: "succesfully found consignmnets",
        data: nonAssignedConsignments,
      });
    } catch (e) {
      console.log(e);
      return res.status(502).send({
        success: 0,
        message: "something went wrong while getting non assigned consignments",
        data: null,
      });
    }
  },
  viewQuotations: async (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
      const quotations = await viewQuotations(body.decoded.result.org_id);
      if (!quotations.length) {
        return res.status(404).send({
          success: 0,
          message: "there are no quotations",
          data: null,
        });
      }
      res.status(202).send({
        success: 1,
        message: "succesfully got quotations",
        data: quotations,
      });
    } catch (e) {
      console.log(e);
      return res.status(502).send({
        success: 0,
        message: "something went wrong while getting quotations",
        data: null,
      });
    }
  },
  viewQuotationsDetails: async (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
      const quotations = await viewQuotationsById(body.quotation_id);
      if (!quotations) {
        return res.status(404).send({
          success: 0,
          message: "there are no quotations",
          data: null,
        });
      }
      const fcl = await viewFCL(body.quotation_id);
      const lcl = await viewLCL(body.quotation_id);
      const schedule = await getScheduleById(quotations.schedule_id);
      let result = {};
      result.quotations = quotations;
      result.fcl = fcl;
      result.lcl = lcl;
      result.schedule = schedule;
      res.status(202).send({
        success: 1,
        message: "succesfully got quotations",
        data: result,
      });
    } catch (e) {
      console.log(e);
      return res.status(502).send({
        success: 0,
        message: "something went wrong while getting quotations by id",
        data: null,
      });
    }
  },
  makeQuotation: async (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
      const quotation = await viewQuotationsById(body.quotationId);
      const cargoOwner = await getOrganizationByID(quotation.cargo_owner_id);
      const shippingCompany = await getOrganizationByID(
        quotation.shipping_company_id
      );
      const schedule = await getScheduleById(body.scheduleId);
      const arrivalPort = await getPortById(schedule.arrival_port_id);
      const departurePort = await getPortById(schedule.departure_port_id);
      const fcl = body.fcl;
      const lcl = body.lcl;
      let priceArrayObj = fcl.concat(lcl);
      let priceArray = [];
      let totalPrice = 0;
      let documentObj = {};
      if (fcl.length) {
        for (let i = 0; i < fcl.length; i++) {
          await updateFclPrice(fcl[i]);
        }
      }
      if (lcl.length) {
        for (let i = 0; i < lcl.length; i++) {
          await updateLclPrice(lcl[i]);
        }
      }
      for (let i = 0; i < priceArrayObj.length; i++) {
        priceArray[i] = Object.values(priceArrayObj[i]);
      }
      for (let i = 0; i < priceArray.length; i++) {
        totalPrice += priceArray[i][1];
      }
      body.totalPrice = totalPrice;
      await updateQuotationPriceAndStatus(body);
      //filename = cargoOwner_shippingCompany_quotationId
      const filename = `${cargoOwner.name}-${shippingCompany.name}-${quotation.quotation_id}`;
      let scheduleObj = {};
      scheduleObj.departurePort = departurePort.name;
      scheduleObj.arrivalPort = arrivalPort.name;
      scheduleObj.departureDate = schedule.departure_date;
      scheduleObj.arrivalDate = schedule.arrival_date;
      priceArrayObj.forEach(function (obj) {
        if (obj.fcl_id) {
          obj.id = obj.fcl_id;
          delete obj.fcl_id;
        } else if (obj.lcl_id) {
          obj.id = obj.lcl_id;
          delete obj.lcl_id;
        }
      });
      const fileLocation = await createQuotationDocument(
        filename,
        scheduleObj,
        priceArrayObj,
        shippingCompany,
        cargoOwner
      );
      const docHash = await createDocHash(fileLocation);
      documentObj.name = filename;
      documentObj.location = fileLocation;
      documentObj.hash = docHash;
      documentObj.type = "quotation";
      const document = await createDocument(documentObj);
      body.document_id = document.insertId;
      await updateQuotationDocument(body);
      const fileSplit = fileLocation.split(`documents\\`)[1];
      console.log(fileSplit);
      return res.status(201).send({
        success: 1,
        message: "succesfully created quotation",
        data: fileSplit,
      });
    } catch (e) {
      console.log(e);
      return res.status(502).send({
        success: 0,
        message: "something went wrong while creating quotation",
        data: null,
      });
    }
  },
  createBRequest: async (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
      const createdSchedule = await createBRequest(body);
      res.status(202).send({
        success: 1,
        message: "BookingRequests schedule successfully created",
        data: createdSchedule.insertId,
      });
    } catch (e) {
      console.log(e);
      return res.status(502).send({
        success: 0,
        message:
          "something went wrong while creating BookingRequests schedules",
        data: null,
      });
    }
  },
  getBookingRequests: async (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
      const bookingRequests = await getBookingRequestsByShippingCompanyId(
        body.decoded.result.org_id
      );
      if (!bookingRequests.length) {
        return res.status(404).send({
          success: 0,
          message: "no requests found",
          data: bookingRequests,
        });
      }
      return res.status(202).send({
        success: 1,
        message: "got booking requests succesfully",
        data: bookingRequests,
      });
    } catch (e) {
      console.log(e);
      return res.status(502).send({
        success: 0,
        message: "something went wrong while getting booking requests",
        data: null,
      });
    }
  },
  getPartnerConsignments: async (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
      let shippingCompanyQuotations = await getQuotationsByShippingCompanyId(
        body.decoded.result.org_id
      );
      if (!shippingCompanyQuotations.length) {
        return res.status(404).send({
          success: 0,
          message: "no consignments found",
          data: null,
        });
      }
      let containerPendingConsignments = [];
      let j = 0;
      for (let i = 0; i < shippingCompanyQuotations.length; i++) {
        const temp = await getContainerPendingConsignments(
          shippingCompanyQuotations[i].quotation_id
        );
        if (temp) {
          containerPendingConsignments[j] = temp;
          j++;
        }
      }
      const cargoOwnerId = shippingCompanyQuotations.filter((quotations) => {
        for (let i = 0; i < containerPendingConsignments.length; i++) {
          if (
            quotations.quotation_id ==
            containerPendingConsignments[i].quotation_id
          ) {
            return true;
          }
        }
      });
      let cargoOwner = [];
      for (let i = 0; i < cargoOwnerId.length; i++) {
        cargoOwner[i] = await getOrganizationByID(
          cargoOwnerId[i].cargo_owner_id
        );
      }
      j = 0;
      for (let i = 1; i < cargoOwner.length; i++) {
        if (cargoOwner[j].cargo_owner_id == cargoOwner[i].cargo_owner_id) {
          cargoOwner[i].check = 1;
        }
        j++;
      }
      const cargoOwnerDuplicated = cargoOwner.filter((co) => {
        if (co.check != 1) {
          return true;
        }
      });
      return res.status(200).send({
        success: 1,
        message: "succesfully got cargo owner",
        data: cargoOwnerDuplicated,
      });
    } catch (e) {
      console.log(e);
      return res.status(502).send({
        success: 0,
        message: "something went wrong while creating quotation",
        data: null,
      });
    }
  },
  getPartnerConsignmentsById: async (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
      const quotations = await getQuotationsByCargoOwnerId(body.cargo_owner_id);
      if (!quotations.length) {
        return res.status(404).send({
          success: 1,
          message: "no consignments",
          data: null,
        });
      }
      let consignments = [];
      for (let i = 0; i < quotations.length; i++) {
        consignments[i] = await getContainerPendingConsignments(
          quotations[i].quotation_id
        );
      }
      return res.status(200).send({
        success: 1,
        message: "succesfully got unassigned consignments",
        data: consignments,
      });
    } catch (e) {
      console.log(e);
      return res.status(502).send({
        success: 0,
        message: "something went wrong while getting unassigned consignmnets",
        data: null,
      });
    }
  },
  bookContainers: async (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
      let partner = await viewPartnerReceiver(req.decoded.result.org_id);
      const partners = partner.concat(
        await viewPartnerSender(req.decoded.result.org_id)
      );
      if (!partners.length) {
        return res.status(404).send({
          success: 0,
          message: "no partners found",
          data: null,
        });
      }
      const containerArray = body.containerSize.split(" ");
      body.size = containerArray[0];
      body.empty_weight = containerArray[1];
      body.total_space = containerArray[2];
      let organization = [];
      for (let i = 0; i < partners.length; i++) {
        if (partners[i].sender_org_id == req.decoded.result.org_id) {
          organization[i] = await getOrganizationByID(
            partners[i].receiver_org_id
          );
        } else {
          organization[i] = await getOrganizationByID(
            partners[i].sender_org_id
          );
        }
      }
      let containers = [];
      let j = 0;
      for (let i = 0; i < organization.length; i++) {
        body.oc_id = organization[i].id;
        const getCont = await getNonScheduledContainers(body);
        if (getCont.length) {
          containers[j++] = getCont;
        }
      }
      if (!containers.length) {
        return res.status(404).send({
          success: 0,
          message: "could not find any containers in the location",
          data: null,
        });
      }
      return res.status(200).send({
        success: 1,
        message: "succesfully got unassigned containers",
        data: containers,
      });
    } catch (e) {
      console.log(e);
      return res.status(502).send({
        success: 0,
        message: "something went wrong while getting unassigned containers",
        data: null,
      });
    }
  },
};

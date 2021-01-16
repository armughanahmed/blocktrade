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
} = require("./shippingCompany.service");
const {createQuotationDocument,createDocHash} = require("../constants/functions");
const { viewFCL, viewLCL } = require("../cargoOwner/cargoOwner.service");
const { getOrganizationByID } = require("../organization/organization.service");
const { getUserByUserId } = require("../users/user.service");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { getPort, getPortById } = require("../oceanCarrier/oceanCarrier.service");
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
      const arrivalPort=await getPortById(schedule.arrival_port_id)
      const departurePort=await getPortById(schedule.departure_port_id)
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
      console.log(filename)
      let scheduleObj={}
      scheduleObj.departurePort=departurePort.name
      scheduleObj.arrivalPort=arrivalPort.name
      scheduleObj.departureDate=schedule.departure_date
      scheduleObj.arrival_date=schedule.arrival_date
      const fileLocation =createQuotationDocument(filename,
          schedule,
          priceArrayObj)
      console.log("fileee")
      console.log(fileLocation)
      console.log("fileee")
      // const docHash = createDocHash(fileLocation);
      // documentObj.name = filename;
      // documentObj.location = fileLocation;
      // documentObj.hash = docHash;
      // document.type = "quotation";
      // const document = await createDocument(documentObj);
      // body.document_id = document.insertId;
      // await updateQuotationDocument(body);
      return res.status(201).send({
        success: 1,
        message: "succesfully created quotation",
        data: fileLocation,
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
};

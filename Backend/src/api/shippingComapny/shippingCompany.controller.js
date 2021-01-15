const {
  getNonAssignedConsignments,
  viewQuotations,
  viewQuotationsById,
  getScheduleById,
} = require("./shippingCompany.service");
const { viewFCL, viewLCL } = require("../cargoOwner/cargoOwner.service");
const { getOrganizationByID } = require("../organization/organization.service");
const { getUserByUserId } = require("../users/user.service");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

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
};

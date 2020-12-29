const {
<<<<<<< HEAD
  getQuotationByOrganizationId,
  createQuotation,
  createFCL,
  createLCL,
} = require("./cargoOwner.service");
const { getOrganizationByID } = require("../organization/organization.service");
const { getUserByUserId } = require("../users/user.service");
=======
  createQuotation,
  createFCL,
  createLCL,
  removeQuotation,
  viewQuotations,
  viewFCL,
  viewLCL,
  viewQuotationById,
  approveQuotation,
  createConsignment,
  getSchedule,
  getBRContainerBySchedule_Id,
  getPortsByPort_id,
  getStopsBySchedule_Id,
  getOceanCarrierById,
  getShippingCompanyById,
} = require("./cargoOwner.service");
const {
  getOrganizationByID,
  viewPartnerReceiver,
  viewPartnerSender,
} = require("../organization/organization.service");
const { getUserByUserId } = require("../users/user.service");
// const {
//   getBookingContainers,
// } = require("../oceanCarrier/oceanCarrier.service");
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const sendEmail = async (text, to, org) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "armughancr7@gmail.com",
      pass: "kiunbataon",
    },
  });

  let mailOptions = {
    from: "armughancr7@gmail.com",
    to: to,
    subject: "quotation request",
    cc: org,
    html: `<h3>thank you ${text} for using blocktrade for sending shipments</h3><br>
           <h3>your quotation request has been noted. you can see details of your consignments at the quotation tab</h3>`,
  };

  let info = await transporter.sendMail(mailOptions);
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  return info;
};

module.exports = {
  createQuotation: async (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
<<<<<<< HEAD
      console.log("far");
      console.log(req.body);
      console.log("***");
      const lcl = req.body.lcl;
      const fcl = req.body.fcl;
      let created_lcl = [];
      let created_fcl = [];
      let length;
      let creatingQuotation = {};
      console.log("***");
      console.log(body.decoded);
      console.log("***");
      const org_details = await getOrganizationByID(body.decoded.result.org_id);
      creatingQuotation.decoded = { result: { org_id: org_details.id } };

      if (!lcl.length && !fcl.length) {
        res.status(502).send({
          success: 0,
          message: "something went wrong while creating quotations",
=======
      console.log(req.body.fcl);
      const lcl = req.body.lcl;
      const fcl = req.body.fcl;
      let creatingQuotation = {};
      const org_details = await getOrganizationByID(body.decoded.result.org_id);
      creatingQuotation.org_id = org_details.id;
      const createdQuotation = await createQuotation(creatingQuotation);
      if (!lcl.length && !fcl.length) {
        await removeQuotation(createdQuotation.insertId);
        return res.status(502).send({
          success: 0,
          message: "lcl and fcl both are empty",
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
          data: null,
        });
      } else if (!lcl.length) {
        console.log("inside no lcl");
        for (let i = 0; i < fcl.length; i++) {
<<<<<<< HEAD
          fcl[i].decoded = { result: { org_id: org_details.id } };
          created_fcl[i] = await createFCL(fcl[i]);
        }
        length = fcl.length;
        for (let i = 0; i < length; i++) {
          creatingQuotation.fcl_id = created_fcl[i].insertId;
          creatingQuotation.lcl_id = null;
          await createQuotation(creatingQuotation);
=======
          fcl[i].quotation_id = createdQuotation.insertId;
          await createFCL(fcl[i]);
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
        }
      } else if (!fcl.length) {
        console.log("inside no fcl");
        for (let i = 0; i < lcl.length; i++) {
<<<<<<< HEAD
          lcl[i].decoded = { result: { org_id: org_details.id } };
          created_lcl[i] = await createLCL(lcl[i]);
        }
        console.log(created_lcl[0]);
        length = lcl.length;
        for (let i = 0; i < length; i++) {
          creatingQuotation.lcl_id = created_lcl[i].insertId;
          creatingQuotation.fcl_id = null;
          await createQuotation(creatingQuotation);
=======
          lcl[i].quotation_id = createdQuotation.insertId;
          await createLCL(lcl[i]);
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
        }
      } else {
        if (lcl.length) {
          for (let i = 0; i < lcl.length; i++) {
<<<<<<< HEAD
            lcl[i].decoded = { result: { org_id: org_details.id } };
            created_lcl[i] = await createLCL(lcl[i]);
=======
            lcl[i].quotation_id = createdQuotation.insertId;
            await createLCL(lcl[i]);
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
          }
        }
        if (fcl.length) {
          for (let i = 0; i < fcl.length; i++) {
<<<<<<< HEAD
            fcl[i].decoded = { result: { org_id: org_details.id } };
            created_fcl[i] = await createFCL(fcl[i]);
          }
        }
        lcl.length >= fcl.length
          ? (length = lcl.length)
          : (length = fcl.length);
        for (let i = 0; i < length; i++) {
          if (lcl[i]) {
            creatingQuotation.lcl_id = created_lcl[i].insertId;
          }
          if (fcl[i]) {
            creatingQuotation.fcl_id = created_fcl[i].insertId;
          }
          await createQuotation(creatingQuotation);
=======
            fcl[i].quotation_id = createdQuotation.insertId;
            await createFCL(fcl[i]);
          }
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
        }
      }
      const user_details = await getUserByUserId(body.decoded.result.id);
      const mail = sendEmail(
        user_details.name,
        user_details.email,
        org_details.email
      );
      if (!mail) {
        console.log("error in sending mail");
      }
<<<<<<< HEAD
      res.status(202).send({
=======
      return res.status(202).send({
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
        success: 1,
        message: "quotation has been received",
        data: null,
      });
    } catch (e) {
      console.log(e);
<<<<<<< HEAD
      res.status(502).send({
=======
      return res.status(502).send({
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
        success: 0,
        message: "something went wrong while creating quotations",
        data: null,
      });
    }
  },
<<<<<<< HEAD
  getQuotationByOrganizationId: async (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
      const org_details = await getOrganizationByID(body.decoded.result.org_id);
      const getQuotation = await getQuotationByOrganizationId(org_details.id);
      res.status(202).send({
        success: 1,
        message: "succesfully got quotation",
        data: getQuotation,
=======
  viewQuotations: async (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
      const quotations = await viewQuotations(body.decoded.result.org_id);
      if (!quotations) {
        return res.status(202).send({
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
      res.status(502).send({
        success: 0,
        message: "something went wrong while getting quotations",
        data: null,
      });
    }
  },
  viewFCL: async (req, res) => {
    try {
      let body = req.body;
      const quotations = await viewFCL(body.quotation_id);
      if (!quotations) {
        return res.status(202).send({
          success: 0,
          message: "there are no quotations",
          data: null,
        });
      }
      res.status(202).send({
        success: 1,
        message: "succesfully got quotations",
        data: quotations,
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
      });
    } catch (e) {
      console.log(e);
      res.status(502).send({
        success: 0,
        message: "something went wrong while getting quotations",
        data: null,
      });
    }
  },
<<<<<<< HEAD
=======
  viewLCL: async (req, res) => {
    try {
      let body = req.body;
      const quotations = await viewLCL(body.quotation_id);
      if (!quotations) {
        return res.status(202).send({
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
      res.status(502).send({
        success: 0,
        message: "something went wrong while getting quotations",
        data: null,
      });
    }
  },
  approveQuotation: async (req, res) => {
    try {
      let body = req.body;
      const quotations = await viewQuotationById(body.quotation_id);
      if (!quotations) {
        return res.status(404).send({
          success: 0,
          message: "there are no quotations",
          data: null,
        });
      } else if (quotations.quote_status != "owner-pending") {
        return res.status(409).send({
          success: 0,
          message: "still not approved by authorities",
          data: null,
        });
      }
      await approveQuotation(quotations.quotation_id);
      await createConsignment(quotations.quotation_id);
      res.status(202).send({
        success: 1,
        message: "succesfully approved quotations",
        data: null,
      });
    } catch (e) {
      console.log(e);
      res.status(502).send({
        success: 0,
        message: "something went wrong while approving quotations",
        data: null,
      });
    }
  },
  getSchedule: async (req, res) => {
    try {
      let body = req.body;
      console.log(body)
      body.departureDate = body.departureDate.split("T")[0];
      body.arrivalDate = body.arrivalDate.split("T")[0];
      console.log(body);
      body.decoded = req.decoded;
      const schedules = await getSchedule(body);
      let arrivalPort = [];
      let departurePort = [];
      let stops = [];
      let stopsPort = [];
      let oceanCarrier = [];
      let shippingCompany = [];
      let partner = [];
      let partners = [];
      let result = [];
      for (let i = 0; i < schedules.length; i++) {
        arrivalPort[i] = await getPortsByPort_id(schedules[i].arrival_port_id);
        departurePort[i] = await getPortsByPort_id(
          schedules[i].departure_port_id
        );
        oceanCarrier[i] = await getOrganizationByID(
          schedules[i].ocean_carrier_id
        );
        stops[i] = await getStopsBySchedule_Id(schedules[i].schedule_id);
      }
      for (let i = 0; i < schedules.length; i++) {
        stopsPort.push([]);
        for (let j = 0; j < stops[i].length; j++) {
          stopsPort[i][j] = await getPortsByPort_id(stops[i][j].port_id);
          stopsPort[i][j].arrivalDate = stops[i][j].arrival_date;
          stopsPort[i][j].departureDate = stops[i][j].departure_date;
        }
      }
      for (let i = 0; i < schedules.length; i++) {
        partner[i] = await viewPartnerReceiver(oceanCarrier[i].id);
        partners[i] = partner[i].concat(
          await viewPartnerSender(oceanCarrier[i].id)
        );
        for (let j = 0; j < partners[i].length; j++) {
          shippingCompany.push([]);
          if (partners[i][j].sender_org_id == oceanCarrier[i].id) {
            shippingCompany[i] = await getOrganizationByID(
              partners[i][j].receiver_org_id
            );
          } else {
            shippingCompany[i] = await getOrganizationByID(
              partners[i][j].sender_org_id
            );
          }
        }
      }
      for (let i = 0; i < schedules.length; i++) {
        result.push({});
        result[i].departurePort = departurePort[i].name;
        result[i].arrivalPort = arrivalPort[i].name;
        result[i].departureDate = schedules[i].departure_date;
        result[i].arrivalDate = schedules[i].arrival_date;
        result[i].noOfStops = stops[i].length;
        result[i].shippingCompany = shippingCompany[i].name;
        result[i].oceanCarrier = oceanCarrier[i].name;
        result[i].noOfDays =
          parseInt(result[i].arrivalDate.split("-")[2]) -
          parseInt(result[i].departureDate.split("-")[2]);
        result[i].stops = stopsPort[i];
      }
      res.status(200).send({
        success: 1,
        message: "succesfully got schedules",
        data: result,
      });
    } catch (e) {
      console.log(e);
      res.status(502).send({
        success: 0,
        message: "something went wrong while getting schedules",
        data: null,
      });
    }
  },
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
};

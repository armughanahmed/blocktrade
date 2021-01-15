const {
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
const {
  getBookingContainers,
} = require("../oceanCarrier/oceanCarrier.service");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const sendEmail = async (text, to, org) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "armughancr7@gmail.com",
      pass: "blocktrade",
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
          data: null,
        });
      } else if (!lcl.length) {
        console.log("inside no lcl");
        for (let i = 0; i < fcl.length; i++) {
          fcl[i].quotation_id = createdQuotation.insertId;
          await createFCL(fcl[i]);
        }
      } else if (!fcl.length) {
        console.log("inside no fcl");
        for (let i = 0; i < lcl.length; i++) {
          lcl[i].quotation_id = createdQuotation.insertId;
          await createLCL(lcl[i]);
        }
      } else {
        if (lcl.length) {
          for (let i = 0; i < lcl.length; i++) {
            lcl[i].quotation_id = createdQuotation.insertId;
            await createLCL(lcl[i]);
          }
        }
        if (fcl.length) {
          for (let i = 0; i < fcl.length; i++) {
            fcl[i].quotation_id = createdQuotation.insertId;
            await createFCL(fcl[i]);
          }
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
      return res.status(202).send({
        success: 1,
        message: "quotation has been received",
        data: null,
      });
    } catch (e) {
      console.log(e);
      return res.status(502).send({
        success: 0,
        message: "something went wrong while creating quotations",
        data: null,
      });
    }
  },
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
      body.decoded = req.decoded;
      body.departureDate = body.departureDate.split("T")[0];
      body.arrivalDate = body.arrivalDate.split("T")[0];
      const schedules = await getSchedule(body);
      if (!schedules.length) {
        return res.status(404).send({
          success: 1,
          message: "no schedules found",
          data: null,
        });
      }
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
          stopsPort[i][j].arrivalDate = stops[i][j].arrival_date.toDateString();
          stopsPort[i][j].departureDate = stops[i][
            j
          ].departure_date.toDateString();
        }
      }
      for (let i = 0; i < schedules.length; i++) {
        shippingCompany.push([]);
        partner[i] = await viewPartnerReceiver(oceanCarrier[i].id);
        partners[i] = partner[i].concat(
          await viewPartnerSender(oceanCarrier[i].id)
        );
        console.log("for oc")
        console.log(oceanCarrier[i].id)
        for (let j = 0; j < partners[i].length; j++) {
          if (partners[i][j].sender_org_id == oceanCarrier[i].id) {
            shippingCompany[i][j] = await getOrganizationByID(
              partners[i][j].receiver_org_id
            );
          } else if(partners[i][j].receiver_org_id == oceanCarrier[i].id){
            shippingCompany[i][j] = await getOrganizationByID(
              partners[i][j].sender_org_id
            );
          }
        }
      }
      

      for (let i = 0; i < schedules.length; i++) {
        result.push({});
        result[i].shippingCompany=[];
        result[i].scheduleId = schedules[i].schedule_id;
        result[i].departurePort = departurePort[i].name;
        result[i].arrivalPort = arrivalPort[i].name;
        result[i].departureDate = schedules[i].departure_date;
        result[i].arrivalDate = schedules[i].arrival_date;
        result[i].noOfStops = stops[i].length;
        for(let j=0;j<shippingCompany[i].length;j++){
          result[i].shippingCompany[j] = {id:shippingCompany[i][j].id,name:shippingCompany[i][j].name};
        }
        result[i].oceanCarrier = oceanCarrier[i].name;
        result[i].noOfDays =
          parseInt(result[i].arrivalDate.toUTCString().split(" ")[1]) -
          parseInt(result[i].departureDate.toUTCString().split(" ")[1]);
        result[i].stops = stopsPort[i];
        result[i].departureDate = result[i].departureDate.toDateString();
        result[i].arrivalDate = result[i].arrivalDate.toDateString();
      }
      console.log("checkkk")
      console.log(result)
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
  checkDate: async (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
      if (body.arrivalDate < body.departureDate) {
        return res.status(400).send({
          success: 0,
          message: "Incorrect date",
          data: null,
        });
      }
      return res.status(200).send({
        success: 1,
        message: "correct date",
        data: null,
      });
    } catch (e) {
      console.log(e);
      res.status(502).send({
        success: 0,
        message: "something went wrong while checking schedules",
        data: null,
      });
    }
  },
};

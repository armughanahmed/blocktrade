const {
  getQuotationByOrganizationId,
  createQuotation,
  createFCL,
  createLCL,
} = require("./cargoOwner.service");
const { getOrganizationByID } = require("../organization/organization.service");
const { getUserByUserId } = require("../users/user.service");
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
      const lcl = req.body.lcl;
      const fcl = req.body.fcl;
      let created_lcl = [];
      let created_fcl = [];
      if (lcl) {
        for (let i = 0; i < lcl.length; i++) {
          created_lcl[i] = await createLCL(lcl[i]);
        }
      }
      if (fcl) {
        for (let i = 0; i < fcl.length; i++) {
          created_fcl[i] = await createFCL(fcl[i]);
        }
      }
      let length;
      lcl.length >= fcl.length ? (length = lcl.length) : (length = fcl.length);
      let creatingQuotation = {};
      const org_details = await getOrganizationByID(body.decoded.result.org_id);
      creatingQuotation.org_id = org_details.id;
      for (let i = 0; i < length; i++) {
        creatingQuotation.lcl_id = created_lcl[i].insertId;
        creatingQuotation.fcl_id = created_fcl[i].insertId;
        if (!lcl[i]) {
          creatingQuotation.lcl_id = null;
        } else if (!fcl[i]) {
          creatingQuotation.fcl_id = null;
        }
        await createQuotation(creatingQuotation);
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
      res.status(202).send({
        success: 1,
        message: "quotation has been received",
        data: null,
      });
    } catch (e) {
      console.log(e);
      res.status(502).send({
        success: 0,
        message: "something went wrong while creating quotations",
        data: null,
      });
    }
  },
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
};

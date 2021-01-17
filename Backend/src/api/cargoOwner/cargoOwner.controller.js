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
      console.log("***");
      console.log(req.body.fcl);
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
          data: null,
        });
      } else if (!lcl.length) {
        console.log("inside no lcl");
        for (let i = 0; i < fcl.length; i++) {
          fcl[i].decoded = { result: { org_id: org_details.id } };
          created_fcl[i] = await createFCL(fcl[i]);
        }
        length = fcl.length;
        for (let i = 0; i < length; i++) {
          creatingQuotation.fcl_id = created_fcl[i].insertId;
          creatingQuotation.lcl_id = null;
          await createQuotation(creatingQuotation);
        }
      } else if (!fcl.length) {
        console.log("inside no fcl");
        for (let i = 0; i < lcl.length; i++) {
          lcl[i].decoded = { result: { org_id: org_details.id } };
          created_lcl[i] = await createLCL(lcl[i]);
        }
        console.log(created_lcl[0]);
        length = lcl.length;
        for (let i = 0; i < length; i++) {
          creatingQuotation.lcl_id = created_lcl[i].insertId;
          creatingQuotation.fcl_id = null;
          await createQuotation(creatingQuotation);
        }
      } else {
        if (lcl.length) {
          for (let i = 0; i < lcl.length; i++) {
            lcl[i].decoded = { result: { org_id: org_details.id } };
            created_lcl[i] = await createLCL(lcl[i]);
          }
        }
        if (fcl.length) {
          for (let i = 0; i < fcl.length; i++) {
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

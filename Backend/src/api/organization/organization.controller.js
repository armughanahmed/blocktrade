const {
  createOrganization,
  getOrganizationByEmail,
  createEmployees,
  addPartner,
  checkPartner,
  acceptPartner,
  getPartnerRequests,
  deletePartner,
  getOrganizationByID,
  viewPartnerReceiver,
  viewPartnerSender,
  removePartner,
} = require("./organization.service");
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
    subject: "invite link",
    // cc: org,
    html: `<h3>thank you ${text} for registering with blocktrade.</h3><br>
           <h3>Our team will contact you shortly after viewing the provided infromation</h3>`,
  };

  let info = await transporter.sendMail(mailOptions);
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  return info;
};

module.exports = {
  createOrganization: async (req, res) => {
    try {
      const body = req.body;
      const email = await getOrganizationByEmail(body.email);
      if (email) {
        return res.status(302).send({
          success: 0,
          message: "Email already exists",
          data: null,
        });
      }
      const salt = genSaltSync(10);
      body.password = hashSync(body.password, salt);
      const createOrg = await createOrganization(body);
      body.org_id = createOrg.insertId;
      console.log(createOrg);
      const createEmp = await createEmployees(body);
      const mail = sendEmail(body.name, body.email, null);
      if (!mail) {
        console.log("createUser:: error in sending mail");
      }
      return res.status(200).send({
        success: 1,
        message: "succesfully created organization",
        data: null,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        success: 0,
        message: "error in creating organization",
        data: null,
      });
    }
  },
  addPartner: async (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
      console.log(body);
      const receiver = await getOrganizationByEmail(body.email);
      if (!receiver) {
        return res.status(302).send({
          success: 0,
          message: "no such organization exists",
          data: null,
        });
      }
      body.receiver = receiver.id;

      const checkedPartner = await checkPartner(body);
      if (!checkedPartner) {
        await addPartner(body);
        // const mail = sendEmail(body.name, body.email, null);
        // if (!mail) {
        //   console.log("addPartner:: error in sending mail");
        // }
        return res.status(200).send({
          success: 1,
          message: "succesfully sent partner request",
          data: null,
        });
      }

      return res.status(400).send({
        success: 0,
        message: "already partners or sent request  ",
        data: null,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        success: 0,
        message: "error in sending partner request",
        data: null,
      });
    }
  },
  acceptPartner: async (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
      let partner = await acceptPartner(body);
      console.log("partner ..");
      console.log(partner);
      if (partner.affectedRows == 0) {
        return res.status(404).send({
          success: 0,
          message: "no such partners",
          data: null,
        });
      }
      return res.status(200).send({
        success: 1,
        message: "succesfully accepted partner",
        data: null,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        success: 0,
        message: "error in accepting partner",
        data: null,
      });
    }
  },
  deleteRequest: async (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
      let partner = await deletePartner(body);
      console.log("partner ..");
      console.log(partner);
      if (partner.affectedRows == 0) {
        return res.status(404).send({
          success: 0,
          message: "no such partners",
          data: null,
        });
      }
      return res.status(200).send({
        success: 1,
        message: "succesfully deleted partner",
        data: null,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        success: 0,
        message: "error in deleting partner",
        data: null,
      });
    }
  },
  getPartnerRequests: async (req, res) => {
    //views for accepting incoming partner requests
    try {
      const requests = await getPartnerRequests(req.decoded.result.org_id);
      if (!requests.length) {
        return res.status(404).send({
          success: 1,
          message: "no requests",
          data: null,
        });
      }
      let organization = [];
      for (let i = 0; i < requests.length; i++) {
        organization[i] = await getOrganizationByID(requests[i].sender_org_id);
      }
      let result = [];
      for (let i = 0; i < organization.length; i++) {
        result.push({});
        result[i].name = organization[i].name;
        result[i].type = organization[i].type;
        result[i].email = organization[i].email;
        result[i].id = requests[i].partner_id;
      }
      return res.status(200).send({
        success: 1,
        message: "succesfully got requests",
        data: result,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        success: 0,
        message: "error in getting requests",
        data: null,
      });
    }
  },
  viewPartner: async (req, res) => {
    try {
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
      let result = [];
      for (let i = 0; i < organization.length; i++) {
        result.push({});
        result[i].name = organization[i].name;
        result[i].type = organization[i].type;
        result[i].email = organization[i].email;
        result[i].id = partners[i].partner_id;
      }
      return res.status(200).send({
        success: 1,
        message: "succesfully returned partners",
        data: result,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        success: 0,
        message: "error in viewing partner",
        data: null,
      });
    }
  },
  deletePartner: async (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
      let partner = await removePartner(body);
      console.log("partner ..");
      console.log(partner);
      if (partner.affectedRows == 0) {
        return res.status(404).send({
          success: 0,
          message: "no such partners",
          data: null,
        });
      }
      return res.status(200).send({
        success: 1,
        message: "succesfully deleted partner",
        data: null,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        success: 0,
        message: "error in deleting partner",
        data: null,
      });
    }
  },
};

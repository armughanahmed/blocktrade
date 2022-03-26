const {
  getAdmin,
  createModerator,
  getAdminByEmail,
  getUnverifiedOrganizations,
  registerOrganization,
  rejectOrganization,
} = require("./admin.service");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { getOrganizationByID } = require("../organization/organization.service");
const sendEmailModerator = async (text, to, org) => {
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
    html: `<h3>Hey ${text} you have been added as a moderator in blocktrade.</h3><br>
           <h3>Contact your administrator for password details</h3>`,
  };

  let info = await transporter.sendMail(mailOptions);
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  return info;
};
module.exports = {
  login: async (req, res) => {
    try {
      const body = req.body;
      const admin = await getAdmin(body.email);
      if (!admin) {
        return res.status(403).send({
          success: 0,
          message: "invalid login credentials",
          data: null,
        });
      }
      console.log(admin);
      const result = compareSync(body.password, admin.password);
      if (result) {
        admin.password = undefined;
        const jsontoken = sign({ result: admin }, "blocktrade");
        return res.json({
          success: 1,
          message: "login successfully",
          data: null,
          token: jsontoken,
        });
      } else {
        return res.json({
          success: 0,
          message: "Invalid login credentials",
          data: null,
        });
      }
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        success: 0,
        message: "something went wrong while registering organization",
        data: null,
      });
    }
  },
  // adminSignup: async (req, res) => {
  //   try {
  //     let body = req.body;
  //     body.decode = req.decoded;
  //     const admin = await getAdminByEmail(body);
  //     if (admin) {
  //       return res.status(302).send({
  //         success: 0,
  //         message: "Email already exists",
  //         data: null,
  //       });
  //     }
  //     const salt = genSaltSync(10);
  //     body.password = hashSync(body.password, salt);
  //     const moderator = await createModerator(body);
  //     const mail = sendEmailModerator(body.name, body.email, null);
  //     if (!mail) {
  //       console.log("createUser:: error in sending mail");
  //     }
  //     return res.status(201).send({
  //       success: 1,
  //       message: "moderator created",
  //       data: null,
  //     });
  //   } catch (e) {}
  // },
  getUnverifiedOrganizations: async (req, res) => {
    try {
      const body = req.body;
      body.decoded = req.decoded;
      const organizations = await getUnverifiedOrganizations();
      if (!organizations.length) {
        return res.status(404).send({
          success: 0,
          message: "no requests found",
          data: null,
        });
      }
      return res.status(200).send({
        success: 1,
        message: "got organizations",
        data: organizations,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        success: 0,
        message: "something went wrong while geeting organizations",
        data: null,
      });
    }
  },
  registerOrganization: async (req, res) => {
    try {
      const body = req.body;
      body.decoded = req.decoded;
      const organizations = await getOrganizationByID(body.org_id);
      if (!organizations.length) {
        return res.status(404).send({
          success: 0,
          message: "no such organizations found",
          data: null,
        });
      } else if (organizations.verificationStatus == 1) {
        return res.status(400).send({
          success: 0,
          message: "organization already registered.",
          data: null,
        });
      }
      await registerOrganization(body.org_id);
      return res.status(200).send({
        success: 1,
        message: "registered organization succesfully",
        data: null,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        success: 0,
        message: "something went wrong while registering organization",
        data: null,
      });
    }
  },
  // rejectOrganization: async (req, res) => {
  //   try {
  //     const body = req.body;
  //     body.decoded = req.decoded;
  //     const organizations = await getOrganizationByID(body.org_id);
  //     if (!organizations.length) {
  //       return res.status(404).send({
  //         success: 0,
  //         message: "no such organizations found",
  //         data: null,
  //       });
  //     } else if (organizations.verificationStatus == 1) {
  //       return res.status(400).send({
  //         success: 0,
  //         message: "organization already registered.",
  //         data: null,
  //       });
  //     }
  //     await rejectOrganization(body.org_id);
  //     return res.status(200).send({
  //       success: 1,
  //       message: "registered organization succesfully",
  //       data: null,
  //     });
  //   } catch (e) {
  //     console.log(e);
  //     return res.status(500).send({
  //       success: 0,
  //       message: "something went wrong while registering organization",
  //       data: null,
  //     });
  //   }
  // },
};

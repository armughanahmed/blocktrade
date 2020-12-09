const {
  getAdmin,
  createModerator,
  getAdminByEmail,
} = require("./admin.service");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const sendEmailModerator = async (text, to, org) => {
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
    } catch (e) {}
  },
  adminSignup: async (req, res) => {
    try {
      let body = req.body;
      body.decode = req.decoded;
      const admin = await getAdminByEmail(body);
      if (admin) {
        return res.status(302).send({
          success: 0,
          message: "Email already exists",
          data: null,
        });
      }
      const salt = genSaltSync(10);
      body.password = hashSync(body.password, salt);
      const moderator = await createModerator(body);
      const mail = sendEmailModerator(body.name, body.email, null);
      if (!mail) {
        console.log("createUser:: error in sending mail");
      }
      return res.status(201).send({
        success: 1,
        message: "moderator created",
        data: null,
      });
    } catch (e) {}
  },
};
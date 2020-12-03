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
  login: (req, res) => {
    const body = req.body;
    getAdmin(body.email, (error = null, results = null) => {
      if (error) {
        console.log(`login::error ${error}`);
        return res.status(500).send({
          success: 0,
          message: "database error",
          data: null,
        });
      }
      if (!results) {
        return res.status(403).send({
          success: 0,
          message: "invalid login credentials",
          data: null,
        });
      }
      console.log(results);
      const result = compareSync(body.password, results.password);
      if (result) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, "blocktrade");
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
    });
  },
  adminSignup: (req, res) => {
    let body = req.body;
    body.decode = req.decoded;
    getAdminByEmail(body, (error = null, results = null) => {
      if (error) {
        console.log("adminSignup::");
        console.log(error);
        return res.status(500).send({
          success: 0,
          message: "Database connection errror",
          data: null,
        });
      }
      if (results) {
        return res.status(302).send({
          success: 0,
          message: "Email already exists",
          data: null,
        });
      }
      const salt = genSaltSync(10);
      body.password = hashSync(body.password, salt);
      createModerator(body, async (error = null, results = null) => {
        if (error) {
          console.log("adminSignup::");
          console.log(error);
          return res.status(500).send({
            success: 0,
            message: "failed to create moderator. db error",
            data: null,
          });
        }
        const mail = await sendEmailModerator(body.name, body.email, null);
        if (!mail) {
          console.log("createUser:: error in sending mail");
        }
        return res.status(201).send({
          success: 1,
          message: "moderator created",
          data: results,
        });
      });
    });
  },
  // createOrganization: (req, res) => {
  //   const body = req.body;
  //   const salt = genSaltSync(10);
  //   body.password = hashSync(body.password, salt);
  //   createOrganization(body, async (err, results) => {
  //     if (err) {
  //       console.log(err);
  //       return res.status(500).json({
  //         status: 500,
  //         message: "Database connection errror",
  //       });
  //     }
  //     const mail = await sendEmail(body.name, body.email, null);
  //     if (!mail) {
  //       console.log("createUser:: error in sending mail");
  //     }
  //     return res.status(200).json({
  //       status: 200,
  //       data: results,
  //     });
  //   });
  // },
};

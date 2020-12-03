const {
  createOrganization,
  getOrganizationByEmail,
} = require("./organization.service");
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
  createOrganization: (req, res) => {
    const body = req.body;
    getOrganizationByEmail(body.email, (error = null, results = null) => {
      if (error) {
        console.log("createOrganization::");
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
      createOrganization(body, async (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            status: 500,
            message: "Database connection errror",
          });
        }
        const mail = await sendEmail(body.name, body.email, null);
        if (!mail) {
          console.log("createUser:: error in sending mail");
        }
        return res.status(200).json({
          status: 200,
          data: results,
        });
      });
    });
  },
};

const {
  deleteToken,
  verifyToken,
  create,
  getUserByUserEmail,
  getUserByUserId,
  getUsers,
  updateUser,
  deleteUser,
  createInvite,
  verifyTokenStatus,
  createUser,
} = require("./user.service");
const nodemailer = require("nodemailer");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign, verify, decode } = require("jsonwebtoken");
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
    html: `<p>Click <a href=${text}>here</a> to verify</p>`,
  };

  let info = await transporter.sendMail(mailOptions);
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  return info;
};
module.exports = {
  createVerifiedUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    verifyTokenStatus(body, (error = null, results = null) => {
      if (error) {
        console.log("createVerifiedUser:: ");
        console.log(error);
        return res.status(500).send({
          success: 0,
          message: "something went wrong with the database",
          data: null,
        });
      }
      if (!results) {
        return res.status(404).send({
          success: 0,
          message: "user not verified",
          data: null,
        });
      }
      createUser(body, (error = null, results = null) => {
        if (error) {
          console.log("createVerifiedUser::");
          console.log(error);
          return res.status(500).send({
            success: 0,
            message: "something went wrong with the database",
            data: null,
          });
        }
        console.log("createUser:: user created succesfully");
        deleteToken(body, (error, results) => {
          if (error) {
            console.log("deleteToken::");
            console.log(error);
            return res.status(500).send({
              success: 0,
              message: "something went wrong with the database",
              data: null,
            });
          }
        });
      });
      return res.status(201).send({
        success: 1,
        message: "Succesfully created user",
      });
    });
  },
  verifyToken: (req, res) => {
    let token = req.params.token;
    verify(token, "invite", (err, decoded) => {
      if (err) {
        return res.status(400).send({
          success: 0,
          message: "Invalid Invite link",
          data: null,
        });
      }
    });
    const decoded = decode(token);
    verifyToken(decoded, (error = null, results = null) => {
      if (error) {
        console.log(`verifytoken:: ${error}`);
        return res.status(500).send({
          success: 0,
          message: "something went wrong with database",
          data: null,
        });
      }
      if (!results || results.affectedRows == 0) {
        return res.status(404).send({
          success: 0,
          message: "invite link does not exist!",
          data: null,
        });
      }
      return res.status(200).send({
        success: 1,
        message: "invite link verified",
        data: decoded,
        data: null,
      });
    });
  },
  createUser: (req, res) => {
    const body = req.body;
    body.decode = req.decoded;
    createInvite(body, async (error = null, results = null) => {
      if (error) {
        console.log(error);
        return res.status(500).send({
          success: 0,
          message: "database connection error",
          data: null,
        });
      }

      const jsontoken = sign({ result: body }, "invite");
      const url = `http://localhost:4000/user/invite/${jsontoken}`;
      const mail = await sendEmail(
        url,
        body.receiver_email,
        body.decode.result.org_id
      );
      if (!mail) {
        console.log("createUser:: error in sending mail");
      }
      return res.status(200).send({
        success: 1,
        message: "succesfully created",
        data: results,
      });
    });
  },
  login: (req, res) => {
    const body = req.body;
    getUserByUserEmail(body.email, (error = null, results = null) => {
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
          data: {
            organization_id: results.org_id,
            role: results.role,
          },
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
  //   getUserByUserId: (req, res) => {
  //     const id = req.params.id;
  //     getUserByUserId(id, (err, results) => {
  //       if (err) {
  //         console.log(err);
  //         return;
  //       }
  //       if (!results) {
  //         return res.json({
  //           success: 0,
  //           message: "Record not Found",
  //         });
  //       }
  //       results.password = undefined;
  //       return res.json({
  //         success: 1,
  //         data: results,
  //       });
  //     });
  //   },
  getUsers: (req, res) => {
    getUsers(req.decoded, (error = null, results = null) => {
      if (error) {
        console.log(`getUsers::error ${error}`);
        res.status(500).send({
          success: 0,
          message: "database error",
          data: null,
        });
      }
      return res.status(200).send({
        success: 1,
        message: "succesfully got users",
        data: results,
      });
    });
  },
  //   updateUsers: (req, res) => {
  //     const body = req.body;
  //     const salt = genSaltSync(10);
  //     body.password = hashSync(body.password, salt);
  //     updateUser(body, (err, results) => {
  //       if (err) {
  //         console.log(err);
  //         return;
  //       }
  //       return res.json({
  //         success: 1,
  //         message: "updated successfully",
  //       });
  //     });
  //   },
  //   deleteUser: (req, res) => {
  //     const data = req.body;
  //     deleteUser(data, (err, results) => {
  //       if (err) {
  //         console.log(err);
  //         return;
  //       }
  //       if (!results) {
  //         return res.json({
  //           success: 0,
  //           message: "Record Not Found",
  //         });
  //       }
  //       return res.json({
  //         success: 1,
  //         message: "user deleted successfully",
  //       });
  //     });
  //   },
};

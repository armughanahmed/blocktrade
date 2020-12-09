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
const { getOrganizationByID } = require("../organization/organization.service");
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
  createVerifiedUser: async (req, res) => {
    try {
      const body = req.body;
      const salt = genSaltSync(10);
      body.password = hashSync(body.password, salt);
      const verifiedToken = await verifyTokenStatus(body);
      if (!verifiedToken) {
        return res.status(404).send({
          success: 0,
          message: "user not verified",
          data: null,
        });
      }
      await createUser(body);
      await deleteToken(body);

      return res.status(201).send({
        success: 1,
        message: "Succesfully created user",
        data: {
          email: body.email,
          role: body.role,
        },
      });
    } catch (e) {
      return res.status(500).send({
        success: 0,
        message: "error in creating verified user",
        data: null,
      });
    }
  },
  verifyToken: async (req, res) => {
    try {
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
      // const org = await getOrganizationByID(decoded.result.org_id);
      const verifiedToken = await verifyToken(decoded);
      if (!verifiedToken || verifiedToken.affectedRows == 0) {
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
      });
    } catch (e) {
      return res.status(500).send({
        success: 0,
        message: "error in verifying invite link",
        data: null,
      });
    }
  },
  createUser: async (req, res) => {
    try {
      const body = req.body;
      body.decode = req.decoded;
      const userEmail = await getUserByUserEmail(body.email);
      if (userEmail) {
        return res.status(302).send({
          success: 0,
          message: "Email already exists",
          data: null,
        });
      }
      await createInvite(body);

      const jsontoken = sign({ result: body }, "invite");
      const url = `http://localhost:4000/user/invite/${jsontoken}`;
      const mail = sendEmail(
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
    } catch (e) {
      return res.status(500).send({
        success: 0,
        message: "Something went wrong while creating user",
        data: null,
      });
    }
  },
  login: async (req, res) => {
    try {
      const body = req.body;
      const user = await getUserByUserEmail(body.email);
      if (!user) {
        return res.status(403).send({
          success: 0,
          message: "invalid login credentials",
          data: null,
        });
      }
      const result = compareSync(body.password, user.password);
      if (result) {
        user.password = undefined;
        const jsontoken = sign({ result: user }, "blocktrade");
        const organization = await getOrganizationByID(user.org_id);
        return res.json({
          success: 1,
          message: "login successfully",
          data: {
            organization_id: user.org_id,
            role: user.role,
            org_type: organization.type,
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
    } catch (e) {}
  },
  getUserByUserId: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await getUserByUserId(id);
      if (!user) {
        return res.status(404).send({
          success: 0,
          message: "user not found",
        });
      }
      user.password = undefined;
      return res.status(200).send({
        success: 1,
        message: "user found succesfully",
        data: user,
      });
    } catch (e) {
      console.log(e);
      return res.status(200).send({
        success: 0,
        message: "something went wrong while finding users by user id",
        data: null,
      });
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await getUsers(req.decoded);
      return res.status(200).send({
        success: 1,
        message: "succesfully got users",
        data: users,
      });
    } catch (e) {
      return res.status(500).send({
        success: 1,
        message: "something went wrong while fetching users",
        data: null,
      });
    }
  },
  updateUsers: async (req, res) => {
    try {
      const body = req.body;
      const salt = genSaltSync(10);
      body.password = hashSync(body.password, salt);
      const user = await updateUser(body);
      return res.status(201).send({
        success: 1,
        message: "user updated successfully",
      });
    } catch (e) {
      return res.status(500).send({
        success: 0,
        message: "error in updating user",
      });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const data = req.body;
      const user = await deleteUser(data);
      if (!user) {
        return res.status(404).send({
          success: 0,
          message: "user not found",
        });
      }
      return res.status(200).send({
        success: 1,
        message: "user deleted successfully",
      });
    } catch (e) {
      console.log(e);
      return res.status(200).send({
        success: 0,
        message: "something went wrong while deleting user",
      });
    }
  },
};
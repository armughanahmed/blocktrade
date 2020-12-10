const jwt = require("jsonwebtoken");
const {
  getOrganizationByID,
} = require("../api/organization/organization.service");
const { getUserByUserId } = require("../api/users/user.service");
module.exports = {
  auth: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      // Remove Bearer from string
      token = token.slice(7);
      jwt.verify(token, "blocktrade", (err, decoded) => {
        if (err) {
          return res.status(400).send({
            success: 0,
            message: "Invalid Token...",
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.status(401).send({
        success: 0,
        message: "Access Denied! Unauthorized User",
        data: null,
      });
    }
  },
  authAdmin: (req, res, next) => {
    if (
      req.decoded.result.role == "admin" ||
      req.decoded.result.role == "moderator"
    ) {
      next();
    } else {
      return res.status(401).send({
        success: 0,
        message: "Access Denied! Unauthorized Admin",
        data: null,
      });
    }
  },
  authModerator: (req, res, next) => {
    if (req.decoded.result.role == "moderator") {
      next();
    } else {
      return res.status(401).send({
        success: 0,
        message: "Access Denied! Unauthorized Moderator",
        data: null,
      });
    }
  },
  authOrganization: async (req, res, next) => {
    const user = await getUserByUserId(req.body.id);
    if (user.org_id == req.decoded.result.org_id) {
      next();
    } else {
      return res.status(401).send({
        success: 0,
        message: "Access Denied! Unauthorized organization",
        data: null,
      });
    }
  },
  authCargoOwner: async (req, res, next) => {
    const org = await getOrganizationByID(req.decoded.result.org_id);
    if (org.type == "cargo-owner") {
      next();
    } else {
      return res.status(401).send({
        success: 0,
        message: "Access Denied! Unauthorized organization",
        data: null,
      });
    }
  },
};

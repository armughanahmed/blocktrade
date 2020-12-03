const jwt = require("jsonwebtoken");
module.exports = {
  auth: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      // Remove Bearer from string
      token = token.slice(7);
      jwt.verify(token, "blocktrade", (err, decoded) => {
        if (err) {
          return res.json({
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
};

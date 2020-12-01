const jwt = require("jsonwebtoken");
// const {
//   create,
//   getUserByUserEmail,
//   getUserByUserId,
//   getUsers,
//   updateUser,
//   deleteUser,
// } = require("./user.service");
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
      return res.json({
        success: 0,
        message: "Access Denied! Unauthorized User",
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
      return res.json({
        success: 0,
        message: "not an admin",
      });
    }
  },
};

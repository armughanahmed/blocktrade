const { createOrganization } = require("./organization.service");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  createOrganization: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    createOrganization(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          status: 500,
          message: "Database connection errror",
        });
      }
      return res.status(200).json({
        status: 200,
        data: results,
      });
    });
  },
};

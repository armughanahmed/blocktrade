const {getNonAssignedConsignments} = require("./shippingCompany.service");
const { getOrganizationByID } = require("../organization/organization.service");
const { getUserByUserId } = require("../users/user.service");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  getNonAssignedConsignments: (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
      const nonAssignedConsignments = await getNonAssignedConsignments(body);
      if(!nonAssignedConsignments.length){
        return res.status(404).send({
          success: 0,
          message: "no such consignments",
          data: null,
        });
      }
      res.status(202).send({
        success: 1,
        message: "succesfully found consignmnets",
        data: nonAssignedConsignments,
      });
    } catch (e) {
      console.log(e);
      return res.status(502).send({
        success: 0,
        message: "something went wrong while getting non assigned consignments",
        data: null,
      });
    }
  },
  
};

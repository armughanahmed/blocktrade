const { compareSync } = require("bcrypt");
const { reject } = require("lodash");
const pool = require("../../db/mysql");

module.exports = {
  getNonAssignedConsignments: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from consignments where progressStatus=? and consignment_id=?`,
        ["non-assigned", data.consignment_id],
        (error, results, fields) => {
          if (error) {
            console.log("getNonAssignedConsignments::");
            return reject(error);
          }
          console.log("getNonAssignedConsignments::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
};

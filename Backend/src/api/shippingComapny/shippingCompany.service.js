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
  viewQuotations: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from quotations where shipping_company_id=? and quote_status=?`,
        [data, "pending"],
        (error, results, fields) => {
          if (error) {
            console.log("viewQuotations::");
            return reject(error);
          }
          console.log("viewQuotations::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  viewQuotationsById: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from quotations where quotation_id=?`,
        [data],
        (error, results, fields) => {
          if (error) {
            console.log("viewQuotationsById::");
            return reject(error);
          }
          console.log("viewQuotationsById::");
          console.log(results[0]);
          resolve(results[0]);
        }
      );
    });
  },
  getScheduleById: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from schedules where schedule_id=?`,
        [data],
        (error, results, fields) => {
          if (error) {
            console.log("getScheduleById::");
            return reject(error);
          }
          console.log("getScheduleById::");
          console.log(results[0]);
          resolve(results[0]);
        }
      );
    });
  },
};

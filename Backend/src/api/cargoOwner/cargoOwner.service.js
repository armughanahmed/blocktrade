const { compareSync } = require("bcrypt");
const pool = require("../../db/mysql");

module.exports = {
  getQuotationByOrganizationId: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from quotations where cargo_owner_id=?`,
        [data.result.org_id],
        (error, results, fields) => {
          if (error) {
            console.log("getQuotationByOrganizationId::");
            return reject(error);
          }
          console.log("getQuotationByOrganizationId::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  createQuotation: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `insert into quotations(lcl_id,fcl_id,cargo_owner_id) 
                  values(?,?,?)`,
        [data.lcl_id, data.fcl_id, data.decoded.result.org_id],
        (error, results, fields) => {
          if (error) {
            console.log("createQuotation::");
            return reject(error);
          }
          console.log("createQuotation::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  createLCL: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `insert into lcl(cargo_owner_id,height, length,mode, movementType, quantity, type, unit,weight ,width,wuni) 
                  values(?,?,?,?,?,?,?,?,?,?)`,
        [
          data.decoded.result.org_id,
          data.height,
          data.length,
          data.mode,
          data.movementType,
          data.quantity,
          data.type,
          data.unit,
          data.weight,
          data.width,
          data.wuni,
        ],
        (error, results, fields) => {
          if (error) {
            console.log("createLCL::");
            return reject(error);
          }
          console.log("createLCL::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  createFCL: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `insert into fcl(cargo_owner_id,containerDescription, containerHeight,mode, movementType, packageType, quantity) 
                  values(?,?,?,?,?,?,?)`,
        [
          data.decoded.result.org_id,
          data.containerDescription,
          data.containerHeight,
          data.mode,
          data.movementType,
          data.packageType,
          data.quantity,
        ],
        (error, results, fields) => {
          if (error) {
            console.log("createFCL::");
            return reject(error);
          }
          console.log("createFCL::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
};

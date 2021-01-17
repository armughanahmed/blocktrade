const { compareSync } = require("bcrypt");
const pool = require("../../db/mysql");

module.exports = {
  getOrganizationByID: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from Organizations where id=?`,
        [data],
        (error, results, fields) => {
          if (error) {
            console.log("getOrganizationByID::");
            return reject(error);
          }
          console.log("getOrganizationByID::");
          console.log(results);
          resolve(results[0]);
        }
      );
    });
  },
  getOrganizationByEmail: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from Organizations where email=?`,
        [data],
        (error, results, fields) => {
          if (error) {
            return reject(error);
          }
          console.log("getOrganizationByMail::");
          console.log(results);
          resolve(results[0]);
        }
      );
    });
  },
  createOrganization: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `insert into Organizations(name, type,email, password, country, city, zipCode,officeAddress,phoneNumber,NTN) 
                  values(?,?,?,?,?,?,?,?,?,?)`,
        [
          data.name,
          data.type,
          data.email,
          data.password,
          data.country,
          data.city,
          data.zipCode,
          data.officeAddress,
          data.phoneNumber,
          data.NTN,
        ],
        (error, results, fields) => {
          if (error) {
            console.log("createOrganization::");
            console.log(error);
            return reject(error);
          }
          console.log("createOrganization::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  createEmployees: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `insert into Employees(org_id,name, email, country, city, password,role)
                  values(?,?,?,?,?,?,?)`,
        [
          data.org_id,
          data.name,
          data.email,
          data.country,
          data.city,
          data.password,
          "admin",
        ],
        (error, results, fields) => {
          if (error) {
            return reject(error);
          }
          console.log("createEmployees::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
};

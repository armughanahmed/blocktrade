const { query } = require("express");
const pool = require("../../db/mysql");

module.exports = {
  createModerator: (data, callback) => {
    pool.query(
      `insert into employees(org_id,name,email,country,city,password,role,active) 
                values(?,?,?,?,?,?,?,?)`,
      [
        data.decode.result.org_id,
        data.name,
        data.email,
        data.country,
        data.city,
        data.password,
        "moderator",
        1,
      ],
      (error, results, fields) => {
        console.log("createModerator::");
        console.log(results);
        return callback(error, results);
      }
    );
  },
  getAdmin: (data, callback) => {
    console.log("getAdmin::");
    console.log(data);
    pool.query(
      `select * from employees where email = ? and role='moderator'`,
      [data],
      (error, results, fields) => {
        console.log("getAdmin::");
        console.log(results);
        return callback(error, results[0]);
      }
    );
  },
  // createOrganization: (data, callback) => {
  //   pool.query(
  //     `insert into Organizations(name, type,email, password, country, city, zipCode,officeAddress,phoneNumber,NTN)
  //               values(?,?,?,?,?,?,?,?,?,?)`,
  //     [
  //       data.name,
  //       data.type,
  //       data.email,
  //       data.password,
  //       data.country,
  //       data.city,
  //       data.zipCode,
  //       data.officeAddress,
  //       data.phoneNumber,
  //       data.NTN,
  //     ],
  //     (error, results, fields) => {
  //       if (error) {
  //         callback(error);
  //       }
  //       pool.query(
  //         `insert into employees(org_id,name, email, country, city, password,role,active)
  //                   values(?,?,?,?,?,?,?,?)`,
  //         [
  //           results.insertId,
  //           data.name,
  //           data.email,
  //           data.country,
  //           data.city,
  //           data.password,
  //           "admin",
  //           0,
  //         ],
  //         (error, results, fields) => {
  //           if (error) {
  //             callback(error);
  //           }
  //         }
  //       );
  //       return callback(null, results);
  //     }
  //   );
  // },
};

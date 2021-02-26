const pool = require("../../db/mysql");

module.exports = {
  createModerator: (data) => {
    return new Promise((resolve, reject) => {
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
          if (error) {
            console.log("createModerator::");
            return reject(error);
          }
          console.log("createModerator::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  getAdmin: (data) => {
    return new Promise((resolve, reject) => {
      console.log("getAdmin::");
      console.log(data);
      pool.query(
        `select * from employees where email = ? and role='moderator'`,
        [data],
        (error, results, fields) => {
          if (error) {
            console.log("getAdmin::");
            return reject(error);
          }
          console.log("getAdmin::");
          console.log(results);
          resolve(results[0]);
        }
      );
    });
  },
  getAdminByEmail: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from employees where email=?`,
        [data],
        (error, results, fields) => {
          if (error) {
            console.log("getAdminByMail::");
            return reject(error);
          }
          console.log("getAdminByMail::");
          console.log(results);
          resolve(error, results[0]);
        }
      );
    });
  },
  getUnverifiedOrganizations: () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from organizations where verificationStatus=?`,
        ["0"],
        (error, results, fields) => {
          if (error) {
            console.log("getUnverifiedOrganizations::");
            return reject(error);
          }
          console.log("getUnverifiedOrganizations::");
          console.log(results);
          resolve(error, results);
        }
      );
    });
  },
  registerOrganization: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `update organizations set verificationStatus=? where id=?`,
        ["1", data],
        (error, results, fields) => {
          if (error) {
            console.log("registerOrganization::");
            return reject(error);
          }
          console.log("registerOrganization::");
          console.log(results);
          resolve(error, results);
        }
      );
    });
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

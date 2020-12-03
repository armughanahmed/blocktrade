const pool = require("../../db/mysql");

module.exports = {
  createOrganization: (data, callback) => {
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
          callback(error);
        }
        pool.query(
          `insert into employees(org_id,name, email, country, city, password,role,active)
                    values(?,?,?,?,?,?,?,?)`,
          [
            results.insertId,
            data.name,
            data.email,
            data.country,
            data.city,
            data.password,
            "admin",
            0,
          ],
          (error, results, fields) => {
            if (error) {
              callback(error);
            }
          }
        );
        return callback(null, results);
      }
    );
  },
};

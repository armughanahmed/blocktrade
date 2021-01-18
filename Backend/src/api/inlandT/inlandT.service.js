const { compareSync } = require("bcrypt");
const pool = require("../../db/mysql");
const { getUserByUserId } = require("../users/user.service");

module.exports = {
    addVehicle: (data) => {
      console.log("abc");
      console.log(data)
      return new Promise((resolve, reject) => {
        pool.query(
            "insert into vehicles(inland_id,type,model,make,year,distance_travelled,status) values(?,?,?,?,?,?,?)",
            [
              data.decoded.result.id,
              data.Vtype,
              data.Vmodel,
              data.Vmake,
              data.Vyear,
              data.Vdistancetravelled,
              1,
            ],
            (error, results, fields) => {
              if (error) {
                console.log(error);
                return reject(error);
              }
              console.log("Added:");
              console.log(results);
              return resolve(results);
            }
          );
        });
      },

}
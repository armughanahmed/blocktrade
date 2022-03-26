const { compareSync } = require("bcrypt");
const pool = require("../../db/mysql");
const { getUserByUserId } = require("../users/user.service");

module.exports = {
    addBerth: (data) => {
        return new Promise((resolve, reject) => {
          pool.query(
              "insert into berths(number,port_id,max_length,max_width) values(?,?,?,?)",
              [
                data.craneCount,
                data.decoded.result.id,
                data.maxLength,
                data.maxWidth,
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


        addYard: (data) => {
            return new Promise((resolve, reject) => {
              pool.query(
                  "insert into yards(capacity,category,port_id,height) values(?,?,?,?)",
                  [
                    data.capacity,
                    data.category,
                    data.decoded.result.id,
                    data.height,
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
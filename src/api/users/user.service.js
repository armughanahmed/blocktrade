const pool = require("../../db/mysql");
module.exports = {
  create: (data, callback) => {
    pool.query(
      `insert into employees(org_id,email,role,active)
                  values(?,?,?,?)`,
      [data.decode.result.org_id, data.email, data.role, 0],
      (error, results, fields) => {
        return callback(error, results);
      }
    );
  },
  getUserByUserEmail: (email, callback) => {
    pool.query(
      `select * from employees where email = ?`,
      [email],
      (error, results, fields) => {
        return callback(error, results[0]);
      }
    );
  },
  //   getUserByUserId: (id, callBack) => {
  //     pool.query(
  //       `select id,firstName,lastName,gender,email,number from registration where id = ?`,
  //       [id],
  //       (error, results, fields) => {
  //         if (error) {
  //           callBack(error);
  //         }
  //         return callBack(null, results[0]);
  //       }
  //     );
  //   },
  getUsers: (decode, callback) => {
    let service = {};
    pool.query(
      `select * from employees where org_id = ?`,
      [decode.result.org_id],
      (error, results, fields) => {
        return callback(error, results);
      }
    );
  },
  //   updateUser: (data, callBack) => {
  //     pool.query(
  //       `update registration set firstName=?, lastName=?, gender=?, email=?, password=?, number=? where id = ?`,
  //       [
  //         data.first_name,
  //         data.last_name,
  //         data.gender,
  //         data.email,
  //         data.password,
  //         data.number,
  //         data.id,
  //       ],
  //       (error, results, fields) => {
  //         if (error) {
  //           callBack(error);
  //         }
  //         return callBack(null, results[0]);
  //       }
  //     );
  //   },
  //   deleteUser: (data, callBack) => {
  //     pool.query(
  //       `delete from registration where id = ?`,
  //       [data.id],
  //       (error, results, fields) => {
  //         if (error) {
  //           callBack(error);
  //         }
  //         return callBack(null, results[0]);
  //       }
  //     );
  //   },
};

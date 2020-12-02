const { compareSync } = require("bcrypt");
const { result } = require("lodash");
const pool = require("../../db/mysql");
module.exports = {
  createUser: (data, callback) => {
    pool.query(
      `insert into employees(org_id,name,email,country,city,password,role,active)
    values(?,?,?,?,?,?,?,?)`,
      [
        data.org_id,
        data.name,
        data.receiver_email,
        data.country,
        data.city,
        data.password,
        data.role,
        1,
      ],
      (error, results, fields) => {
        console.log("createUser::");
        console.log(results);
        return callback(error, results);
      }
    );
  },
  createInvite: (data, callback) => {
    pool.query(
      `insert into invites(emp_id,sender_email,receiver_email)
    values(?,?,?)`,
      [data.decode.result.id, data.decode.result.email, data.receiver_email],
      (error, results, fields) => {
        return callback(error, results);
      }
    );
  },
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
  deleteToken: (data, callBack) => {
    pool.query(
      `delete from invites where receiver_email = ? and sender_email = ?`,
      [data.receiver_email, data.sender_email],
      (error, results, fields) => {
        console.log("deleteToken::");
        console.log(results);
        return callBack(error, results);
      }
    );
  },
  verifyToken: (data, callback) => {
    pool.query(
      `update invites set verified = ? where receiver_email = ? and sender_email = ?`,
      [1, data.result.receiver_email, data.result.decode.result.email],
      (error, results, fields) => {
        console.log("verifyToken::services ");
        console.log(results);
        return callback(error, results);
      }
    );
  },
  verifyTokenStatus: (data, callback) => {
    pool.query(
      `select * from invites where receiver_email = ? and sender_email = ? and verified = ?`,
      [data.receiver_email, data.sender_email, 1],
      (error, results, fields) => {
        console.log("verifyTokenStatus::services ");
        console.log(results);
        return callback(error, results[0]);
      }
    );
  },
};

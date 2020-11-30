const pool = require("../../db/mysql");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into employees(org_id,name, email, country, city, password,role,active)
                values(?,?,?,?,?,?,?,?)`,
      [
        data.decode.result.org_id,
        data.name,
        data.email,
        data.country,
        data.city,
        data.password,
        data.role,
        0,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from employees where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
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
  getUsers: (decode, callBack) => {
    // console.log(decode.result.org_id);
    pool.query(
      `select * from employees where org_id = ?`,
      [decode.result.org_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        console.log(results);
        return callBack(null, results);
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

const { compareSync } = require("bcrypt");
const pool = require("../../db/mysql");

module.exports = {
  getOrganizationByID: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
<<<<<<< HEAD
        `select * from Organizations where id=?`,
=======
        `select * from organizations where id=?`,
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
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
        `select * from organizations where email=?`,
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
        `insert into organizations(name, type,email, password, country, city, zipCode,officeAddress,phoneNumber,NTN) 
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
        `insert into employees(org_id,name, email, country, city, password,role)
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
<<<<<<< HEAD
=======
  addPartner: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `insert into partner(sender_org_id,receiver_org_id)
                  values(?,?)`,
        [data.decoded.result.org_id, data.receiver],
        (error, results, fields) => {
          if (error) {
            console.log("addPartner::");
            return reject(error);
          }
          console.log("addPartner::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  checkPartner: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from partner where (sender_org_id=? and receiver_org_id=?) or (sender_org_id=? and receiver_org_id=?)`,
        [
          data.decoded.result.org_id,
          data.receiver,
          data.receiver,
          data.decoded.result.org_id,
        ],
        (error, results, fields) => {
          if (error) {
            console.log("checkPartner::");
            return reject(error);
          }
          console.log("checkPartner::");
          console.log(results);
          resolve(results[0]);
        }
      );
    });
  },
  acceptPartner: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `update partner set status=? where partner_id=? and receiver_org_id=?`,
        [1, data.partner_id, data.decoded.result.org_id],
        (error, results, fields) => {
          if (error) {
            console.log("acceptPartner::");
            return reject(error);
          }
          console.log("acceptPartner::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  deletePartner: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `delete from partner where partner_id=? and receiver_org_id=?`,
        [data.partner_id, data.decoded.result.org_id],
        (error, results, fields) => {
          if (error) {
            console.log("deletePartner::");
            return reject(error);
          }
          console.log("deletePartner::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  removePartner: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `delete from partner where partner_id=? and (receiver_org_id=? or sender_org_id=?)`,
        [
          data.partner_id,
          data.decoded.result.org_id,
          data.decoded.result.org_id,
        ],
        (error, results, fields) => {
          if (error) {
            console.log("removePartner::");
            return reject(error);
          }
          console.log("removePartner::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  getPartnerRequests: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from partner where receiver_org_id=? and status=?`,
        [data, 0],
        (error, results, fields) => {
          if (error) {
            console.log("getPartnerRequests::");
            return reject(error);
          }
          console.log("getPartnerRequests::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  viewPartnerReceiver: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from partner where receiver_org_id=? and status=?`,
        [data, 1],
        (error, results, fields) => {
          if (error) {
            console.log("viewPartnerReceiver::");
            return reject(error);
          }
          console.log("viewPartnerReceiver::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  viewPartnerSender: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from partner where sender_org_id=? and status=?`,
        [data, 1],
        (error, results, fields) => {
          if (error) {
            console.log("viewPartnerSender::");
            return reject(error);
          }
          console.log("viewPartnerSender::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
};

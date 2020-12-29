const { compareSync } = require("bcrypt");
const { reject } = require("lodash");
const pool = require("../../db/mysql");

module.exports = {
  createSchedule: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `insert into schedules(ship_id,	origin_country,	origin_city,	destination_country,	destination_city,	departure_date,	arrival_date,	departure_port_id,	arrival_port_id,	ocean_carrier_id) 
        values(?,?,?,?,?,?,?,?,?,?)`,
        [
          data.ship_id,
          data.departureCountry,
          data.departureCity,
          data.destinationCountry,
          data.destinationCity,
          data.departureDate,
          data.arrivalDate,
          data.departurePortId,
          data.destinationPortId,
          data.decode.result.ocean_carrier_id,
        ],
        (error, results, fields) => {
          if (error) {
            console.log("createSchedule::");
            return reject(error);
          }
          console.log("createSchedule::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  createStop: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `insert into stops(country,city,arrival_date,departure_date,port_id,schedule_id) 
        values(?,?,?,?,?,?)`,
        [
          data.stopCountry,
          data.stopCity,
          data.arrivalDate,
          data.departureDate,
          data.schedule_id,
        ],
        (error, results, fields) => {
          if (error) {
            console.log("createStop::");
            return reject(error);
          }
          console.log("createStop::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  addShip: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `insert into ships(	total_capacity,	type,	length,	width,ocean_carrier_id) 
        values(?,?,?,?,?)`,
        [
          data.total_capacity,
          data.type,
          data.length,
          data.width,
          data.decode.result.ocean_carrier_id,
        ],
        (error, results, fields) => {
          if (error) {
            console.log("addShip::");
            return reject(error);
          }
          console.log("addShip::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  createBRequest: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `insert into bookingrequests(container_id,	schedule_id) 
        values(?,?,?,?,?,?,?,?,?,?)`,
        [data.container_id, data.schedule_id],
        (error, results, fields) => {
          if (error) {
            console.log("createBRequest::");
            return reject(error);
          }
          console.log("createBRequest::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  updateBRequest: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `update bookingrequests set shipping_company_id=?,status=? where bRequest_id=?`,
        [data.shipping_company_id, 1, data.bRequest_id],
        (error, results, fields) => {
          if (error) {
            console.log("updateSchedule::");
            return reject(error);
          }
          console.log("updateSchedule::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  getContainerIdFromBR: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select container_id from bookingrequests where bRequest_id = ?`,
        [data],
        (error, results, fields) => {
          if (error) {
            console.log("getContainerIdFromBR::");
            return reject(error);
          }
          console.log("getContainerIdFromBR::");
          console.log(results);
          resolve(results[0]);
        }
      );
    });
  },
  updateContainer: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `update containers set status_booked=? where container_id=?`,
        ["booked", data.container_id],
        (error, results, fields) => {
          if (error) {
            console.log("updateContainer::");
            return reject(error);
          }
          console.log("updateContainer::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  createContainer: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `insert into containers(ocean_carrier_id,	type,	size,	status_booked,	total_space ,	empty_weight) 
        values(?,?,?,?,?,?,?,?)`,
        [
          data.decode.result.ocean_carrier_id,
          data.type,
          data.size,
          data.status_booked,
          data.total_space,
          data.empty_weight,
        ],
        (error, results, fields) => {
          if (error) {
            console.log("createContainer::");
            return reject(error);
          }
          console.log("createContainer::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  AssignScheduleToContainer: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `update containers set schedule_id=? where container_id=?`,
        [data.schedule_id, data.container_id],
        (error, results, fields) => {
          if (error) {
            console.log("AssignScheduleToContainer::");
            return reject(error);
          }
          console.log("AssignScheduleToContainer::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  getContainerById: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from containers where container_id=?`,
        [data.container_id],
        (error, results, fields) => {
          if (error) {
            console.log("getContainerById::");
            return reject(error);
          }
          console.log("getContainerById::");
          console.log(results);
          resolve(results[0]);
        }
      );
    });
  },
  getPortByName: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from ports where city=?`,
        [data.container_id],
        (error, results, fields) => {
          if (error) {
            console.log("getPortByName::");
            return reject(error);
          }
          console.log("getPortByName::");
          console.log(results);
          resolve(results[0]);
        }
      );
    });
  },
};

const { compareSync } = require("bcrypt");
const { reject } = require("lodash");
const pool = require("../../db/mysql");

module.exports = {
  removeQuotation: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `delete from quotations where quotation_id=?`,
        [data],
        (error, results, fields) => {
          if (error) {
            console.log("removeQuotation::");
            return reject(error);
          }
          console.log("removeQuotation::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  createQuotation: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `insert into quotations(cargo_owner_id) 
                  values(?)`,
        [data.org_id],
        (error, results, fields) => {
          if (error) {
            console.log("createQuotation::");
            return reject(error);
          }
          console.log("createQuotation::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  createLCL: (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
      pool.query(
        `insert into lcl(height, length,mode, movementType, quantity, type, unit,weight ,width,wunit,quotation_id) 
                  values(?,?,?,?,?,?,?,?,?,?,?)`,
        [
          data.height,
          data.length,
          data.mode,
          data.movementType,
          data.quantity,
          data.type,
          data.unit,
          data.weight,
          data.width,
          data.wunit,
          data.quotation_id,
        ],
        (error, results, fields) => {
          if (error) {
            console.log("createLCL::");
            return reject(error);
          }
          console.log("createLCL::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  createFCL: (data) => {
    console.log("inside createFCL");
    console.log(data);
    return new Promise((resolve, reject) => {
      pool.query(
        `insert into fcl(containerDescription,containerHeight,mode, movementType, packageType, quantity,quotation_id) 
                  values(?,?,?,?,?,?,?)`,
        [
          data.containerDescription,
          data.containerHeight,
          data.mode,
          data.movementType,
          data.packageType,
          data.quantity,
          data.quotation_id,
        ],
        (error, results, fields) => {
          if (error) {
            console.log("createFCL::");
            return reject(error);
          }
          console.log("createFCL::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  viewQuotations: (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from quotations where cargo_owner_id=?`,
        [data],
        (error, results, fields) => {
          if (error) {
            console.log("viewQuotations::");
            return reject(error);
          }
          console.log("viewQuotations::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  viewQuotationById: (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from quotations where quotation_id=?`,
        [data],
        (error, results, fields) => {
          if (error) {
            console.log("viewQuotationById::");
            return reject(error);
          }
          console.log("viewQuotationById::");
          console.log(results);
          resolve(results[0]);
        }
      );
    });
  },
  viewFCL: (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from lcl where quotation_id=?`,
        [data],
        (error, results, fields) => {
          if (error) {
            console.log("viewFCL::");
            return reject(error);
          }
          console.log("viewFCL::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  viewLCL: (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from lcl where quotation_id=?`,
        [data],
        (error, results, fields) => {
          if (error) {
            console.log("viewLCL::");
            return reject(error);
          }
          console.log("viewLCL::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  approveQuotation: (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
      pool.query(
        `update quotations set quote_status=? where quotation_id=?`,
        ["approve-owner", data],
        (error, results, fields) => {
          if (error) {
            console.log("approveQuotation::");
            return reject(error);
          }
          console.log("approveQuotation::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  createConsignment: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `update quotations set quote_status=? where quotation_id=?`,
        ["approve-owner", data],
        (error, results, fields) => {
          if (error) {
            console.log("approveQuotation::");
            return reject(error);
          }
          console.log("approveQuotation::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  getSchedule: (data) => {
    console.log(data)
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from schedules where origin_country=? and destination_country=? and departure_date>=? and arrival_date<=?`,
        [
          data.originCountry,
          data.destinationCountry,
          data.departureDate,
          data.arrivalDate,
        ],
        (error, results, fields) => {
          if (error) {
            console.log("getSchedule::");
            return reject(error);
          }
          console.log("getSchedule::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  getBRContainerBySchedule_Id: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from bookingrequests where schedule_id=? and status=?`,
        [data, 1],
        (error, results, fields) => {
          if (error) {
            console.log("getBRContainerBySchedule_Id::");
            return reject(error);
          }
          console.log("getBRContainerBySchedule_Id::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  getPortsByPort_id: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from ports where port_id=?`,
        [data],
        (error, results, fields) => {
          if (error) {
            console.log("getPortsByPort_id::");
            return reject(error);
          }
          console.log("getPortsByPort_id::");
          console.log(results);
          resolve(results[0]);
        }
      );
    });
  },
  getStopsBySchedule_Id: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from stops where schedule_id=?`,
        [data],
        (error, results, fields) => {
          if (error) {
            console.log("getStopsBySchedule_Id::");
            return reject(error);
          }
          console.log("getStopsBySchedule_Id::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  getOceanCarrierById: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from oceancarriers where ocean_carrier_id=?`,
        [data],
        (error, results, fields) => {
          if (error) {
            console.log("getOceanCarrierById::");
            return reject(error);
          }
          console.log("getOceanCarrierById::");
          console.log(results);
          resolve(results[0]);
        }
      );
    });
  },
  getShippingCompanyById: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from shippingcompanies where shipping_company_id=?`,
        [data],
        (error, results, fields) => {
          if (error) {
            console.log("getShippingCompanyById::");
            return reject(error);
          }
          console.log("getShippingCompanyById::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
};

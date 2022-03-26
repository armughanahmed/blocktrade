const { compareSync } = require("bcrypt");
const { reject } = require("lodash");
const pool = require("../../db/mysql");

module.exports = {
  getNonAssignedConsignments: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from consignments where progressStatus=? and consignment_id=?`,
        ["non-assigned", data.consignment_id],
        (error, results, fields) => {
          if (error) {
            console.log("getNonAssignedConsignments::");
            return reject(error);
          }
          console.log("getNonAssignedConsignments::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  viewQuotations: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from quotations where shipping_company_id=? and quote_status=?`,
        [data, "pending"],
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
  viewQuotationsById: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from quotations where quotation_id=?`,
        [data],
        (error, results, fields) => {
          if (error) {
            console.log("viewQuotationsById::");
            return reject(error);
          }
          console.log("viewQuotationsById::");
          console.log(results[0]);
          resolve(results[0]);
        }
      );
    });
  },
  getScheduleById: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from schedules where schedule_id=?`,
        [data],
        (error, results, fields) => {
          if (error) {
            console.log("getScheduleById::");
            return reject(error);
          }
          console.log("getScheduleById::");
          console.log(results[0]);
          resolve(results[0]);
        }
      );
    });
  },
  updateFclPrice: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `update fcl set price=? where fcl_id=?`,
        [data.charges, data.fcl_id],
        (error, results, fields) => {
          if (error) {
            console.log("updateFclPrice::");
            return reject(error);
          }
          console.log("updateFclPrice::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  updateLclPrice: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `update lcl set price=? where lcl_id=?`,
        [data.charges, data.lcl_id],
        (error, results, fields) => {
          if (error) {
            console.log("updateLclPrice::");
            return reject(error);
          }
          console.log("updateLclPrice::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  updateQuotationPriceAndStatus: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `update quotations set price=?,quote_status=? where quotation_id=?`,
        [data.totalPrice, "cargo-owner-pending", data.quotationId],
        (error, results, fields) => {
          if (error) {
            console.log("updateQuotationPriceAndStatus::");
            return reject(error);
          }
          console.log("updateQuotationPriceAndStatus::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  createDocument: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `insert into documents(name,location,hash,type) 
        values(?,?,?,?)`,
        [data.name, data.location, data.hash, data.type],
        (error, results, fields) => {
          if (error) {
            console.log("createDocument::");
            return reject(error);
          }
          console.log("createDocument::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  updateQuotationDocument: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `update quotations set document_id=? where quotation_id=?`,
        [data.document_id, data.quotationId],
        (error, results, fields) => {
          if (error) {
            console.log("updateQuotationDocument::");
            return reject(error);
          }
          console.log("updateQuotationDocument::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  getContainerPendingConsignments: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from consignments where quotation_id=? and progressStatus=?`,
        [data, "container-pending"],
        (error, results, fields) => {
          if (error) {
            console.log("getContainerPendingConsignments::");
            return reject(error);
          }
          console.log("getContainerPendingConsignments::");
          console.log(results);
          resolve(results[0]);
        }
      );
    });
  },
  getQuotationsByShippingCompanyId: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from quotations where shipping_company_id=?`,
        [data],
        (error, results, fields) => {
          if (error) {
            console.log("getQuotationsByShippingCompanyId::");
            return reject(error);
          }
          console.log("getQuotationsByShippingCompanyId::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  getQuotationsByCargoOwnerId: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from quotations where cargo_owner_id=? and quote_status=?`,
        [data, "approve-owner"],
        (error, results, fields) => {
          if (error) {
            console.log("getQuotationsByCargoOwnerId::");
            return reject(error);
          }
          console.log("getQuotationsByCargoOwnerId::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  createBRequest: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `insert into bookingrequests(container_id,shipping_company_id,booking_till) 
        values(?,?,?)`,
        [data.container_id, data.decoded.result.org_id, data.booking_till],
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
  getNonScheduledContainers: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from containers where ocean_carrier_id=? and type=? and size=? and empty_weight=? and total_space=? and location=? and isScheduled=?`,
        [
          data.oc_id,
          data.type,
          data.size,
          data.empty_weight,
          data.total_space,
          data.port,
          0,
        ],
        (error, results, fields) => {
          if (error) {
            console.log("getNonScheduledContainers::");
            return reject(error);
          }
          console.log("getNonScheduledContainers::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
  getBookingRequestsByShippingCompanyId: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from bookingrequests where shipping_company_id=?`,
        [data],
        (error, results, fields) => {
          if (error) {
            console.log("getBookingRequestsByShippingCompanyId::");
            return reject(error);
          }
          console.log("getBookingRequestsByShippingCompanyId::");
          console.log(results);
          resolve(results);
        }
      );
    });
  },
};

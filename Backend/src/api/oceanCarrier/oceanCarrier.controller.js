const {
  createSchedule,
  createStop,
  addShip,
  createBRequest,
  createContainer,
  AssignScheduleToContainer,
  getContainerById,
  getBookingContainers,
  updateBRequest,
  updateContainer,
  getContainerIdFromBR,
  getPortByName,
  getPort,
  getShipsBytype,
} = require("./oceanCarrier.service");
const { getOrganizationByID } = require("../organization/organization.service");
const { getUserByUserId } = require("../users/user.service");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const sendEmail = async (text, to, org) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "armughancr7@gmail.com",
      pass: "blocktrade",
    },
  });

  let mailOptions = {
    from: "armughancr7@gmail.com",
    to: to,
    subject: "quotation request",
    cc: org,
    html: `<h3>thank you ${text} for using blocktrade for sending shipments</h3><br>
           <h3>your quotation request has been noted. you can see details of your consignments at the quotation tab</h3>`,
  };

  let info = await transporter.sendMail(mailOptions);
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  return info;
};

module.exports = {
  createSchedule: async (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
      const departurePort = await getPortByName(body);
      if (!departurePort) {
        res.status(404).send({
          success: 0,
          message: "Departure port not found",
          data: null,
        });
      }
      const destinationPort = await getPortByName(body);
      if (!destinationPort) {
        res.status(404).send({
          success: 0,
          message: "no destination port not found",
          data: null,
        });
      }
      body.departurePortId = departurePort.port_id;
      body.destinationPortId = destinationPort.port_id;

      const createdSchedule = await createSchedule(body);
      if (body.stops.length) {
        for (let i = 0; i < body.stops.length; i++) {
          body.stops[i].schedule_id = createdSchedule.insertId;
          await createStop(body.stops[i]);
        }
      }
      res.status(202).send({
        success: 1,
        message: "schedule successfully created",
        data: createdSchedule.insertId,
      });
    } catch (e) {
      console.log(e);
      return res.status(502).send({
        success: 0,
        message: "something went wrong while creating schedules",
        data: null,
      });
    }
  },
  createBRequest: async (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
      const createdSchedule = await createBRequest(body);
      res.status(202).send({
        success: 1,
        message: "BookingRequests schedule successfully created",
        data: createdSchedule.insertId,
      });
    } catch (e) {
      console.log(e);
      return res.status(502).send({
        success: 0,
        message:
          "something went wrong while creating BookingRequests schedules",
        data: null,
      });
    }
  },
  acceptBRequest: async (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
      const updatedSchedule = await updateBRequest(body);
      //add affected row logic
      const containerId = await getContainerIdFromBR(body.bRequest_id);
      const updatedContainer = await updateContainer(containerId.container_id);
      res.status(202).send({
        success: 1,
        message: "BookingRequests successfully accepted",
        data: createdSchedule.insertId,
      });
    } catch (e) {
      console.log(e);
      return res.status(502).send({
        success: 0,
        message: "something went wrong while accepting BookingRequests",
        data: null,
      });
    }
  },
  addShip: async (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
      const addedShip = await addShip(body);
      res.status(202).send({
        success: 1,
        message: "succesfully added ship",
        data: addedShip.insertId,
      });
    } catch (e) {
      console.log(e);
      return res.status(502).send({
        success: 0,
        message: "something went wrong while adding ship",
        data: null,
      });
    }
  },
  createContainer: async (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
      const createdContainer = await createContainer(body);
      res.status(202).send({
        success: 1,
        message: "succesfully created container",
        data: createdContainer.insertId,
      });
    } catch (e) {
      console.log(e);
      return res.status(502).send({
        success: 0,
        message: "something went wrong while creating container",
        data: null,
      });
    }
  },
  AssignScheduleToContainer: async (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
      const container = await getContainerById(body.container_id);
      if (!container) {
        return res.status(404).send({
          success: 0,
          message: "container does not exist",
          data: null,
        });
      }
      if (container.status_booked != "free") {
        return res.status(406).send({
          success: 0,
          message: "container is not free",
          data: null,
        });
      }
      const createdContainer = await AssignScheduleToContainer(body);
      res.status(202).send({
        success: 1,
        message: "succesfully assigned schedule to container",
        data: createdContainer.insertId,
      });
    } catch (e) {
      console.log(e);
      return res.status(502).send({
        success: 0,
        message: "something went wrong while creating container",
        data: null,
      });
    }
  },
  getBookingContainers: async (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
      const bookingContainers = await getBookingContainers();
      if (!bookingContainers.length) {
        return res.status(404).send({
          success: 0,
          message: "no containers available at the moment",
          data: null,
        });
      }
      return res.status(202).send({
        success: 1,
        message: "succesfully got BookingContainers",
        data: bookingContainers,
      });
    } catch (e) {
      console.log(e);
      return res.status(502).send({
        success: 0,
        message: "something went wrong while getting BookingContainers",
        data: null,
      });
    }
  },
  getPort: async (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
      const ports = await getPort(body);
      if (!ports.length) {
        return res.status(404).send({
          success: 1,
          message: "no ports",
          data: null,
        });
      }
      res.status(202).send({
        success: 1,
        message: "succesfully got ports",
        data: ports,
      });
    } catch (e) {
      console.log(e);
      return res.status(502).send({
        success: 0,
        message: "something went wrong while getting ports",
        data: null,
      });
    }
  },
  getShipsByType: async (req, res) => {
    try {
      let body = req.body;
      body.decoded = req.decoded;
      const ships = await getShipsBytype(body);
      if (!ships.length) {
        return res.status(404).send({
          success: 0,
          message: "no ships",
          data: null,
        });
      }
      res.status(202).send({
        success: 1,
        message: "succesfully got ships",
        data: ships,
      });
    } catch (e) {
      console.log(e);
      return res.status(502).send({
        success: 0,
        message: "something went wrong while getting ships",
        data: null,
      });
    }
  },
};

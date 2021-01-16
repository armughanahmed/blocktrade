const { addVehicle } = require("./inlandT.service");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign, verify, decode } = require("jsonwebtoken");
const { getUserByUserId } = require("../users/user.service");
module.exports = {
  addVehicle: async (req, res) => {
    try {
      const body = req.body;
      const addVeh = await addVehicle(body);
      body.Vmodel= addVeh.insertId;
      console.log(addVeh);
      const createEmp = await createEmployees(body);
      const mail = sendEmail(body.name, body.email, null);
    } catch (e) {}
  },
};
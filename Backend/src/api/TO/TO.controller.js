const { addBerth, addYard } = require("./TO.service");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign, verify, decode } = require("jsonwebtoken");
const { getUserByUserId } = require("../users/user.service");
module.exports = {
    addYard: async (req, res) => {
        try {
          const body = req.body;
          const addYar = await addYard(body);
        } catch (e) {}
      },

      addBerth: async (req, res) => {
        try {
          const body = req.body;
          const addBer = await addBerth(body);
        } catch (e) {}
      },
};
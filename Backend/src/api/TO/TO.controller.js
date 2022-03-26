const { addBerth, addYard } = require("./TO.service");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign, verify, decode } = require("jsonwebtoken");
const { getUserByUserId } = require("../users/user.service");
module.exports = {
    addYard: async (req, res) => {
        try {
          let body = req.body;
          body.decoded = req.decoded
          const addYar = await addYard(body);
        } catch (e) {}
      },

      addBerth: async (req, res) => {
        try {
          let body = req.body;
          body.decoded = req.decoded
          const addBer = await addBerth(body);
        } catch (e) {}
      },
};
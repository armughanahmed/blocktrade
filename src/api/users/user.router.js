const router = require("express").Router();
const { verify } = require("jsonwebtoken");
const { auth, authAdmin } = require("../../middleware/auth");
const {
  createUser,
  createVerifiedUser,
  login,
  verifyToken,
  getUserByUserId,
  getUsers,
  //   updateUsers,
  deleteUser,
} = require("./user.controller");
router.get("/", auth, authAdmin, getUsers);
router.post("/", auth, authAdmin, createUser);
router.post("/signup", createVerifiedUser);
router.get("/:id", auth, authAdmin, getUserByUserId);
router.post("/login", login);
// router.patch("/", auth, updateUsers);
router.delete("/", auth, authAdmin, deleteUser);
router.get("/invite/:token", verifyToken);
module.exports = router;

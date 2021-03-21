const router = require("express").Router();
const { verify } = require("jsonwebtoken");
const { auth, authAdmin, authOrganization } = require("../../middleware/auth");
const {
  createUser,
  createVerifiedUser,
  login,
  verifyToken,
  getUserByUserId,
  tokenDecode,
  getUsers,
  updateUsers,
  deleteUser,
} = require("./user.controller");
router.get("/", auth, authAdmin, getUsers);
router.post("/", auth, authAdmin, createUser);
router.post("/signup", createVerifiedUser);
router.get("/:id", auth, authAdmin, getUserByUserId);
router.post("/login", login);
router.patch("/", auth, updateUsers);
router.delete("/", auth, authAdmin, authOrganization, deleteUser);
router.get("/invite/:token", verifyToken);
router.post("/tokenDecode", tokenDecode);
module.exports = router;

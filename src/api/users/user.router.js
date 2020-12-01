const router = require("express").Router();
const { auth, authAdmin } = require("../../middleware/auth");
const {
  createUser,
  login,
  //   getUserByUserId,
  getUsers,
  //   updateUsers,
  //   deleteUser,
} = require("./user.controller");
router.get("/", auth, authAdmin, getUsers);
router.post("/", auth, authAdmin, createUser);
// router.get("/:id", auth, getUserByUserId);
router.post("/login", login);
// router.patch("/", auth, updateUsers);
// router.delete("/", auth, deleteUser);

module.exports = router;

const express = require("express");
const {
  addUser,
  usersData,
  deleteUser,
  findUser,
  upDateUser,
  login,
} = require("../controllers/user.controllers");
const router = express.Router();

router.post("/login", login);
router.get("/", usersData);
router.post("/", addUser);
router.delete("/:id", deleteUser);
router.put("/:id", upDateUser);
router.get("/:id", findUser);

module.exports = router;

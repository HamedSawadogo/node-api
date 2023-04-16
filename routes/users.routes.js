const express = require("express");
const {
  addUser,
  usersData,
  deleteUser,
  upDateUser,
  findUser,
} = require("../controllers/user.controllers");
const router = express.Router();

router.get("/", usersData);
router.post("/", addUser);
router.delete("/", deleteUser);
router.put("/", upDateUser);
router.get("/:id", findUser);

module.exports = router;

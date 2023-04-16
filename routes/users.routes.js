const express = require("express");
const {
  addUser,
  usersData,
  deleteUser,
  findUser,
} = require("../controllers/user.controllers");
const router = express.Router();

router.get("/", usersData);
router.post("/", addUser);
router.delete("/:id", deleteUser);
// router.put("/", upDateUser);
router.get("/:id", findUser);

module.exports = router;

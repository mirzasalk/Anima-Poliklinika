const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const user = require("../models/userModel"); //ovde mi kresa aplikacija ZASTOOOO???

// const user = require("../models/userModel");
router.post("/register", async (req, res) => {
  try {
    const userExists = await user.findOne({ email: req.user.email });
    if (userExists) {
      res.status(200).send({ message: "user alredy exists", success: false }); //i ova
    } else {
      const password = req.body.password;
      const salt = bcrypt.genSalt(10); //i ova(znam otprilike ali ne znam kako tacno radi)
      const hashedPassword = bcrypt.hash(password, salt);
      req.body.password = hashedPassword;
      // const newUser = new user(req.body);
      // await newUser.save();
      res
        .status(200)
        .send({ massage: "user created successfully", succes: true }); //i ova
    }
  } catch (error) {
    res.status(500).send({ message: "eror creating users", success: false }); //sta znaci ova linija koda
  }
});
router.post("/login", async (req, res) => {
  try {
  } catch (error) {}
});
module.exports = router;

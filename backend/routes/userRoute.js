const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const user = require("../models/userModel");
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth");
//RUTA ZA REGISTRACIJU  /api/users/register
router.post("/register", async (req, res) => {
  try {
    const userExists = await user.findOne({ email: req.body.email });
    if (userExists) {
      res.status(200).send({ message: "User already exists", success: false }); //i ova
    } else {
      const password = req.body.password;
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      req.body.password = hash;
      const newUser = new user(req.body);

      await newUser.save();
      res
        .status(200)
        .send({ massage: "User created successfully", success: true }); //i ova
    }
  } catch (error) {
    res.status(500).send({ message: error.massage, success: false }); //sta znaci ova linija koda
  }
});
//RUTA ZA LOGOVANJE  /api/users/login
router.post("/login", async (req, res) => {
  try {
    const newUser = await user.findOne({ email: req.body.email });
    if (!newUser) {
      return res
        .status(200)
        .send({ message: "User does not exist", success: false });
    }
    const isMatch = await bcrypt.compare(req.body.password, newUser.password);
    if (!isMatch) {
      return res
        .status(200)
        .send({ message: "Password is incorrect", success: false });
    } else {
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: "3d",
      }); //za sta sluzi sve i kako se koristi token
      res
        .status(200)
        .send({ message: "Login successful", success: true, data: token });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: "Login error", success: false, error: error });
  }
});
//GET USET INFO BY ID /api/users/getUserInfoById
router.post("/getUserInfoById", auth, async (req, res) => {
  try {
    const user = await users.findOne({ _id: req.body.userId });
    if (!user) {
      return res
        .status(200)
        .send({ message: "User does not exist", success: false });
    } else {
      res.status(200).send({
        message: "User found",
        success: true,
        data: {
          fname: user.fname,
          lname: user.lname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    res
      .status(500)
      .send({
        message: "Error getting user info",
        success: false,
        error: error,
      });
  }
});
module.exports = router;

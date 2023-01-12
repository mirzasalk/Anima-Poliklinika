const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fname: {
      type: "string",
      required: true,
    },
    lname: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
    },
    password: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: true, //sta bese ovo??
  }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;

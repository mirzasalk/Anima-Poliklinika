const mongoose = require("mongoose");

const userSchema = new mongoose.Schema( //OVAKO SE PRAVI SEMA PO KOJOJ SE FORMIRAJU KORISNICI
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //ZA DOBIJANJE REALNOG VREMENA FORMIRANJA KORISNIKA
  }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;

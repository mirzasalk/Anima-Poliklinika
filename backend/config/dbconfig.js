const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB is connected");
});
connection.on("error in MongoDB conection", (error) => {
  console.log("error in MongoDB conection", error);
});
module.exports = mongoose;

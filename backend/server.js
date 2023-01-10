const express = require("express");
const app = express();
const dbConfig = require("./config/dbconfig");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
console.log(process.env.MONGO_URL);
app.listen(PORT, () => {
  console.log(`Express servers listening on port ${PORT}`);
});

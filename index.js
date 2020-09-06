const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.listen(3001, () => {
  console.log("---SERVER RUNNING ON 3001---");
});

const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/users");

const app = express();
connectDB();

app.use(express.json());

app.use("/users", userRoutes);

app.listen(3001, () => {
  console.log("---SERVER RUNNING ON 3001---");
});

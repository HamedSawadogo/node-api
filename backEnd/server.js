const express = require("express");
const server = express();
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();
connectDB();

const port = 3100;
server.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use("/user", require("./routes/users.routes"));
server.listen(port, () => console.log("server en marche"));

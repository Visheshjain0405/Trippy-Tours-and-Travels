require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/routers");
const PORT = 4002;

//middleware

app.use(express.json());
app.use(cors());
app.use(router);

app.get("/", (req, res) => {
  res.status(200).json("Server Started");
});

app.listen(PORT, () => {
  console.log(`server start at Port No :${PORT}`);
});

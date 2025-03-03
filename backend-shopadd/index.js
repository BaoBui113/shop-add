// server.js
require("dotenv").config();
const router = require("./routers/index");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello, World! 12");
});
app.use("/api", router);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

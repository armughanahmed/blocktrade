require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
app.get("/", (req, res) => {
  try {
    let a = 10;
    if (a == 10) {
      return res.status(200).send("abc");
    }
    res.status(201).send("no");
  } catch (e) {
    res.status(200).send("errr");
  }
});
app.listen(port, () => {
  console.log("Server running on port " + port);
});

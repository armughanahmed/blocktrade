require("dotenv").config();
const express = require("express");

const organization_router = require("./api/organization/organization.router");
const user_router = require("./api/users/user.router");
const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
app.use("/organization", organization_router);
app.use("/user", user_router);
app.listen(port, () => {
  console.log("Server running on port " + port);
});

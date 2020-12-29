const cors = require("cors")
require("dotenv").config();
const express = require("express");

const organization_router = require("./api/organization/organization.router");
const user_router = require("./api/users/user.router");
const admin_router = require("./api/admin/admin.router");
const cargo_owner = require("./api/cargoOwner/cargoOwner.router");
const ocean_carrier = require("./api/oceanCarrier/oceanCarrier.router");
const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());
app.use("/organization", organization_router);
app.use("/user", user_router);
app.use("/admin", admin_router);
app.use("/cargo-owner", cargo_owner);
app.use("/oceanCarrier", ocean_carrier);
app.listen(port, () => {
  console.log("Server running on port " + port);
});

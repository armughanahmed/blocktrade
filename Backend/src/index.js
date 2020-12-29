<<<<<<< HEAD
require("dotenv").config();
const express = require("express");

const cors = require('cors');
=======
const cors = require("cors")
require("dotenv").config();
const express = require("express");

>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
const organization_router = require("./api/organization/organization.router");
const user_router = require("./api/users/user.router");
const admin_router = require("./api/admin/admin.router");
const cargo_owner = require("./api/cargoOwner/cargoOwner.router");
<<<<<<< HEAD


const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(cors())
=======
const ocean_carrier = require("./api/oceanCarrier/oceanCarrier.router");
const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
app.use("/organization", organization_router);
app.use("/user", user_router);
app.use("/admin", admin_router);
app.use("/cargo-owner", cargo_owner);
<<<<<<< HEAD
app.listen(port, () => {
  console.log("Server running on port " + port);
});
=======
app.use("/oceanCarrier", ocean_carrier);
app.listen(port, () => {
  console.log("Server running on port " + port);
});
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6

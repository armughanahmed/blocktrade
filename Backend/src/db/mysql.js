const { createPool } = require("mysql");

const pool = createPool({
  host: "localhost",
  port: "8000",
  user: "root",
  password: "",
  database: "blocktrade",
  connectionLimit: 10,
  timezone: "utc",
});

module.exports = pool;

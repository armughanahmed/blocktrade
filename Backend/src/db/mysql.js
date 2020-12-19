const { createPool } = require("mysql");

const pool = createPool({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "blocktrade",
  connectionLimit: 10,
  dateStrings: true
});

module.exports = pool;

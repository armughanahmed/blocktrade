const { createPool } = require("mysql");

const pool = createPool({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "blocktrade",
  connectionLimit: 10,
<<<<<<< HEAD
=======
  dateStrings: true
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
});

module.exports = pool;

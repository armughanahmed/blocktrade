var cron = require("node-cron");
const { createPool } = require("mysql");

const pool = createPool({
  host: "localhost",
  port: "8000",
  user: "root",
  password: "",
  database: "blocktrade",
  connectionLimit: 10,
});
cron.schedule("*/1 * * * * *", () => {
  pool.query(
    `delete FROM invites WHERE created_at + INTERVAL 20 SECOND <= now()`,
    (error, results, fields) => {
      console.log(results);
    }
  );
});

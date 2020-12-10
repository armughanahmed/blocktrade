const { result } = require("lodash");
const { createPool } = require("mysql");
const prompt = require("prompt");

const pool = createPool({
  host: "localhost",
  port: "8000",
  user: "root",
  password: "",
  database: "blocktrade",
  connectionLimit: 10,
});
const getOrganizationByEmail =(data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from Organizations where email=?`,
        [data],
        (error, results, fields) => {
          if (error) {
            return reject(error);
          }
          console.log("getOrganizationByMail::");
          console.log(results);
          resolve(results[0]);
        }
      );
    });
  },
const properties = [
  {
    name: "organization_email",
    validator: async function (value) {
      const org_email=await getOrganizationByEmail(value)
      if(org_email){
          result.org_id=org_email.id
        return 1
      }
    },
    warning: "organization does not exist",
  },
  {
    name: "password",
    hidden: true,
  },
];

prompt.start();

prompt.get(properties, function (err, result) {
  if (err) {
    return onErr(err);
  }
  console.log("Command-line input received:");
  console.log("  Username: " + result.username);
  console.log("  Password: " + result.password);
});

function onErr(err) {
  console.log(err);
  return 1;
}

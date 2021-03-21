const { result } = require("lodash");
const { createPool } = require("mysql");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
var inquirer = require("inquirer");
const pool = createPool({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "blocktrade",
  connectionLimit: 10,
});
var credentials = {};
const createEmployees = (data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    console.log(data);
    pool.query(
      `insert into Employees(org_id,name, email, country, city, password,role,active)
                values(?,?,?,?,?,?,?,?)`,
      [
        data.org_id,
        data.details.name,
        data.details.user_email,
        data.details.country,
        data.details.city,
        data.details.password,
        "moderator",
        1,
      ],
      (error, results, fields) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      }
    );
  });
};

const getOrganizationByEmail = (data) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `select * from Organizations where email=?`,
      [data],
      (error, results, fields) => {
        if (error) {
          return reject(error);
        }
        resolve(results[0]);
      }
    );
  });
};

const getUserByUserEmail = (data) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `select * from Employees where email = ?`,
      [data],
      (error, results, fields) => {
        if (error) {
          return reject(error);
        }
        resolve(results[0]);
      }
    );
  });
};
const questions = [
  {
    name: "organization_email",
    type: "input",
    message: "Enter organization email-address:",
    validate: async function (value) {
      const org_email = await getOrganizationByEmail(value);
      if (org_email) {
        credentials.org_id = org_email.id;
        return true;
      } else {
        return "organization does not exist";
      }
    },
  },
  {
    name: "password",
    type: "password",
    message: "Enter your password:",
    validate: function (value) {
      if (value.length) {
        return true;
      } else {
        return "Please enter your password.";
      }
    },
  },
  {
    name: "name",
    type: "input",
    message: "Enter your name:",
    validate: function (value) {
      if (value.length) {
        return true;
      } else {
        return "Please enter your name.";
      }
    },
  },
  {
    name: "user_email",
    type: "input",
    message: "Enter your user-email",
    validate: async function (value) {
      const user = await getUserByUserEmail(value);
      if (!user) {
        return true;
      } else {
        return "user already exists with this mail";
      }
    },
  },
  {
    name: "country",
    type: "input",
    message: "Enter your country:",
    validate: function (value) {
      if (value.length) {
        return true;
      } else {
        return "Please enter your country.";
      }
    },
  },
  {
    name: "city",
    type: "input",
    message: "Enter your city:",
    validate: function (value) {
      if (value.length) {
        return true;
      } else {
        return "Please enter your city.";
      }
    },
  },
];

const run = async () => {
  const salt = genSaltSync(10);
  credentials.details = await inquirer.prompt(questions);
  credentials.details.password = hashSync(credentials.details.password, salt);
  await createEmployees(credentials);
};

run();

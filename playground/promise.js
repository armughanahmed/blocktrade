const { compareSync } = require("bcrypt");

const add = (num1, num2) => {
  return new Promise((resolve, reject) => {
    return reject(1 + 2);
  });
};
const b = async () => {
  try {
    console.log(await add(1, 2));
    console.log("resolve");
  } catch (e) {
    console.log("err");
    console.log(e);
  }
};
b();

const a = () => {
  var RowDataPacket = {
    id: 8,
    org_id: 21,
    name: "Fast nuces",
    email: "fast@nu.edu.pk",
    country: "pakistan",
    city: "karachi",
    password: "$2b$10$ISXt2aD8Fdq/Dlr6N2lahOycCqP8Zkc8037reS/jq7yBvhadlBqRK",
    role: "admin",
    active: 0,
  };
  RowDataPacket.error = undefined;
  console.log(RowDataPacket);
  return RowDataPacket;
};

let c = a();
console.log(c.aaa);

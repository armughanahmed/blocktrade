const pdf = require("pdf-creator-node");
const crypto = require("crypto");
const fs = require("fs");
const createQuotationDocument = async () => {
  var html = fs.readFileSync("template.html", "utf8");

  var options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm",
    header: {
      height: "45mm",
      contents: '<div style="text-align: center;"><h1>Block Trade</h1>',
    },
    footer: {
      height: "28mm",
      contents: {
        //   first: "Cover page",
        //   2: "Second page", // Any page number is working. 1-based index
        default:
          '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
        //   last: "Last Page",
      },
    },
  };
  var consignments = [
    {
      id: 1,
      mode: 'ocean-lcl',
      price: 1000
    },
    {
      id: 2,
      mode: 'ocean-fcl',
      price: 10000
    },
    {
      id: 3,
      mode: 'ocean-lcl',
      price: 10000000
    }
  ]

  var schedule = {
    departurePort: 'Port Qasim',
    arrivalPort: 'Gwadar port',
    departureDate: '17-12-2020',
    arrivalDate: '30-12-20',
  }
  var document = {
    html: html,
    data: {
      consignments: consignments,
      schedule: schedule
    },
    path: "./output.pdf",
  };
  pdf
    .create(document, options)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
};
createQuotationDocument();
const check = () => {
  let file_buffer = fs.readFileSync("output.pdf");
  let sum = crypto.createHash("sha256");
  sum.update(file_buffer);
  const hex = sum.digest("hex");

  console.log(hex);
};

const emailService=async(to,org,subject,html)=>{
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "armughancr7@gmail.com",
      pass: "blocktrade",
    },
  });

  let mailOptions = {
    from: "armughancr7@gmail.com",
    to: to,
    subject: subject,
    cc: org,
    html: html,
  };

  let info = await transporter.sendMail(mailOptions);
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  return info;
}


module.exports = {
  createQuotationDocument,
  emailService
};

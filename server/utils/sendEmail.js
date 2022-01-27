const nodemailer = require("nodemailer");

const sendEmail = (options) => {
  // setting transporter
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  //   email option template
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: options.to,
    subject: options.subject,
    html: options.text,
  };

  //   Sending email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log("Error occur", error);

    console.log("Email sent", info);
  });
};

module.exports = sendEmail;

var nodemailer = require("nodemailer");

export async function sendMail(subject, toEmail, otpText) {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_GMAIL_USER,
        pass: process.env.NEXT_PUBLIC_SMTP_GMAIL_PASSWORD,
      },
    });
  
    var mailOptions = {
      from: process.env.NEXT_PUBLIC_SMTP_GMAIL_USER,
      to: toEmail,
      subject: subject,
      text: otpText,
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        throw new Error(error);
      } else {
        console.log("Email Sent");
        return true;
      }
    });
  }
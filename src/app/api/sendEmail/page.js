import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export default async function POST({subject, toEmail, otpText}) {

  console.log("hola post")

    try {
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.NEXT_PUBLIC_SMTP_GMAIL_USER,
          pass: process.env.NEXT_PUBLIC_SMTP_GMAIL_PASSWORD,
        },
      });
    
      var mailOptions = {
        from: process.env.NEXT_PUBLIC_SMTP_GMAIL_USER,
        to: toEmail ?? "arielvergara95@gmail.com",
        subject: subject ?? "Hola",
        text: otpText ?? "Ariel",
      };

      console.log("mailOptions", mailOptions)
    
      await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error)
          throw new Error(error);
        } else {
          console.log("Email Sent");
          return true;
        }
      });
  
      return NextResponse.json({message: "EMAIL_SENT_SUCCESSFULLY"}, {status: 200})
    } catch (error) {
      return NextResponse.json({message: "EMAIL_SENT_FAILED"}, {status: 500})
    }

  }
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {

    const body = await request.json();
    
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
        to: body.emailTo,
        subject: body.subject,
        html: body.otpText
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
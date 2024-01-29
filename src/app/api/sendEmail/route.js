

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request) {
    const body = await request.json();
    const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
    try{
      console.log("body", body)

      let response = resend.emails.send({
        from: body.emailTo,
        to: body.emailTo,
        subject: body.subject,
        html: body.otpText
      });

      console.log("response", response)

      return NextResponse.json({message: "EMAIL_SENT_SUCCESSFULLY"}, {status: 200})
    } catch (error) {
      return NextResponse.json({message: "EMAIL_SENT_FAILED"}, {status: 500})
    }
}

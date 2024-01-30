

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request) {
    const body = await request.json();
    const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
    try{
      resend.emails.send({
        from: `Innovalouvres<${process.env.NEXT_PUBLIC_RESEND_API_USER}>`,
        to: process.env.NEXT_PUBLIC_EMAIL_TO,
        subject: body.subject,
        html: body.otpText
      });

      return NextResponse.json({message: "EMAIL_SENT_SUCCESSFULLY"}, {status: 200})
    } catch (error) {
      return NextResponse.json({message: "EMAIL_SENT_FAILED"}, {status: 500})
    }
}

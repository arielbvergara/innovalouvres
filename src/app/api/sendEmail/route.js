

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request) {
    const body = await request.json();
    // const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
    try{
      console.log("body", body)

      const resend = new Resend('re_CPqynsVB_ALKAmu7A77d1M6mR7q4ravbE');

      resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'arielbernardovergara@gmail.com',
        subject: 'Hello World',
        html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
      });

      return NextResponse.json({message: "EMAIL_SENT_SUCCESSFULLY"}, {status: 200})
    } catch (error) {
      return NextResponse.json({message: "EMAIL_SENT_FAILED"}, {status: 500})
    }
}

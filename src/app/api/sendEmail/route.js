import { WebClient } from '@slack/web-api';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const options = {};
const web = new WebClient(process.env.NEXT_PUBLIC_SLACK_TOKEN, options);

export async function POST(request) {
    const body = await request.json();
    try{
      const channel = process.env.NEXT_PUBLIC_SLACK_CHANNEL_ID
      const resp = await web.conversations.join({
          channel: channel,
      });
      if (body.otpText) {
          await sendSlackMessage(body.otpText, channel);
      }
    }
    catch(error) {

    }
    const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
    try{
      await resend.emails.send({
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
const sendSlackMessage = async (message, channel = null) => {
  
  return new Promise(async (resolve, reject) => {
      const channelId = channel || process.env.NEXT_PUBLIC_SLACK_CHANNEL_ID;
      try {
          const resp = await web.chat.postMessage({
            token: process.env.NEXT_PUBLIC_SLACK_TOKEN,
            channel: channelId,
            text: message,
          });
          return resolve(true);
      } catch (error) {
          return resolve(true);
      }
  });
};
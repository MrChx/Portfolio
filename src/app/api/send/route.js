import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();
    
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Gunakan email default Resend
      to: ['Achaqilal407@gmail.com'], // Email Anda
      subject: subject,
      html: `
        <h1>${subject}</h1>
        <p>Sender Email: ${email}</p>
        <p>Message:</p>
        <p>${message}</p>
      `
    });

    return NextResponse.json({ status: 'success', data }, { status: 200 });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { status: 'error', error: error.message }, 
      { status: 500 }
    );
  }
}
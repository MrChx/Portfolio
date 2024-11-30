import { NextResponse } from "next/server";
import { Resend } from "resend";

// Langsung masukkan API key dan email pengirim
const resend = new Resend("re_9ZX9RH5W_DevjKDq3ExEfsQsFMZwGcFhm");
const fromEmail = "onboarding@resend.dev";

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();
    console.log(email, subject, message);

    const data = await resend.emails.send({
      from: fromEmail, 
      to: ["achaqilal407@gmail.com"], 
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data); 
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message || "Failed to send email" });
  }
}

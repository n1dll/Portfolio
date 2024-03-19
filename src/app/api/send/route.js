import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const { email, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: `${email} <onboarding@resend.dev>`,
      to: 'ngeorgiev89@outlook.com',
      subject: subject,
      react: (
        <>
          <h1>Subject: {subject}</h1>
          <h2>From: {email}</h2>
          <p>Message: {message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

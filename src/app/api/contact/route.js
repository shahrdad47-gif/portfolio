import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const { name, email, message } = await request.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'Shahrdad47@gmail.com',
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}

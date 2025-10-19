import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Note: In production, you would use a service like Resend, SendGrid, or Nodemailer
    // For now, this is a placeholder that logs the message
    console.log("[v0] Email to send:", {
      to: "zahraardane2001@gmail.com",
      from: email,
      subject: `Portfolio Contact from ${name}`,
      message,
    })

    // TODO: Implement actual email sending with a service like Resend
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'zahraardane2001@gmail.com',
    //   subject: `Portfolio Contact from ${name}`,
    //   html: `<p><strong>From:</strong> ${name} (${email})</p><p><strong>Message:</strong></p><p>${message}</p>`
    // })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
  }
}

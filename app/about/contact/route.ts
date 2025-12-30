import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name || "");
    const email = String(body?.email || "");
    const phone = String(body?.phone || "");
    const service = String(body?.service || "");
    const message = String(body?.message || "");

    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.CONTACT_TO || "faisal@professionaltcservices.com";

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to,
      replyTo: email,
      subject: `New Contact Form Message — ${service || "Website"}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "N/A"}`,
        `Service: ${service || "N/A"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ error: "Server error sending email." }, { status: 500 });
  }
}

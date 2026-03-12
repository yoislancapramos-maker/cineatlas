import nodemailer from "nodemailer";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: "licensing@cineatlasfilms.com",
      pass: process.env.ZOHO_SMTP_PASSWORD
    }
  });

  await transporter.sendMail({
    from: `"CineAtlas Website" <licensing@cineatlasfilms.com>`,
    to: "licensing@cineatlasfilms.com",
    replyTo: email,
    subject: "New licensing inquiry from CineAtlas",
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
`
  });

  res.status(200).json({ success: true });
}
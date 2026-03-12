import nodemailer from "nodemailer";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message, website } = req.body;

  // Anti-spam honeypot
  if (website) {
    return res.status(200).json({ success: true });
  }

  try {
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
      subject: "CineAtlas Website Inquiry",
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
`
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ error: "Email failed to send" });
  }
}
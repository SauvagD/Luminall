import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, message, object } = body;
  // Configure the transporter for sending email
  const transporter = nodemailer.createTransport({
    host: "smtp.ionos.fr",
    port: 587,
    secure: false,
    tls: {
      ciphers: "SSLv3",
    },
    auth: {
      user: "contact@luminall-studio.com",
      pass: "Z79pgsJmwCyC5KGA",
    },
  });

  const mailOptions = {
    from: "contact@luminall-studio.com",
    to: email,
    subject: object,
    text: message,
    replyTo: email,
  };

  try {
    // Send email
    const result = await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(info);
        }
      });
    });
    return Response.json({ message: "success", result });
  } catch (error) {
    return Response.json({ message: "failed", error });
  }
}

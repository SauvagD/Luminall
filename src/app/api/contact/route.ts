import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, message, name } = body;
  // Configure the transporter for sending email
  const transporter = nodemailer.createTransport({
    host: "smtp.ionos.fr",
    port: 587,
    secure: false,
    auth: {
      user: "contact@luminall-studio.com",
      pass: "Z79pgsJmwCyC5KGA",
    },
  });

  const mailOptions = {
    from: "contact@luminall-studio.com",
    to: "contact@luminall-studio.com",
    subject: `Luminall contact ${name}`,
    text: message,
    replyTo: email,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions, (err, info) => {
      console.log("err, info", err, info);
    });
    Response.json({ message: "success" });
  } catch (error) {
    Response.json({ message: "failed" });
  }
  return Response.json({ data: "tes" });
}

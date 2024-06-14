import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  // Configure the transporter for sending email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "ds.sauvage@gmail.com", // Your email
      pass: "Ztqn5fge/2002", // Your email password
    },
  });

  // Email options
  const mailOptions = {
    from: email,
    to: "ds.sauvage@gmail.com",
    subject: `New contact form submission from ${name}`,
    text: message,
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

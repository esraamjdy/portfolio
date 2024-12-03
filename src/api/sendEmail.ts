"use server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEmail(mail: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  if (!mail.name || !mail.email || !mail.subject || !mail.message) {
    throw new Error(
      "Invalid form data: All fields are required and must be strings."
    );
  }
  const mailOptions = {
    from: mail.email,
   
    to: process.env.EMAIL_USER,
    subject: mail.subject,
    text: mail.message,
    cc:  mail.email
  };
  console.log(mailOptions)
  try {
    await transporter.sendMail(mailOptions); 
    return {
      statusCode: 200,
      message: "Email sent successfully",
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return {
      statusCode: 500,
      message: "Failed to send email",
      error: errorMessage,
    };
  }  
}
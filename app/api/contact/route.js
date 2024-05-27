import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const user = process.env.EMAIL;
const pass = process.env.PASSWORD;

export async function POST() {
  try {
    const { name, email } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      //   port: 465,
      //   secure: true,
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: 'user',
      to: 'samgardiner@live.co.uk',
      subject: 'New message from your-website',
      text: `Name: ${name}\nEmail: ${email}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse('Failed to send message.', { status: 500 });
  }
}

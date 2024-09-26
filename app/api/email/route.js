import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(request) {
    const {data} = await request.json();

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:process.env.GMAIL_EMAIL_FROM,
            pass:process.env.GMAIL_PASSWORD,
        }
    })

    const fromEmail = process.env.GMAIL_EMAIL_FROM;

    const mailOptions = {
        from: `New client contact ${fromEmail}`,
        to: process.env.GMAIL_EMAIL_TO,
        // cc: email, (uncomment this line if you want to send a copy to the sender)
        subject: `${data.name}`,
        text: `${data.name}, ${data.phone}, ${data.email} ${data.address} ${data.city} ${data.state} ${data.zipcode}`
    };

    const sendMailPromise = () =>
        new Promise((resolve, reject) => {
          transport.sendMail(mailOptions, function (err) {
            if (!err) {
              resolve('Email sent.');
            } else {
              reject(err.message);
            }
        });
    });

    try {
        await sendMailPromise();
        return NextResponse.json({message: 'Your message has been sent.'})
    } catch (err) {
        return NextResponse.json({error: err}, {status: 500});
    }
}

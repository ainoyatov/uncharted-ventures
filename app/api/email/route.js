import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// export async function POST(request) {
//     const {data} = await request.json()
//     console.log(data.name);
//     console.log(data.phone)

//     return NextResponse.json({message: 'Done'});
// }



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
        // subject: `${purpose}`,
        subject: `${data.name}, ${data.phone}, ${data.email}`,
        text: 'Hello'
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

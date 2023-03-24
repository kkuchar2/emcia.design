import nodemailer from 'nodemailer';

export default function sendMail(req, res) {
    const { name, email, subject, message } = req.body;

    const emailUsername = process.env.EMAIL_USERNAME;
    const emailPassword = process.env.EMAIL_PASSWORD;

    const transporter = nodemailer.createTransport({
        host: 'mail.privateemail.com',
        port: 465,
        secure: true,
        auth: {
            user: emailUsername,
            pass: emailPassword,
        }
    });

    const msg = {
        from: process.env.EMAIL_USERNAME,
        to: process.env.EMAIL_TO,
        replyTo: email,
        subject: subject,
        html: '<div>Wiadość od: ' + name + '</div><div>Email: ' + email + '</div><div>Wiadomość: ' + message + '</div>',
    };

    transporter.sendMail(msg, function (error, info) {
        console.log('Error: ', error, 'Info: ', info);
        if (error) {
            console.error(error);
            res.status(400).send({ error: error });
        } else {
            res.status(200).send({ success: true });
        }
    });
}
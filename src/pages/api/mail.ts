import mailgun from 'mailgun-js';
import validator from 'validator';

const DOMAIN = process.env.MAILGUN_DOMAIN as string;
const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY as string, domain: DOMAIN });

export default function sendMail(req: any, res: any): void {
    const { name, email, subject, message } = req.body;

    // Validate name field
    if (!name) {
        return res.status(400).send({ error: 'Name is required' });
    }

    // Validate email field
    if (!email) {
        return res.status(400).send({ error: 'Email is required' });
    } else if (!validator.isEmail(email)) {
        return res.status(400).send({ error: 'Invalid email format' });
    }

    // Validate subject field
    if (!subject) {
        return res.status(400).send({ error: 'Subject is required' });
    }

    // Validate message field
    if (!message) {
        return res.status(400).send({ error: 'Message is required' });
    }

    const data = {
        from: `${name} <${email}>`,
        to: process.env.MAILGUN_TO_EMAIL as string,
        replyTo: email,
        subject: subject,
        text: `Nowa wiadomość od ${name} (${email})\n\n${message}`,
    };

    mg.messages().send(data, function (error: any) {
        if (error) {
            res.status(400).send({ error: error });
        } else {
            res.status(200).send({ success: true });
        }
    });
}
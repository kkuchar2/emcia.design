import { NextRequest, NextResponse } from 'next/server';
import validator from 'validator';

const DOMAIN = process.env.MAILGUN_DOMAIN as string;

const formData = require('form-data');
const Mailgun = require('mailgun.js');

const mailgun = new Mailgun(formData);

const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY,
    domain: DOMAIN
});

const BadRequest = (message: string) => NextResponse.json({ error: message }, { status: 400 });
const InternalServerError = (message: string) => NextResponse.json({ error: message }, { status: 500 });
const Ok = (message: string) => NextResponse.json({ message: message }, { status: 200 });

export async function POST(request: NextRequest) {
    const { name, email, subject, message } = await request.json();

    if (!name) {
        return BadRequest('Name is required');
    }

    if (!email) {
        return BadRequest('Email is required');
    }
    else if (!validator.isEmail(email)) {
        return BadRequest('Email is invalid');
    }

    if (!subject) {
        return BadRequest('Subject is required');
    }
    if (!message) {
        return BadRequest('Message is required');
    }

    try {
        await mg.messages.create(DOMAIN, {
            from: `${name} <${email}>`,
            to: process.env.MAILGUN_TO_EMAIL as string,
            replyTo: email,
            subject: subject,
            text: `Nowa wiadomość od ${name} (${email})\n\n${message}`,
        });
        return Ok('Message sent');
    }
    catch (error) {
        return InternalServerError('Error sending message');
    }
}
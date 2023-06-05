import React, { useCallback, useState } from 'react';

import { CustomInput } from 'components/CustomInput/CustomInput';
import { CustomTextArea } from 'components/CustomInput/CustomTextArea';
import { PulsingDots } from 'components/DotPulse/PulsingDots';

import styles from './ContactForm.module.scss';

interface ContactFormProps {
    onMailSent: (sender: string) => void;
}

export const ContactForm = (props: ContactFormProps) => {

    const { onMailSent } = props;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [sending, setSending] = useState(false);

    const extractFirstName = useCallback((name: string) => {
        const split = name.split(' ');
        return split[0];
    }, []);

    const onFormSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);
        const res = await fetch('/api/mail', {
            body: JSON.stringify({
                email: email,
                name: name,
                subject: subject,
                message: message,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });

        const { error } = await res.json();

        if (error) {
            console.log(error);
            return;
        }
        setSending(false);
        onMailSent(extractFirstName(name));
    }, [name, email, subject, message, onMailSent]);

    return <form className={styles.form} onSubmit={onFormSubmit}>
        <CustomInput
            name={'sender_name'}
            label={'Name'}
            spellCheck={false}
            type={'text'}
            autoComplete={'on'}
            required={true}
            onChange={e => setName(e.target.value)}
        />
        <CustomInput
            name={'sender_email'}
            label={'Email'}
            type={'email'}
            spellCheck={false}
            autoComplete={'on'}
            required={true}
            onChange={e => setEmail(e.target.value)}
        />
        <CustomInput
            name={'email_subject'}
            label={'Subject'}
            autoComplete={'on'}
            spellCheck={false}
            type={'text'}
            required={true}
            onChange={e => setSubject(e.target.value)}
        />

        <CustomTextArea
            name={'email_message'}
            spellCheck={false}
            label={'Message'}
            autoComplete={'off'}
            required={true}
            onChange={e => setMessage(e.target.value)}
        />

        <button className={styles.submitButton} disabled={sending} type={'submit'}>
            <div className={'relative flex items-center justify-center'}>
                <div className={'w-[150px] ' + (sending ? 'text-white' : 'text-white')}>
                    {'Send Email'}
                </div>
                <PulsingDots visible={sending}/>
            </div>
        </button>
    </form>;
};
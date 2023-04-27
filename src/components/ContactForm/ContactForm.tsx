import React, { useCallback, useState } from 'react';

import { CustomInput } from 'components/CustomInput/CustomInput';
import { CustomTextArea } from 'components/CustomInput/CustomTextArea';
import { PulsingDots } from 'components/DotPulse/PulsingDots';
import styled from 'styled-components';

import { useMailStore } from '../../store/store';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
  width: 100%;
  position: relative;
`;

const SubmitButton = styled.button<{ sending: boolean }>`
  margin-top: 0;
  width: 200px;
  border-radius: 50px;
  background: #914f37;
  padding: 12px;
  font-weight: 600;
  color: #ffffff;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;
  font-size: 1rem;
  align-self: center;
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:hover {
    background: #d0562a;
  }

  &:focus {
    outline: 1px solid #a4a4a4;
  }

  &:disabled {
    background: rgba(74, 74, 74, 0.26);
    color: rgba(255, 255, 255, 0.35);
    cursor: not-allowed;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #ffffff;
    transform: scale(0);
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
`;

export const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [sending, setSending] = useState(false);

    const setMailSent = useMailStore(state => state.setMailSent);
    const setRecentSender = useMailStore(state => state.setRecentSender);

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
        setMailSent(true);
        setRecentSender(extractFirstName(name));
    }, [name, email, subject, message, setMailSent]);

    return <StyledForm onSubmit={onFormSubmit}>
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

        <SubmitButton disabled={sending} sending={sending} type={'submit'}>
            <div className={'relative flex items-center justify-center'}>
                <div className={'w-[150px] ' + (sending ? 'text-white' : 'text-white')}>
                    {sending ? 'Sending email' : 'Send'}
                </div>
                <PulsingDots mailSent={sending}/>
            </div>
        </SubmitButton>
    </StyledForm>;
};
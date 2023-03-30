import React, { useEffect, useState } from 'react';

import { ContactDesktop } from 'components/Pages/Contact/ContactDesktop';
import { useScreenWidth } from 'hooks/use-screen';

import { useMailStore } from '../store/store';

export default function Contact() {

    const screenWidth = useScreenWidth();

    const [loading, setLoading] = useState(true);
    const setMailSent = useMailStore(state => state.setMailSent);

    useEffect(() => {
        setMailSent(false);
        setLoading(false);
    }, []);

    if (loading) {
        return <div className={'bg-[#1e1e1e]'}/>;
    }

    if (screenWidth === 0) {
        return <div/>;
    }

    return <ContactDesktop/>;
}
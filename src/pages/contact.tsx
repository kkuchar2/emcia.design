import React, { useEffect, useState } from 'react';

import { ContactDesktop } from 'components/Pages/Contact/ContactDesktop';
import { ContactMobile } from 'components/Pages/Contact/ContactMobile';

import { useMailStore } from '../store/store';

export default function Contact() {

    const [loading, setLoading] = useState(true);

    const setMailSent = useMailStore(state => state.setMailSent);

    useEffect(() => {
        setMailSent(false);
        setLoading(false);
    }, []);

    if (loading) {
        return <div className={'bg-[#1e1e1e]'}/>;
    }

    return <>
        <div className={'hidden lg:block'}>
            <ContactDesktop/>
        </div>
        <div className={'block lg:hidden'}>
            <ContactMobile/>
        </div>
    </>;
}
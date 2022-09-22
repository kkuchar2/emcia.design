import React, {createContext, useContext, useEffect, useState} from 'react';

import {DefaultSeo} from "next-seo";

import SEO from "../../next-seo.config";

const AppContext = createContext([]);

export const AppWrapper = ({ children }) => {
    const [navbarOpened, setNavbarOpened] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return <AppContext.Provider value={[navbarOpened, setNavbarOpened]}>
        <DefaultSeo {...SEO} />

        {/*Prevent FOUC*/}
        <div style={{ visibility: !mounted ? 'hidden' : 'visible' }}>
            {children}
        </div>
    </AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
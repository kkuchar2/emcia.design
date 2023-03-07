import React, { createContext, useCallback, useContext, useState } from 'react';

interface MainContextType {
    navbarOpened: boolean;
    toggleNavbar: () => void;
    setNavbarOpened: (value: boolean) => void;
}

export const MainContext = createContext<MainContextType>({
    navbarOpened: false,
    toggleNavbar: () => {
    },
    setNavbarOpened: () => {
    },
});

interface MainContextProviderProps {
    children: React.ReactNode;
}

const MainContextProvider: React.FC<MainContextProviderProps> = ({ children }) => {
    const [navbarOpened, setNavbarOpened] = useState(false);

    const toggleNavbar = useCallback(() => {
        const next = !navbarOpened;

        // set body overflow to hidden if navbar is opened
        if (next) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        setNavbarOpened(next);
    }, [navbarOpened]);

    const contextValue: MainContextType = {
        navbarOpened,
        toggleNavbar,
        setNavbarOpened
    };

    return <MainContext.Provider value={contextValue}>
        {children}
    </MainContext.Provider>;
};

export const useMainContext = (): MainContextType => {
    const context = useContext(MainContext);

    if (!context) {
        throw new Error('useMainContext must be used within a MainContextProvider');
    }
    return context;
};

export default MainContextProvider;
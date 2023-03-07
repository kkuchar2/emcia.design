import { Content } from 'components/Content/Content';
import React from 'react';

import MainContextProvider from '../MainContext';

const Index = () => {
    return <MainContextProvider>
        <Content/>
    </MainContextProvider>;
};

export default Index;

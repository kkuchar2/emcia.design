import React from 'react';

import { BottomSection } from 'components/BottomSection/BottomSection';
import { Header } from 'components/Header/Header';
import { SelectedProjects } from 'components/Section/SelectedProjects';
import styled from 'styled-components';

const StyledIndex = styled.div`
  width: 100%;
`;

const Index = () => {
    return <StyledIndex>
        <Header/>
        <div className={'flex flex-col items-center justify-center bg-white'}>
            <SelectedProjects/>
            <BottomSection/>
        </div>
    </StyledIndex>;
};

export default Index;

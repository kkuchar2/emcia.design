import React from 'react';

import {useTranslation} from 'next-export-i18n';
import styled from 'styled-components';
import {
    StyledHome,
} from 'styles/MainPage';

const StyledPage = styled.div`
  font-family: "Mansory", sans-serif;
`;

const StyledText1 = styled.div`

`;

const StyledText2 = styled.span`

`;

const StyledText3 = styled.span`

`;

const Dot = styled.div`
    width: 100px;
    height: 100px;
    background: #1e1e1e;
    border-radius: 50%;
`;

const Index = () => {

    const { t } = useTranslation();

    return <StyledPage>
        {/*<NavBar/>*/}
        <div className={'w-full max-w-[3000px] mx-auto bg-red relative overflow-hidden'}>
            <StyledHome>
                <Dot />
                {/*<CenterBox>*/}
                {/*    <div className={'animate-fadein1 absolute top-0 right-[40px] w-[333px] h-[1px] bg-black/30'}/>*/}
                {/*    <div className={'animate-fadein2 absolute bottom-0 left-[40px] w-[333px] h-[1px] bg-black'}/>*/}
                {/*    <div className={'animate-fadein3 absolute top-[40px] left-0 h-[245px] w-[1px] bg-black/30'}/>*/}
                {/*    <div className={'animate-fadein4 absolute top-[40px] right-0 h-[245px] w-[1px] bg-black'}/>*/}
                {/*    <div*/}
                {/*        className={'animate-fadein5 absolute bottom-[-40px] left-0 w-[333px] h-[1px] bg-black/30  invisible md:visible'}/>*/}
                {/*    <StyledText1 className={'animate-titlefadein'}>{t('index.hello1')}</StyledText1>*/}
                {/*    <StyledText2 className={'animate-titlefadein'}>{'UI'}*/}
                {/*        <StyledText3 className={'animate-titlefadein ml-[20px]'}>{t('index.hello3')}</StyledText3>*/}
                {/*    </StyledText2>*/}

                {/*</CenterBox>*/}
            </StyledHome>
        </div>
    </StyledPage>;
};

export default Index;
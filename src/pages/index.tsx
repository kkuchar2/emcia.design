import React, {useEffect, useMemo, useState} from 'react';

import {Box} from '@chakra-ui/react';
import {useTranslation} from "next-export-i18n";

import meta from '../../public/meta.json';
import {hiTitleAnim, nameTitleAnim} from "../animation";
import {education, projects, work} from "../data";

import {MotionBox} from "components/MotionBox/MotionBox";
import {EducationSection} from "components/sections/EducationSection/EducationSection";
import {ProjectsSection} from "components/sections/ProjectsSection/ProjectsSection";
import {WorkSection} from "components/sections/WorkSection/WorkSection";
import TopBar from "components/TopBar/TopBar";
import useMediaQuery from "hooks/useMediaQuery";
import {
    Descriptions,
    StyledHome,
    TopSection,
    StyledWorkEducation, StyledMyCanvas,
} from "styles/MainPage";

const Index = () => {

    const { t } = useTranslation();

    const isSmallScreen = useMediaQuery('(max-width: 768px)');

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // set mounted after 1s
        setTimeout(() => {
            setMounted(true);
        }, 500);
    }, []);

    const canvas = useMemo(() => {
        return mounted && !isSmallScreen ? <StyledMyCanvas/> : null;
    }, [mounted, isSmallScreen]);

    return <>
        <TopBar/>
        <StyledHome>
            {canvas}
            <TopSection>
                <MotionBox
                    bg={'rainbow'}
                    bgClip={'text'}
                    alignSelf={{ base: 'flex-start', md: 'center' }}
                    paddingTop={{ base: 10, md: 10 }}
                    paddingBottom={{ base: 10, md: 10 }}
                    paddingLeft={{ base: 5, md: 10 }}
                    fontWeight={'black'}
                    fontSize={{ base: '50px', md: '60px', lg: '70px', xl: '80px' }}
                    lineHeight={{ base: '20px', md: '50px', lg: '50px', xl: '110px' }}{...hiTitleAnim}>
                    {t("index.title")}
                </MotionBox>
                <MotionBox
                    width={{ base: '100%', md: 'auto' }}
                    paddingLeft={{ base: 5, md: 0 }}
                    textAlign={{ base: 'left', md: 'center' }}
                    letterSpacing={'-0.05em'}
                    fontWeight={'extrabold'}
                    fontSize={{ base: '34px', md: '40px', lg: '64px', xl: '70px' }}
                    lineHeight={{ base: 1, md: '77px' }}{...nameTitleAnim}>
                    {t('index.krzysztof')}
                </MotionBox>
                <MotionBox
                    color={'text-about'}
                    marginTop={3}
                    maxWidth={800}
                    alignSelf={{ base: 'flex-start', md: 'center' }}
                    lineHeight={'30px'}
                    fontWeight={'normal'}
                    textAlign={{ base: 'left', md: 'center' }}
                    padding={{ base: 5, xl: 20 }}
                    fontSize={'xl'}>
                    {t('index.about')}
                </MotionBox>
            </TopSection>
            <Descriptions>
                <StyledWorkEducation>
                    <WorkSection items={work}/>
                    <EducationSection items={education}/>
                </StyledWorkEducation>
            </Descriptions>
            <ProjectsSection items={projects}/>
        </StyledHome>
        <Box fontSize={'12px'} marginTop={10} color={'text-build-hash'} textAlign={'center'}>
            {`Build: ${meta.buildHash}`}
        </Box>
    </>;
};

export default Index;
import React, {useMemo} from 'react';

import {Box} from '@chakra-ui/react';
import {useTranslation} from 'next-export-i18n';

import {ProjectData} from "../../../data";
import {ProjectItem} from "../../items/ProjectItem/ProjectItem";
import {StyledTitle} from '../common.styles';
import {DataItems} from "../common.types";

import {StyledChildren} from "./style";

export const ProjectsSection = (props: DataItems<ProjectData>) => {

    const { items } = props;

    const { t } = useTranslation();

    const renderItems = useMemo(() => items.map((item, index) => <ProjectItem key={index} {...item}/>), [items]);

    return <Box bg={'bg-projects-section'}
                paddingLeft={5}
                paddingRight={5}
                paddingTop={20}
                paddingBottom={20}
                width={'100%'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}>
        <Box width={'100%'}
             maxWidth={1600}>
            <StyledTitle>{t('index.projects.name')}</StyledTitle>
            <StyledChildren>{renderItems}</StyledChildren>
        </Box>
    </Box>;
};
import React, {useMemo} from "react";

import {Box, Text} from "@chakra-ui/react";
import {useTranslation} from "next-export-i18n";

import {ProjectData} from "../../../data";

import {
    ProjectContent,
    ProjectStacks,
    ProjectStacksWrap, StyledLinks,
    StyledProjectItem
} from "./style";

import {SvgIconLink} from "components/SvgIconLink/SvgIconLink";

export const ProjectItem = (props: ProjectData) => {

    const { name, stack, description, github, website } = props;

    const { t } = useTranslation();

    const renderProjectStacks = useMemo(() => {
        return stack.map((stack, index) => {
            return <Text key={index}
                         fontSize={'md'}
                         fontWeight={'semibold'}
                         color={'text-project-stack-item'}>{stack}</Text>;
        });
    }, [stack]);

    return <StyledProjectItem
        borderRadius={'xl'}
        shadow={'project-item-shadow'}
        background={'bg-project'}>
        <Box display={'flex'} justifyContent={'flex-start'} alignItems={'flex-start'}>
            <Text
                className={'project-item-title'}
                fontSize={'md'}
                fontWeight={'black'}
                color={'text-project-title'}>
                {name}
            </Text>
            <StyledLinks>
                <SvgIconLink
                    className={'fill-[#cecece] hover:fill-[#ffffff]'}
                    href={github}
                    target={'_blank'}
                    icon={'/svg/github.svg'}/>
                <SvgIconLink
                    className={'text-[#cecece] hover:text-[#ffffff] my-[-2px]'}
                    href={website}
                    target={'_blank'}
                    icon={'/svg/external_link.svg'}/>
            </StyledLinks>
        </Box>
        <ProjectContent>
            <Text fontWeight={'medium'}
                  letterSpacing={'wide'}
                  color={'text-project-description'}
                  fontSize={'sm'}>
                {t(description)}
            </Text>
            <ProjectStacksWrap>
                <ProjectStacks>
                    {renderProjectStacks}
                </ProjectStacks>
            </ProjectStacksWrap>
        </ProjectContent>
    </StyledProjectItem>;
};
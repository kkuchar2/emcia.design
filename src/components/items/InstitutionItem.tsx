import React, {useEffect} from "react";

import {Text, useColorMode} from '@chakra-ui/react';

import {InstitutionData} from "../../data";

import {InstitutionProps} from "components/sections/common.types";

export const InstitutionItem = (props: InstitutionData & InstitutionProps) => {

    const { institution, title, startTime, endTime, description, headerColor } = props;

    const { colorMode } = useColorMode();

    useEffect(() => {
        const theme = localStorage.getItem('chakra-ui-color-mode') || 'light';
        if (theme === colorMode) {
            document.querySelector('html').style
                .setProperty('background', colorMode === 'dark' ? '#272727' : '#ffffff');
        }
    }, [colorMode]);

    return <div className={' box-border'}>
        <div className={'flex flex-grow-1 min-w-[120px] h-[70px]'}>
            <Text
                fontSize={'xl'}
                fontWeight={'semibold'}
                color={headerColor}>
                {institution}
            </Text>
        </div>

        <div className={'flex gap-5 flex-col min-w-0'}>
            <Text
                fontSize={'lg'}
                fontWeight={'bold'}
                color={'text-institution-timeframe'}>
                {`${startTime} - ${endTime}`}
            </Text>
            <Text
                fontSize={'lg'}
                fontWeight={'semibold'}
                color={'text-institution-color'}>
                {title}
            </Text>
            <Text
                fontSize={'lg'}
                color={'text-institution-description'}
                fontWeight={'normal'}>
                {description}
            </Text>
        </div>
    </div>;
};
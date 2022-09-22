import React from 'react';

import {Text} from "@chakra-ui/react";

import LanguageSwitchButton from "components/LanguageSwitchButton/LanguageSwitchButton";

interface DualLanguageSwitchProps {
    firstLanguage: string,
    secondLanguage: string,
};

const DualLanguageSwitch = (props: DualLanguageSwitchProps) => {

    const { firstLanguage, secondLanguage } = props;

    return <div className={'flex h-full items-center'}>
        <LanguageSwitchButton lang={firstLanguage}/>
        <Text color={'lang-option-separator'}>|</Text>
        <LanguageSwitchButton lang={secondLanguage}/>
    </div>;
};

export default DualLanguageSwitch;
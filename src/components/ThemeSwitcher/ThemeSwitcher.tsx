import React from "react";

import {Button, useColorMode} from "@chakra-ui/react";
import {SunIcon} from "@heroicons/react/outline";
import {MoonIcon} from "@heroicons/react/solid";
import {useTranslation} from "next-export-i18n";

import {useSemanticColor} from "hooks/useSemanticColor";

const ThemeSwitcher = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    const IconComponent = colorMode === 'light' ? MoonIcon : SunIcon;

    const { t } = useTranslation();

    return <Button bg={'none'} _hover={{ bg: 'none' }} _focus={{ bg: 'none' }}
        title={t('common.themeSwitch')}
        onClick={toggleColorMode}>
        <IconComponent width={20} style={{marginTop: 2}} color={useSemanticColor('theme-switch-icon')}/>
    </Button>;
};

ThemeSwitcher.defaultProps = {
    iconSize: 35
};

export default ThemeSwitcher;
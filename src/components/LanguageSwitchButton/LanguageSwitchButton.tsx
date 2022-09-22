import React, {useCallback, useMemo} from 'react';

import {Button} from "@chakra-ui/react";
import {useLanguageQuery, useLanguageSwitcherIsActive} from "next-export-i18n";
import {useRouter} from 'next/router';

type LanguageSwitchButtonProps = {
    lang: string,
};

const LanguageSwitchButton = (props: LanguageSwitchButtonProps) => {

    const { lang } = props;

    const { isActive: active } = useLanguageSwitcherIsActive(lang);

    const router = useRouter();

    const [query] = useLanguageQuery(lang);

    const setLanguage = useCallback(() => {
        router.push({ pathname: router.pathname, query: query, }, undefined, {
                shallow: false,
                scroll: false
            }
        );
    }, [query, router]);

    const onButtonClick = useCallback(() => {
        setLanguage();
    }, [setLanguage]);

    return useMemo(() => {
        if (!query) {
            return <></>;
        }

        return <Button
            data-is-current={active}
            bg={'none'}
            color={active ? 'text-lang-option-active' : 'text-lang-option'}
            _focus={{
                bg: "none",
            }}
            _hover={{
                bg: "none",
                color: active ? 'text-lang-option-active-hover' : 'text-lang-option-hover',
            }}
            onClick={onButtonClick}>
            {lang}
        </Button>;
    }, [lang, active, query, onButtonClick]);
};

export default LanguageSwitchButton;
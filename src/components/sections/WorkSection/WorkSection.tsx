import React, {useMemo} from 'react';

import {useTranslation} from "next-export-i18n";

import {InstitutionData} from "../../../data";
import {InstitutionItem} from "../../items/InstitutionItem";
import {StyledTitle} from '../common.styles';
import {DataItems} from "../common.types";

import {StyledChildren, StyledWorkSection} from "./style";

export const WorkSection = (props: DataItems<InstitutionData>) => {

    const { items } = props;

    const { t } = useTranslation();

    const renderItems = useMemo(() => items.map((item, index) => {
        return <InstitutionItem key={index} headerColor={'text-work-header'} {...item} />;
    }), [items]);

    return <StyledWorkSection>
        <StyledTitle>{t('index.work.name')}</StyledTitle>
        <StyledChildren>{renderItems}</StyledChildren>
    </StyledWorkSection>;
};
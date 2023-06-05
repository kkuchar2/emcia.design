import React, { InputHTMLAttributes, useCallback, useState } from 'react';

import styles from './CustomInput.module.scss';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const CustomInput = (props: CustomInputProps) => {
    const { label, ...rest } = props;

    const [focused, setFocused] = useState(false);

    const inputRef = React.createRef<HTMLInputElement>();

    const onInputFocus = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
        setFocused(true);
        rest.onFocus?.(event);
    }, [rest.onFocus]);

    const onInputBlur = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
        setFocused(false);
        rest.onBlur?.(event);
    }, [rest.onBlur]);

    const onComponentClick = useCallback(() => {
        inputRef.current?.focus();
    }, [inputRef]);

    return <div className={styles.customInput} onClick={onComponentClick}>
        <fieldset className={`${styles.fieldSet} ${focused ? styles.focused : ''}`}>
            <legend className={`${styles.legend} ${focused ? styles.focused : ''}`}>
                {label.toLowerCase()}
            </legend>
            <input
                className={styles.input}
                ref={inputRef}
                {...rest}
                onFocus={onInputFocus}
                onBlur={onInputBlur}/>
        </fieldset>
    </div>;
};
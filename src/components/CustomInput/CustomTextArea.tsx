import React, { useCallback, useState } from 'react';

import styles from './CustomTextArea.module.scss';

interface CustomTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
}

export const CustomTextArea = (props: CustomTextAreaProps) => {
    const { label, ...rest } = props;

    const [focused, setFocused] = useState(false);

    const textAreaRef = React.createRef<HTMLTextAreaElement>();

    const onTextAreaFocus = useCallback((event: React.FocusEvent<HTMLTextAreaElement>) => {
        setFocused(true);
        rest.onFocus?.(event);
    }, [rest.onFocus]);

    const onTextAreaBlur = useCallback((event: React.FocusEvent<HTMLTextAreaElement>) => {
        setFocused(false);
        rest.onBlur?.(event);
    }, [rest.onBlur]);

    const onComponentClick = useCallback(() => {
        textAreaRef.current?.focus();
    }, [textAreaRef]);

    return <div className={styles.customTextArea} onClick={onComponentClick}>
        <fieldset className={`${styles.fieldSet} ${focused ? styles.focused : ''}`}>
            <legend className={`${styles.legend} ${focused ? styles.focused : ''}`}>
                {label.toLowerCase()}
            </legend>
            <textarea
                className={styles.textArea}
                ref={textAreaRef}
                {...rest}
                onFocus={onTextAreaFocus}
                onBlur={onTextAreaBlur}
            />
        </fieldset>
    </div>;
};
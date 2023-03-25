import React, { InputHTMLAttributes, useCallback, useState } from 'react';

import styled from 'styled-components';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

interface InputState {
    focused: boolean;
}

const StyledCustomInput = styled.div<InputState>`
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 1.2rem;
  color: #1e1e1e;
  font-weight: 500;

  &:hover {
    cursor: text
  }
`;

const StyledInput = styled.input`
  width: 100%;
  outline: none;
  background: none;
  padding: 10px;
  caret-color: #cecece;
  color: #cacaca;
  font-size: 1rem;
  font-weight: normal;
`;

const StyledLegend = styled.legend<InputState>`
  color: ${({ focused }) => focused ? '#ffffff' : '#BDBDBD'};
  font-size: 0.8rem;
  font-weight: 400;
  padding-left: 7px;
  padding-right: 7px;
  margin-left: 15px;
  background: rgba(255, 0, 0, 0);

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;
const StyledFieldSet = styled.fieldset<InputState>`
  border: 1px solid #595959;
  border-radius: 8px;
  width: 100%;

`;

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

    return <StyledCustomInput focused={focused} onClick={onComponentClick}>
        <StyledFieldSet focused={focused}>
            <StyledLegend focused={focused}>{label.toLowerCase()}</StyledLegend>
            <StyledInput
                ref={inputRef}
                {...rest}
                onFocus={onInputFocus}
                onBlur={onInputBlur}/>
        </StyledFieldSet>
    </StyledCustomInput>;
};
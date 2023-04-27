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
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  color: #1e1e1e;
  font-weight: 500;
  position: relative;
  border-radius: 12px;

  &:hover {
    cursor: text
  }
`;

const StyledInput = styled.input`
  position: absolute;
  bottom: 1px;
  width: 100%;
  height: 45px;
  outline: none;
  padding: 0 10px 10px 20px;
  caret-color: #cecece;
  color: #cacaca;
  font-size: 1rem;
  font-weight: 500;
  background: transparent;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition-delay: 9999s;
    transition-delay: 9999s;
  }
`;

const StyledLegend = styled.legend<InputState>`
  color: ${({ focused }) => focused ? '#ffffff' : '#BDBDBD'};
  font-weight: 400;
  font-size: 0.8rem;
  padding-left: 7px;
  padding-right: 7px;
  margin-left: 15px;
  background: rgba(255, 0, 0, 0);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;
const StyledFieldSet = styled.fieldset<InputState>`
  border: 1px solid ${({ focused }) => focused ? '#686868' : '#595959'};
  border-radius: 12px;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
  background: ${({ focused }) => focused ? '#232323' : 'none'};
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
            <StyledLegend focused={focused}>
                {label.toLowerCase()}
            </StyledLegend>
            <StyledInput
                ref={inputRef}
                {...rest}
                onFocus={onInputFocus}
                onBlur={onInputBlur}/>
        </StyledFieldSet>
    </StyledCustomInput>;
};
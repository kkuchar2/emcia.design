import React, { useCallback, useState } from 'react';

import styled from 'styled-components';

interface CustomTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
}

interface TextAreaState {
    focused: boolean;
}

const StyledCustomTextArea = styled.div<TextAreaState>`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 1.2rem;
  color: #1e1e1e;
  font-weight: 500;
  border-radius: 12px;

  &:hover {
    cursor: text
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  outline: none;
  background: none;
  max-height: 400px;
  height: 200px;
  padding: 10px 10px 10px 20px;
  caret-color: #cecece;
  color: #ffffff;
  font-size: 1rem;
  font-weight: normal;
  resize: none;
`;

const StyledLegend = styled.legend<TextAreaState>`
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

const StyledFieldSet = styled.fieldset<TextAreaState>`
  border: 1px solid ${({ focused }) => focused ? '#686868' : '#595959'};
  border-radius: 12px;
  width: 100%;
  transition: all 0.3s ease-in-out;
  background: ${({ focused }) => focused ? '#232323' : 'none'};
`;

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

    return <StyledCustomTextArea focused={focused} onClick={onComponentClick}>
        <StyledFieldSet focused={focused}>
            <StyledLegend focused={focused}>{label.toLowerCase()}</StyledLegend>
            <StyledTextArea
                ref={textAreaRef}
                {...rest}
                onFocus={onTextAreaFocus}
                onBlur={onTextAreaBlur}
            />
        </StyledFieldSet>
    </StyledCustomTextArea>;
};
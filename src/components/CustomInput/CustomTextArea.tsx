import React, { useCallback, useState } from 'react';

import styled from 'styled-components';

interface CustomTextAreaProps {
    label: string;
}

interface TextAreaState {
    focused: boolean;
}

const StyledCustomTextArea = styled.div<TextAreaState>`
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

const StyledTextArea = styled.textarea`
  width: 100%;
  outline: none;
  background: none;
  max-height: 400px;
  height: 200px;
  padding: 10px;
  caret-color: #cecece;
  color: #cacaca;
  font-size: 1rem;
  font-weight: normal;
  resize: none;
`;

const StyledLegend = styled.legend<TextAreaState>`
  color: ${({ focused }) => focused ? '#ffffff' : '#cacaca'};
  font-size: 0.8rem;
  font-weight: 600;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 15px;
  background: rgba(255, 0, 0, 0);

  @media (min-width: 768px) {
    font-size: 1rem;
    font-weight: 500;
  }
}
`;
const StyledFieldSet = styled.fieldset<TextAreaState>`
  border: 1px solid #595959;
  border-radius: 8px;
  width: 100%;

`;

export const CustomTextArea = (props: CustomTextAreaProps) => {
    const { label } = props;

    const [focused, setFocused] = useState(false);

    const textAreaRef = React.createRef<HTMLTextAreaElement>();

    const onTextAreaFocus = useCallback(() => {
        console.log('onfocus', label);
        setFocused(true);
    }, []);

    const onTextAreaBlur = useCallback(() => {
        console.log('onblur', label);
        setFocused(false);
    }, []);

    const onComponentClick = useCallback(() => {
        console.log('focusing', label, textAreaRef.current);
        textAreaRef.current?.focus();
    }, [textAreaRef]);

    return <StyledCustomTextArea focused={focused} onClick={onComponentClick}>
        <StyledFieldSet focused={focused}>
            <StyledLegend focused={focused}>{label}</StyledLegend>
            <StyledTextArea ref={textAreaRef} onFocus={onTextAreaFocus} onBlur={onTextAreaBlur}/>
        </StyledFieldSet>
    </StyledCustomTextArea>;
};
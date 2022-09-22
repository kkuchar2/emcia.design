import styled from "styled-components";

interface StyledThemeSwitchButtonProps {
    size: number;
    theme: 'dark' | 'light';
}

export const StyledThemeSwitchButton = styled.button<StyledThemeSwitchButtonProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  padding: 7px;
  box-sizing: border-box;
  border-radius: 7px;

  &:hover {
    background: ${props => props.theme === 'dark' ?  `rgba(255, 255, 255, 0.14)` : `#EDF2F7`};
  }
`;
import { keyframes } from 'styled-components';

export const scaleUp = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

export const lineGrow = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 400px;
  }
`;
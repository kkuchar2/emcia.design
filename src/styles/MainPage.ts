import styled from 'styled-components';

export const StyledHome = styled.div`
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledContent = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CenterBox = styled.div`
  background-origin: padding-box;
  box-sizing: border-box;
  line-height: clamp(4rem, 4vw + 1rem, 6rem);
  margin: 10px 10px 100px;
  font-weight: 400;
  font-size: clamp(2.8rem, 2vw + 1rem, 5rem);
  padding: 80px 50px 80px 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-size: 50px 50px;
  position: relative;
  z-index: 1;
  pointer-events: none;
  animation: fadeIn 1s ease-in-out forwards;
`;

export const Descriptions = styled.div`
  margin-top: 100px;
  width: 1600px;
  min-width: 0;
  box-sizing: border-box;
  z-index: 2;

  @media (max-width: 1600px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const StyledWorkEducation = styled.div`
  display: grid;
  gap: 60px;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 100px;
  grid-template-columns: 2fr 1fr;

  @media (max-width: 840px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const StyledBuildHash = styled.div`
  font-size: 0.8em;
  color: rgba(229, 229, 229, 0.3);
  text-align: left;
  font-weight: 500;
`;

import {motion} from "framer-motion";
import styled from "styled-components";

import {MotionBox} from "components/MotionBox/MotionBox";

export const StyledProjectItem = styled(MotionBox)`
  display: flex;
  flex-direction: column;
  padding: 40px 20px 20px 20px;
  box-sizing: border-box;
  gap: 10px;
  height: auto;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

  &:before {
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
    filter: blur(2px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    &:hover {
      //transform: scale(1.2);

      .project-item-title {
        //background: linear-gradient(45deg, #ff0099, #ff7300, #ffeb00 60%, #00b2ff 80%);
        background: #0bb927;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  grid-template-rows: 50px 70px 130px;
  margin-bottom: 20px;
  gap: 10px;
`;

export const ProjectTitle = styled(motion.h1)`
  box-sizing: border-box;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
`;

export const ProjectDescription = styled.div`
  font-weight: 400;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 85%;
  padding-top: 10px;
  flex: 1 0;
`;

export const ProjectStacksWrap = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 10px;
`;

export const ProjectStacks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;

export const StyledProjectStack = styled.div`
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledLinks = styled.div`
  display: flex;
  flex: 1 0;
  box-sizing: border-box;
  justify-content: flex-end;
  align-items: flex-start;
  height: 50px;
  gap: 20px;
`;
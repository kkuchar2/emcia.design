import React, {useMemo} from "react";

import {useColorMode} from "@chakra-ui/react";
import { OrthographicCamera } from '@react-three/drei';
import {Canvas} from "@react-three/fiber";
import styled from "styled-components";

import Dots from "components/Dots/Dots";

const StyledMyCanvas = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1000px;
  z-index: 1;
  box-sizing: border-box;
`;

const StyledCanvasWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1000px;
  z-index: -1;
  box-sizing: border-box;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadeIn 1s ease-out;
`;

interface ColorModeProps {
    colorMode: "light" | "dark";
}

const Shadow = styled.div<ColorModeProps>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 300px;
  z-index: 2;
  box-sizing: border-box;
  background: ${({ colorMode }) => {
    if (colorMode === "light") {
      return "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)";
    }
    return "linear-gradient(to bottom, rgba(39, 39, 39, 0) 0%, rgba(39, 39, 39, 1) 100%)";
  }};
  pointer-events: none;
`;

export const MyCanvas = () => {

    const { colorMode } = useColorMode();

    return useMemo(() => {
        if (colorMode === 'light') {
            return null;
        }
        return <StyledMyCanvas>
            <Shadow colorMode={colorMode}/>
            <StyledCanvasWrapper>
                <Canvas>
                    <OrthographicCamera makeDefault zoom={1} position={[0, 0, 1]} />
                    <Dots />
                </Canvas>
            </StyledCanvasWrapper>
        </StyledMyCanvas>;
    }, [colorMode]);
};
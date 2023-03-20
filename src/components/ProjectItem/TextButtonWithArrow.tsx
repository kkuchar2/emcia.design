import React from 'react';

import styled from 'styled-components';

const StyledArrow = styled.img`
  width: 40px;
  z-index: 1;
  margin-left: 10px;
  transition: all .5s cubic-bezier(.77, 0, .175, 1);
  display: block;
`;

interface StyledViewProjectButtonProps {
    circleColor: string;
}

const StyledViewProjectButtonWrapper = styled.div<StyledViewProjectButtonWrapperProps>`
  position: relative;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width}px;
  min-height: 3rem;
  overflow: hidden;
  transform: ${({ visible }) => {
    if (visible) {
      return 'translateY(0)';
    }
    return 'translateY(100%)';
  }};
  transition: transform 1s cubic-bezier(0.175, 0.67, 0.3, 0.97) ${({ delay }) => delay || 0}s;
`;

const StyledViewProjectButton = styled.a<StyledViewProjectButtonProps>`
  color: #000000;
  cursor: pointer;
  margin: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  text-decoration: none;
  transition: all .5s cubic-bezier(.77, 0, .175, 1);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  gap: 0.5rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);


  :before {
    content: '';
    position: absolute;
    top: -50%;
    height: 3rem;
    transition: all 1500ms cubic-bezier(0.075, 0.82, 0.165, 1);
    box-sizing: border-box;
    transform: translateY(50%);
    left: 0;
    width: 3rem;
    background-color: ${props => props.circleColor};
    border-radius: calc(3rem / 2);
  }

  &:hover {
    width: 100%;

    :before {
      width: 100%;
    }
  }
`;

interface WrapperProps {
    position?: string;
}

const Wrapper = styled.div<WrapperProps>`
  position: ${props => props.position ?? 'absolute'};
  bottom: 0;
  line-height: normal;
  overflow: hidden;
`;

interface StyledViewProjectButtonWrapperProps {
    width: number;
    delay?: number;
    visible?: boolean;
}

interface StyledTextProps {
    color: string;
}

const StyledText = styled.div<StyledTextProps>`
  font-size: 16px;
  font-weight: 600;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2px;
  min-width: max-content;
  color: ${(props) => props.color};
  transition: all .5s cubic-bezier(.77, 0, .175, 1);
`;

interface TextButtonWithArrowProps {
    width?: number;
    text: string;
    textColor: string;
    circleColor: string;
    arrowColor?: string;
    image: string;
    position?: string;
    delay?: number;
}

export const TextButtonWithArrow = (props: TextButtonWithArrowProps) => {

    const { text, textColor, circleColor, image, width, position, delay = 0 } = props;

    const [visible, setVisible] = React.useState(false);

    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {

        const buildThresholdList = () => {
            let thresholds = [];
            for (let i = 0; i <= 1.0; i += 0.01) {
                thresholds.push(i);
            }
            return thresholds;
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: buildThresholdList()
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return <Wrapper position={position} ref={ref}>
        <StyledViewProjectButtonWrapper width={width || 200} delay={delay} visible={visible}>
            <StyledViewProjectButton href={'/'} circleColor={circleColor}>
                <StyledText color={textColor}>
                    {text}
                </StyledText>
                <StyledArrow src={image} alt={'arrow'}/>
            </StyledViewProjectButton>
        </StyledViewProjectButtonWrapper>
    </Wrapper>;
};

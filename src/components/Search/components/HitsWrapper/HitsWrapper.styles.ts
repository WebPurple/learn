import styled from 'styled-components';
import { media, colorWarmPurple, colorLiliac, colorVividPurple } from '../../../../utils/css-utils';

export const HitsWrapperAnchor = styled.div`
  position: relative;
  height: 4rem;
`;

export const HitsWrapperContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 5rem;
  transform: translateX(-100%);

  ${media.phone`
    left: 0;
  `}
`;

export const HitsWrapperFrame = styled.div`
  position: relative;
  background-color: ${colorWarmPurple};
  border-radius: 3px;
  &:before,
  &:after {
    content: '';
    position: absolute;
    height: 2rem;
    left: 0;
    right: 1rem;
    display: block;
    z-index: 1;
    border-radius: 3px;
  }
  &:before {
    top: 0;
    background: linear-gradient(${colorWarmPurple} 15%, transparent);
  }
  &:after {
    margin-top: -7rem;
    top: 100%;
    transform: translateY(-100%);
    background: linear-gradient(transparent, ${colorWarmPurple} 85%);
  }
`;

export const HitsWrapperUl = styled.ul`
  box-sizing: border-box;
  background-color: ${colorWarmPurple};
  position: relative;
  max-height: 60vh;
  overflow: auto;
  border: 2px solid ${colorWarmPurple};
  border-radius: 3px;
  padding: 1rem;
  width: 100vw;

  ${media.phone`
    width: 50rem;
  `}

  &::-webkit-scrollbar {
    width: 0.6rem;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colorLiliac};
    border-radius: 3px;
  }
`;

export const HitsWrapperLi = styled.li`
  &:not(:last-child):after {
    content: '';
    display: block;
    height: 2px;
    background-color: ${colorVividPurple};
    border-radius: 50%;
    width: 100%;
  }
`;

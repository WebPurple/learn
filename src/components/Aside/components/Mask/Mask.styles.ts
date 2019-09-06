import styled from 'styled-components';
import { colorLiliac, colorWarmPurple, media } from '../../../../utils/css-utils';

const StyledMask = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: block;
  background: linear-gradient(90deg, ${colorLiliac}, #fff);
  opacity: 1;
  transition: opacity 0.3s;

  &.hidden {
    opacity: 0;
  }

  &:after {
    content: '';
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    border: solid ${colorWarmPurple}30;
    border-width: 4px 4px 0 0;
    transform: rotate(45deg) translate(-30%, -40%);
    top: 50%;
    position: relative;
    left: -1rem;
  }

  ${media.tablet`
    background: linear-gradient(to right, transparent, #fff);
    &:after {
      display: none;
    }
  `}
  ${media.desktop`
    display: none;
  `}
  &.hidden {
    display: none;
  }
`;

export default StyledMask;

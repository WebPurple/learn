import styled from 'styled-components';
import { media } from '../../utils/css-utils';

const StyledIcon = styled.svg`
  position: absolute;
  left: 100%;
  transform: translate(-100%, -50%);
  top: 50%;
  margin-left: -2rem;
  z-index: 1001;

  ${media.tablet`
    display: none;
  `}
`;

export const StyledRect = styled.rect`
  transition: 0.3s;
`;

export const openBars = {
  leftBar: 'translate(0) rotate(0)',
  centerBar: 'translate(0 10) rotate(0)',
  rightBar: 'translate(0 20) rotate(0)',
};

export const closeBars = {
  leftBar: 'translate(3.53552) rotate(45)',
  centerBar: 'translate(3.53998 0.125641) rotate(45)',
  rightBar: 'translate(0 21.2132) rotate(-45)',
};

export const svgAttrs = {
  width: '30',
  height: '25',
  viewBox: '0 0 30 25',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
};

export default StyledIcon;

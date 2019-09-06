import styled from 'styled-components';
import { colorWarmPurple } from '../../../../utils/css-utils';

const StyledSvg = styled.svg`
  display: inline-block;
  height: 2rem;
  width: 2rem;
  fill: ${colorWarmPurple};
  position: absolute;
  left: 1rem;
  top: 1rem;
  outline: none;
`;

export default StyledSvg;

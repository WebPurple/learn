import styled from 'styled-components';
import { media, colorWarmPurple } from '../../../../utils/css-utils';

export const StyledButton = styled.button`
  position: fixed;
  right: 0;
  height: 6rem;
  width: 3.5rem;
  background-color: transparent;
  border: none;
  outline: none;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 2rem;
    height: 0.3rem;
    display: block;
    background-color: ${colorWarmPurple};
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

  ${media.phone`
    display: none;
  `}
`;

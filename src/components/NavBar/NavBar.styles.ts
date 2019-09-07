import styled from 'styled-components';
import { media } from '../../utils/css-utils';

export const NavbarItem = styled.li`
  list-style: none;
  margin-bottom: 2.5rem;
  ${media.tablet`margin: 0 2rem`};
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 10rem 7.5rem;
  padding: 0;
  ${media.phone`
      margin: 10rem 4rem;
    `}
  ${media.tablet`
      margin: 0;
      flex-direction: row;
    `}
  ${media.desktop`
      margin: 0 4rem;
    `}
`;

export const StyledNav = styled.nav`
  position: absolute;
  left: 100%;
  z-index: 1000;
  background-color: white;
  transition: 0.3s;
  width: 0;
  overflow: hidden;

  &.opened {
    left: 0;
    width: 100%;
  }

  ${media.tablet`
    position: static;
    width: 100%;
  `}
`;

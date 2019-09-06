import styled from 'styled-components';
import { media } from '../../utils/css-utils';
import { StyledAsideProps } from './Aside.interfaces';
import { setAsideHeight } from './utils';

const StyledAside = styled.aside<StyledAsideProps>`
  width: 3rem;
  box-sizing: border-box;
  overflow: hidden;
  position: absolute;
  top: initial;
  z-index: 100;
  transition: 0.3s;
  height: 5rem;
  max-height: ${setAsideHeight};

  &.sticky {
    position: fixed;
    top: 0;
    max-height: auto;
  }

  &.active {
    width: 100%;
    background-color: #fff;
    min-height: ${setAsideHeight};
    max-height: none;
    height: 100%;

    & .gatsby-dnmcl-nav-link_head {
      margin-right: 5rem;
      margin-left: 5rem;
    }

    & > .gatsby-dnmcl-nav {
      text-align: center;

      & > .gatsby-dnmcl-nav-list {
        display: inline-block;
      }
    }
  }

  ${media.tablet`
    width: 20rem;
    height: auto;
    padding: 2rem;
    background-color: #fff;
  `}

  ${media.desktop`
    width: 30rem;
    position: absolute;

    &:before, &:after {
      display: none;
    }

    &.active {
      width: 30rem;
      & .gatsby-dnmcl-nav-link_head {
        margin-right: 0;
        margin-left: 0;
      }

      &>.gatsby-dnmcl-nav {
        text-align: left;

        &>.gatsby-dnmcl-nav-list {
          display: block;
        }
      }
    }
  `}
`;

export default StyledAside;

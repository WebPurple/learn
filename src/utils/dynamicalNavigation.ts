import { createGlobalStyle } from 'styled-components';
import { colorWarmGrey, colorWarmPurple, colorVerise, media } from './css-utils';

export const NavigationStyle = createGlobalStyle`
  .logo-loader {
    margin-top: 3rem;
    max-width: 10rem;
    opacity: .7;
  }

  .gatsby-dnmcl-nav-link {
    text-decoration: none;
    display: flex;
    padding: 0 0 1rem 1rem;
    color: ${colorWarmPurple};
    font-weight: bold;

    &_to-page {
      padding: 0;
      color: ${colorWarmGrey};
      font-weight: normal;

      &:before {
        content: "\\00A7";
        margin-right: 1rem;
      }
    }

    &_head {
      box-sizing: border-box;
      font-style: italic;
      font-weight: bold;
      color: ${colorWarmPurple};
      font-size: 1.8rem;
      display: flex;
      align-items: center;
      margin-bottom: 3rem;

      &:before, &:after {
        content: '';
        width: 100%;
        background-color: currentColor;
        height: 2px;
      }

      &:before {
        margin-right: 1rem;
      }

      &:after {
        margin-left: 1rem;
      }
    }
  
    &.target {
      color: ${colorVerise};
      display: block;
      padding-bottom: 1rem;
    }

    &.active {
      color: ${colorVerise};
    }
  }  

  .gatsby-dnmcl-nav-list {
    list-style: none;
    padding: 0 0 1rem 1rem;
  }

  ${media.tablet`
    .gatsby-dnmcl-nav {
      white-space: nowrap;
    }
  `}

  ${media.desktop`
    .gatsby-dnmcl-nav {
      white-space: normal;
    }
  `}
`;

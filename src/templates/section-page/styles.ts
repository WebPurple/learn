import { createGlobalStyle } from 'styled-components';

const SectionGlobalStyle = createGlobalStyle`
  main {
    text-align: center;
  }

  .logo-loader {
    margin-top: 3rem;
    max-width: 10rem;
    opacity: .7;
  }

  .gatsby-dnmcl-nav {
    text-align: center;
    padding: 2rem;
  }

  .gatsby-dnmcl-nav-link {
    text-decoration: none;

    &_head {
      display: none;
    }
  }

  .gatsby-dnmcl-nav-list {
    list-style: decimal;
    display: inline-block;
    font-size: 3.2rem;

    &__item {
      text-align: left;
      margin-bottom: 3rem;
    }
  }
`;

export default SectionGlobalStyle;

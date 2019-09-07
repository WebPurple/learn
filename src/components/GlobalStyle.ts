import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size 10px;
  }

  body {
    font-size: 1.4rem;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }

  .logo-icon {
    width: 3.5rem;
    height: 3.5rem;
    margin-right: 2rem;
  }
`;

export default GlobalStyle;

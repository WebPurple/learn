import { createGlobalStyle } from 'styled-components';

const ContentsGlobalStyle = createGlobalStyle`
  main {
    text-align: center;
    
    .gatsby-dnmcl-nav {
      text-align: center;
      padding: 2rem;
  
      .gatsby-dnmcl-nav-link {
        white-space: normal;
        padding: 0;
        font-weight: normal;

        &_head {
          display: none;
        }
  
        &_to-page:before {
          display: none;
        }
      }
  
      .gatsby-dnmcl-nav-list {
        display: inline-block;
        list-style: decimal;
        font-size: 2.6rem
  
        &__item {
          text-align: left;
        }
      }
    }
  } 
`;

export default ContentsGlobalStyle;

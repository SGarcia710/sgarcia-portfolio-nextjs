import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../../constants';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  html {
    scroll-behavior: smooth;
  }

  @media screen and (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
 
  body {
    font-family: 'Plus Jakarta Sans Regular', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
    text-rendering: optimizeLegibility;

    overflow-x: hidden;
    color: ${COLORS.fontColor};
    line-height: 1.75;

    // Dark mode configuration provided by styled-components
    /* @media (prefers-color-scheme: dark) {
      background: #f4f7f6;
    } */
  }

  p,
  ol,
  ul,
  dl,
  table,
  blockquote {
    font-size: 1.3rem;

    @media (max-width: 425px) {
      font-size: 1.05rem;
      margin: 0 0 1.5rem 0;
    }
  }

  a{
    color: ${COLORS.fontColor};
  }
`;

export default GlobalStyles;

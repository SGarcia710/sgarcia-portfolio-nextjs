import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    text-decoration: none;
  }
  body {
    background: #f4f7f6;
    font-family: 'Plus Jakarta Sans Regular', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
    text-rendering: optimizeLegibility;
    
    // Dark mode configuration provided by styled-components
    @media (prefers-color-scheme: dark) {
      background: #f4f7f6;
    }
  }
`;

export default GlobalStyles;

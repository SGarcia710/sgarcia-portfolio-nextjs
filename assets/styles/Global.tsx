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

    overflow-x: hidden;
    
    // Dark mode configuration provided by styled-components
    @media (prefers-color-scheme: dark) {
      background: #f4f7f6;
    }
  }

  .snippet-highlight {
    position: relative;
    -webkit-overflow-scrolling: touch;
  }
  .snippet-highlight pre[class*="language-"] {
    -webkit-overflow-scrolling: touch;
    padding: 1rem 0.75rem;
    border-radius: 0.25rem;
  }
  .snippet-highlight pre[class*="language-"]::before {
    background: black;
    border-radius: 0 0 0.25rem 0.25rem;
    color: white;
    font-size: 12px;
    letter-spacing: 0.025rem;
    padding: 0.1rem 0.5rem;
    position: absolute;
    right: 1rem;
    text-align: right;
    text-transform: uppercase;
    top: 0;
  }
  .snippet-highlight pre[class*="language-javascript"]::before {
    content: "js";
    background: #f7df1e;
    color: black;
  }
  .snippet-highlight pre[class*="language-js"]::before {
    content: "js";
    background: #f7df1e;
    color: black;
  }

  .snippet-highlight pre[class*="language-html"]::before {
    content: "html";
    background: #005a9c;
    color: white;
  }

  .snippet-highlight pre[class*="language-css"]::before {
    content: "css";
    background: #ff9800;
    color: white;
  }
`;

export default GlobalStyles;

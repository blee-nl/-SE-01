import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body{ margin:0; font-family: system-ui, sans-serif;
  line-height: 1.5;
  }
`;

export { GlobalStyle };

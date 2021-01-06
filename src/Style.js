import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body{ margin:0; font-family: system-ui, sans-serif;
  line-height: 1.5;
  }
`;

const theme = {
  fontSizes: [12, 14, 16, 24, 32, 48, 64],
  colors: {
    orange: "#fda727",
    cream: "#faf7f3",
    darkGray: "#565656",
    lightGray: "#e4e7e8",
    dimGray: "#6868",
    lightShade: "#f8f8f8",
    dimBlack: "#24242",
  },
  placeholder: {
    color: "#6868",
  },
};

const colorChart = {
  orange: "#fda727",
  cream: "#faf7f3",
  darkGray: "#565656",
  lightGray: "#e4e7e8",
  dimGray: "#6868",
  lightShade: "#f8f8f8",
  dimBlack: "#24242",
  placeholderText: "#6868",
};

const screen = {
  xlarge: "1440px",
  large: "1220px",
  default: "1024px",
  medium: "720px",
  small: "480px",
  xsmall: "320px",
};

export { GlobalStyle, theme, colorChart, screen };

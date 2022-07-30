import { createGlobalStyle } from "styled-components";
import { COLORS } from "../utils/variables";
import { FONTFAMILY, QUERIES } from "../utils/variables";

const GlobalStyles = createGlobalStyle`

*,
::after,
::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    font-family: ${FONTFAMILY.spartan}, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    background-color: ${COLORS.background};
    background-image: url('../assets/background-stars.svg');
    color: ${COLORS.primary};
}

h1, dd {
  font-family: ${FONTFAMILY.antonio}, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}

.no-scroll {
  overflow: hidden;

  @media (${QUERIES.tablet}) {
    overflow: visible ;
  }
}

`;

export default GlobalStyles;

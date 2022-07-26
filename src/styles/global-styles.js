import { createGlobalStyle } from "styled-components";
import { COLORS } from "../utils/variables";
import { FONTFAMILY } from "../utils/variables";

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

body, h3, h4 {
  font-family: ${FONTFAMILY.spartan}, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  
}

h1, h2, dd {
  font-family: ${FONTFAMILY.antonio}, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}

body {
  background-color: ${COLORS.background};
  background-image: url('../assets/background-stars.svg');
  background-repeat: no-repeat;
  background-size: cover;
  color: ${COLORS.primary};
}




`;

export default GlobalStyles;

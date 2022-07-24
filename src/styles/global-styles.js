import { createGlobalStyle } from "styled-components";
import { COLORS } from "../utils/variables";
import { FONTFAMILY, FONTWEIGHT } from "../utils/variables";

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

h1, h2 {
  font-family: ${FONTFAMILY.antonio}, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}

body {
  font-size: 0.875rem;
  font-weight: 400;
  background-color: ${COLORS.background};
  background-image: url('../assets/background-stars.svg');
  background-repeat: no-repeat;
  background-size: cover;
  color: ${COLORS.primary};
}

h1 {
  font-size: 5rem;
}

h2 {
  font-size: 2.5rem;
  letter-spacing: -1.5px;
}

h3 {

  font-size: .75rem;
  letter-spacing: 2.6px;
}

h4 {
  font-size: 0.6875rem;
  letter-spacing: 1px;

}

h3, h4 {
  font-weight: ${FONTWEIGHT.bold};
}




`;

export default GlobalStyles;

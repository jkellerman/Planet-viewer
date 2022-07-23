import { createGlobalStyle } from "styled-components";
import { COLORS } from "../utils/variables";

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
  font-family: 'League Spartan', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  
}

h1, h2 {
  font-family: 'Antonio', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}

body {
  font-size: 0.875rem;
  line-height: 25px;
  font-weight: 400;
  background-color: ${COLORS.background};
  background-image: url('../assets/background-stars.svg');
  background-repeat: no-repeat;
  background-size: cover;
  color: ${COLORS.primary};

}

h1 {
  font-size: 5rem;
  line-height: 103px;
}

h2 {
  font-size: 2.5rem;
  line-height: 52px;
  letter-spacing: -1.5px;
}

h3 {

  font-size: .75rem;
  line-height: 25px;
  letter-spacing: 2.6px;
}

h4 {
  font-size: 0.6875rem;
  line-height: 25px;
  letter-spacing: 1px;

}

h3, h4 {
  font-weight: 700;
}


`;

export default GlobalStyles;

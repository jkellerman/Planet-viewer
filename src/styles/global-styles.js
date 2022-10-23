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
    animation: animatedBackground 100s linear infinite;

    @media (${QUERIES.tablet}) {
      animation: animatedBackground 50s linear infinite;
    }

    @media (${QUERIES.laptop}) {
      animation: animatedBackground 25s linear infinite;
    }

    @media (${QUERIES.desktop}) {
      animation: animatedBackground 20s linear infinite;
    }
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

model-viewer#reveal {
  --poster-color: transparent;
}


@keyframes animatedBackground {
  0% {
    background-position: 0% 0%
  } 
  25% {
    background-position: 25% 0%;
  }
  50% {
    background-position: 50% 0%
  }
  75% { 
    background-position: 75%% 0%
  }

  100% {
    background-position: 100% 0%
  }
}

`;

export default GlobalStyles;

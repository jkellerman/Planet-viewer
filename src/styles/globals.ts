import { createGlobalStyle } from "styled-components";
import { QUERIES } from "./mediaQueries";
import { Theme } from "./theme";

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
    background-color: ${Theme.colors.background};
    color: ${Theme.colors.primary};
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

`;

export default GlobalStyles;

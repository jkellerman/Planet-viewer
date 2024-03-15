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

::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
  border: 4px solid transparent;
  background-clip: content-box; /* THIS IS IMPORTANT */
}

/* Handle */
::-webkit-scrollbar-thumb {
  background-color: ${Theme.colors.secondary};
  border: 1px solid transparent;
  border-radius: 4px;
}

model-viewer#reveal {
  --poster-color: transparent;
}

`;

export default GlobalStyles;

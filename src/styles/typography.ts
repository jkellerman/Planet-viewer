import { css } from "styled-components";
import { QUERIES } from "./mediaQueries";
import { Theme } from "./theme";

export const h1Styles = css`
  font-family: ${Theme.fontFamily.antonio};
  font-weight: ${Theme.fontWeight.medium};
  font-size: ${Theme.fontSizes.l / 16}rem;
  text-transform: uppercase;

  @media (${QUERIES.tablet}) {
    font-size: ${Theme.fontSizes.l / 16}rem;
  }

  @media (${QUERIES.laptop}) {
    font-size: ${Theme.fontSizes.xl / 16}rem;
  }
`;

export const h2Styles = css`
  font-family: ${Theme.fontFamily.antonio};
  font-weight: ${Theme.fontWeight.medium};
  font-size: ${Theme.fontSizes.l / 2 / 16}rem;
  letter-spacing: -0.75px;
  text-transform: uppercase;

  @media (${QUERIES.tablet}) {
    font-size: ${(Theme.fontSizes.l - 16) / 16}rem;
    letter-spacing: -0.9px;
  }

  @media (${QUERIES.laptop}) {
    font-size: ${Theme.fontSizes.l / 16}rem;
    letter-spacing: -1.5px;
  }
`;

export const h3Styles = css`
  font-family: ${Theme.fontFamily.spartan};
  font-weight: ${Theme.fontWeight.bold};
  font-size: ${(Theme.fontSizes.s - 3) / 16}rem;
  letter-spacing: 1.93px;
  text-transform: uppercase;

  @media (${QUERIES.tablet}) {
    font-size: ${Theme.fontSizes.s / 16}rem;
    letter-spacing: 2.6px;
  }
`;

export const h4Styles = css`
  font-family: ${Theme.fontFamily.spartan};
  font-weight: ${Theme.fontWeight.bold};
  font-size: ${Theme.fontSizes.xs / 16}rem;
  letter-spacing: 0.73px;
  text-transform: uppercase;

  @media (${QUERIES.tablet}) {
    letter-spacing: 1px;
  }
`;

export const bodyTextStyles = css`
  font-family: ${Theme.fontFamily.spartan}, -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  font-weight: ${Theme.fontWeight.regular};
  font-size: ${Theme.fontSizes.m / 16}rem;
  line-height: 22px;

  @media (${QUERIES.laptop}) {
    line-height: 25px;
  }
`;

export const titleStyles = css`
  font-family: ${Theme.fontFamily.antonio};
  font-weight: ${Theme.fontWeight.medium};
  font-size: ${(Theme.fontSizes.m * 2) / 16}rem;
  letter-spacing: -1.05px;
  text-transform: uppercase;
`;

export const navTextStyles = css`
  font-family: ${Theme.fontFamily.spartan};
  font-weight: ${Theme.fontWeight.bold};
  font-size: ${(Theme.fontSizes.m + 1) / 16}rem;
  letter-spacing: 1.36px;
  text-transform: uppercase;

  @media (${QUERIES.tablet}) {
    font-size: ${Theme.fontSizes.xs / 16}rem;
    letter-spacing: 1px;
  }
`;

export const sourceTextStyles = css`
  font-family: ${Theme.fontFamily.spartan};
  font-size: ${Theme.fontSizes.s / 16}rem;
  text-transform: capitalize;

  @media (${QUERIES.laptop}) {
    font-size: ${Theme.fontSizes.m / 16}rem;
  }
`;

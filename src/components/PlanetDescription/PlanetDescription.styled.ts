import styled from "styled-components";
import { QUERIES } from "../../styles/mediaQueries";
import { Theme } from "../../styles/theme";
import { motion } from "framer-motion";
import {
  h1Styles,
  bodyTextStyles,
  sourceTextStyles,
} from "../../styles/typography";

export const PlanetDescriptionContainer = styled.div`
  text-align: center;
  margin-bottom: 1.75rem;

  @media (${QUERIES.tablet}) {
    text-align: start;
  }

  @media (${QUERIES.laptop}) {
    grid-area: 1 / 3;
    grid-row: 1 / span 2;
    align-self: center;
    transform: translateY(-2rem);
    max-width: 350px;
  }
`;

export const Paragraph = styled.p`
  ${bodyTextStyles}
  width: 84%;
  margin: 2rem auto;

  @media (${QUERIES.mobileL}) {
    width: 80%;
  }

  @media (${QUERIES.tablet}) {
    margin: 0 0 2rem;
    height: 110px;
  }

  @media (${QUERIES.laptop}) {
    width: 95%;
    height: 165px;
    margin: 0;
  }
`;

export const Source = styled.div`
  ${sourceTextStyles}
  color: ${Theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  @media (${QUERIES.tablet}) {
    justify-content: flex-start;
  }

  @media (${QUERIES.laptop}) {
    transform: translateY(-0.5rem);
  }
`;

export const SourceHeading = styled.span`
  font-weight: ${Theme.fontWeight.regular};
`;

export const WikiLink = styled.a`
  font-weight: ${Theme.fontWeight.bold};
  color: ${Theme.colors.secondary};
`;

export const SVG = styled.svg`
  path {
    fill: ${Theme.colors.secondary};
  }
`;

export const Name = styled(motion.h1)`
  ${h1Styles}
  margin-bottom: 1rem;

  @media (${QUERIES.laptop}) {
    transform: translateX(-0.2rem);
  }
`;

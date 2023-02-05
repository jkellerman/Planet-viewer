import styled from "styled-components";
import { QUERIES } from "../../styles/mediaQueries";
import { motion } from "framer-motion";

interface PlanetProps {
  size: string;
}

export const PlanetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* TODO: Change snippets to this and then add deleted properties */
  height: 305px;

  @media (${QUERIES.tablet}) {
    grid-column: 1 / span 2;
    height: 422.781px;
  }

  @media (${QUERIES.laptop}) {
    grid-row: 1 / span 3;
    height: unset;
  }
`;

export const ModelContainer = styled(motion.div)<PlanetProps>`
  height: ${({ size }) => `calc(${size} / 2.61)`};
  width: ${({ size }) => `calc(${size} / 2.61)`};

  @media (${QUERIES.tablet}) {
    height: ${({ size }) => `calc(${size} / 1.58)`};
    width: ${({ size }) => `calc(${size} / 1.58)`};
  }

  @media (${QUERIES.laptop}) {
    height: ${({ size }) => `${size}`};
    width: ${({ size }) => `${size}`};
  }
`;

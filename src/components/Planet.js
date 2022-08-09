import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../data/data.json";
import { QUERIES, MODELSIZES } from "../utils/variables";
import { motion } from "framer-motion";
import "@google/model-viewer";

const Planet = () => {
  const { planetName } = useParams();
  const planets = data.find((planet) => planet.name === planetName);
  const model = MODELSIZES.find((planet) => planet.name === planetName);
  const { models } = planets;
  const { size } = model;

  return (
    <PlanetContainer>
      <ModelContainer
        size={size}
        exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
      >
        <model-viewer
          id="reveal"
          style={{ width: "100%", height: "100%" }}
          alt={`A 3D model of the planet ${planetName}`}
          src={models.model}
          camera-controls
          camera-orbit={planetName === "saturn" ? "0deg 88deg" : "0deg 75deg"}
          auto-rotate
          ar
          ios-src={models.ios}
          poster={models.poster}
          loading="eager"
        >
          <div id="progress-bar" slot="progress-bar"></div>
        </model-viewer>
      </ModelContainer>
    </PlanetContainer>
  );
};

const PlanetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const ModelContainer = styled(motion.div)`
  height: ${({ size }) => `calc(${size} / 2)`};
  width: ${({ size }) => `calc(${size} / 2)`};

  @media (${QUERIES.tablet}) {
    height: ${({ size }) => `calc(${size} / 1.35)`};
    width: ${({ size }) => `calc(${size} / 1.35)`};
  }

  @media (${QUERIES.laptop}) {
    height: ${({ size }) => `${size}`};
    width: ${({ size }) => `${size}`};
  }
`;

export default Planet;

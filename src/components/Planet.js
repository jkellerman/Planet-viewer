import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../data/data.json";
import { QUERIES, MODELSIZES } from "../utils/variables";
import { motion } from "framer-motion";

const Planet = () => {
  const { planetName } = useParams();
  const planets = data.find((planet) => planet.name === planetName);
  const model = MODELSIZES.find((planet) => planet.name === planetName);
  const { models } = planets;
  const { size } = model;

  return (
    <PlanetContainer
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{
        ease: "easeInOut",
        type: "spring",
        stiffness: "50",
      }}
      exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
    >
      <ModelContainer size={size}>
        <model-viewer
          alt={`A 3D model of the planet ${planetName}`}
          src={models.model}
          camera-controls
          auto-rotate
          ar
          ios-src={models.ios}
          poster={models.poster}
          disable-zoom
        >
          <div id="lazy-load-poster" slot="poster"></div>
          <div id="progress-bar" slot="progress-bar"></div>
        </model-viewer>
      </ModelContainer>
    </PlanetContainer>
  );
};

const PlanetContainer = styled(motion.div)`
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

const ModelContainer = styled.div`
  height: ${({ size }) => `calc(${size} / 2.61)`};
  width: ${({ size }) => `calc(${size} / 2.61)`};

  @media (${QUERIES.tablet}) {
    height: ${({ size }) => `calc(${size} / 1.58)`};
    width: ${({ size }) => `calc(${size} / 1.58)`};
  }

  @media (${QUERIES.laptop}) {
    transform: translateX(-1.5rem);
    height: ${({ size }) => `${size}`};
    width: ${({ size }) => `${size}`};
  }
`;

export default Planet;

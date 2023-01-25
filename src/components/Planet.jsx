import { usePlanetFactsContext } from "../context/context";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../data/data.json";
import { QUERIES, PLANETS } from "../utils/variables";
import { motion } from "framer-motion";

const Planet = () => {
  const { currentTab } = usePlanetFactsContext();
  const { planetName } = useParams();
  const planets = data.find((planet) => planet.name === planetName);
  const model = PLANETS.find((planet) => planet.name === planetName);
  const { models, images } = planets;
  const { size } = model;

  return (
    <StyledPlanetContainer>
      <StyledModelContainer
        size={size}
        initial={{
          x: "5vw",
          opacity: 0,
        }}
        animate={{
          x: "0",
          transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 120,
          },
          opacity: 1,
        }}
        exit={{ x: "-5vw", opacity: 0, transition: { ease: "backOut" } }}
      >
        {currentTab !== "surface" && (
          <img
            src={
              currentTab === "overview"
                ? `${images.overview}`
                : `${images.structure}`
            }
            alt={planetName}
            style={{ width: "100%", height: "100%", color: "transparent" }}
          />
        )}
        {currentTab === "surface" && (
          <model-viewer
            id="reveal"
            style={{ width: "100%", height: "100%" }}
            alt={`A 3D model of the planet ${planetName}`}
            src={models.model}
            camera-controls
            auto-rotate
            ar
            ar-modes="webxr scene-viewer quick-look"
            environment-image="neutral"
            ar-placement="wall"
            ios-src={models.ios}
            poster={models.poster}
            loading="eager"
          >
            <div id="progress-bar" slot="progress-bar"></div>
          </model-viewer>
        )}
      </StyledModelContainer>
    </StyledPlanetContainer>
  );
};

const StyledPlanetContainer = styled.div`
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

const StyledModelContainer = styled(motion.div)`
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

export default Planet;

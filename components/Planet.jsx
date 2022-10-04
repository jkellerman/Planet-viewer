import { usePlanetFactsContext } from "../context/context";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import data from "../data/data.json";
import { QUERIES, PLANETS } from "../utils/variables";
import { motion } from "framer-motion";

const Planet = () => {
  const { currentTab } = usePlanetFactsContext();
  const router = useRouter();
  const { planet } = router.query;
  const planets = data.find((item) => item.name === planet);
  const model = PLANETS.find((item) => item.name === planet);
  const { models, images } = planets;
  const { size } = model;

  return (
    <StyledContainer>
      <StyledPlanetContainer
        size={size}
        initial={{ x: "5vw", opacity: 0 }}
        animate={{
          x: "0",
          opacity: 1,
          type: "spring",
          stiffness: 120,
          transition: { delay: 0.5 },
        }}
        exit={{ x: "-5vw", opacity: 0, transition: { ease: "backOut" } }}
      >
        {currentTab === "overview" && (
          <Image
            src={`${images.planet}`}
            alt={`${planet}`}
            layout="fill"
            objectFit="cover"
            unoptimized={true}
            priority={true}
          />
        )}
        {currentTab === "structure" && (
          <Image
            src={`${images.internal}`}
            alt={`${planet} internal structure`}
            layout="fill"
            objectFit="cover"
            unoptimized={true}
          />
        )}
        {currentTab === "surface" && (
          <model-viewer
            id="reveal"
            style={{ width: "100%", height: "100%" }}
            alt={`A 3D model of the planet ${planet}`}
            src={models.model}
            camera-controls
            auto-rotate
            ar
            ios-src={models.ios}
            poster={models.poster}
            loading="eager"
          >
            <div id="progress-bar" slot="progress-bar"></div>
          </model-viewer>
        )}
      </StyledPlanetContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
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

const StyledPlanetContainer = styled(motion.div)`
  height: ${({ size }) => `calc(${size} / 2.59)`};
  width: ${({ size }) => `calc(${size} / 2.59)`};
  position: relative;

  @media (${QUERIES.tablet}) {
    height: ${({ size }) => `calc(${size} / 1.57)`};
    width: ${({ size }) => `calc(${size} / 1.57)`};
  }

  @media (${QUERIES.laptop}) {
    height: ${({ size }) => `${size}`};
    width: ${({ size }) => `${size}`};
  }
`;

export default Planet;

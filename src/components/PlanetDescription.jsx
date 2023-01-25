import { usePlanetFactsContext } from "../context/context";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../data/data.json";
import { COLORS, FONTWEIGHT, QUERIES } from "../utils/variables";
import { motion } from "framer-motion";

const PlanetDescription = () => {
  const { currentTab } = usePlanetFactsContext();
  const { planetName } = useParams();
  const planets = data.find((planet) => planet.name === planetName);
  const { overview, structure, geology } = planets;

  return (
    <StyledPlanetDescriptionContainer>
      <StyledName
        initial={{ y: "5vw", opacity: 0 }}
        animate={{
          y: "0",
          opacity: 1,
          transition: { delay: 1 },
          type: "spring",
          stiffness: 500,
        }}
        exit={{ opacity: 0 }}
      >
        {planetName}
      </StyledName>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
        exit={{ opacity: 0 }}
      >
        <p>
          {currentTab === "overview"
            ? overview.content
            : currentTab === "structure"
            ? structure.content
            : geology.content}
        </p>
        <StyledSource>
          <span>source :&nbsp;</span>
          <a
            href={
              currentTab === "overview"
                ? overview.source
                : currentTab === "structure"
                ? structure.source
                : geology.source
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            wikipedia
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path
              fill="#FFF"
              d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
              opacity=".5"
            />
          </svg>
        </StyledSource>
      </motion.div>
    </StyledPlanetDescriptionContainer>
  );
};

const StyledPlanetDescriptionContainer = styled.div`
  text-align: center;
  margin-bottom: 1.75rem;
  font-size: 0.85rem;

  @media (${QUERIES.tablet}) {
    text-align: start;
  }

  @media (${QUERIES.laptop}) {
    font-size: 1rem;
    grid-area: 1 / 3;
    grid-row: 1 / span 2;
    align-self: center;
    transform: translateY(-2rem);
    max-width: 350px;
  }

  p {
    width: 84%;
    margin: 0 auto;
    line-height: 22px;
    margin-bottom: 2rem;

    @media (${QUERIES.mobileL}) {
      width: 80%;
    }

    @media (${QUERIES.tablet}) {
      margin: 0 0 2rem;
      height: 110px;
    }

    @media (${QUERIES.laptop}) {
      width: 95%;
      height: 154px;
      margin: 0;
    }
  }
`;

const StyledSource = styled.div`
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

  span,
  a {
    text-transform: capitalize;
    color: ${COLORS.secondary};
    font-weight: ${FONTWEIGHT.bold};
  }

  span {
    font-weight: ${FONTWEIGHT.regular};
  }
`;

const StyledName = styled(motion.h1)`
  font-size: 2.5rem;
  text-transform: uppercase;
  margin-bottom: 1rem;

  @media (${QUERIES.tablet}) {
    font-size: 3rem;
  }

  @media (${QUERIES.laptop}) {
    font-size: 5rem;
    transform: translateX(-0.2rem);
  }
`;

export default PlanetDescription;

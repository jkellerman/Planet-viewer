import { usePlanetFactsContext } from "../context/context";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../data/data.json";
import { QUERIES } from "../utils/variables";

const Planet = () => {
  const { currentTab } = usePlanetFactsContext();
  const { planetName } = useParams();
  const planets = data.find((planet) => planet.name === planetName);
  const { images, name } = planets;

  return (
    <PlanetContainer>
      {currentTab === "overview" && (
        <StyledImg src={images.planet} alt={`planet ${name}`} />
      )}
      {currentTab === "structure" && (
        <StyledImg
          src={images.internal}
          alt={`internal structure of planet ${name}`}
        />
      )}
    </PlanetContainer>
  );
};

const PlanetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 305px;

  @media (${QUERIES.tablet}) {
    grid-column: 1 / span 2;
    width: unset;
    min-height: 422.781px;
  }

  @media (${QUERIES.laptop}) {
    grid-row: 1 / span 3;
    min-height: unset;
  }
`;

const StyledImg = styled.img`
  transform: scale(0.3);

  @media (${QUERIES.tablet}) {
    transform: unset;
    width: calc(100% / 1.58);
  }

  @media (${QUERIES.laptop}) {
    width: 100%;
    transform: translateX(-1.5rem);
  }
`;

export default Planet;

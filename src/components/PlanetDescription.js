import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../data/data.json";
import { COLORS, FONTWEIGHT, QUERIES } from "../utils/variables";

const PlanetDescription = () => {
  const { planetName } = useParams();
  const planets = data.find((planet) => planet.name === planetName);
  const { overview } = planets;
  return (
    <PlanetDescriptionContainer>
      <Name>{planetName}</Name>
      <p>{overview.content}</p>
      <Source>
        <span>source :&nbsp;</span>
        <a href={overview.source} target="_blank" rel="noopener noreferrer">
          wikipedia
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
          <path
            fill="#FFF"
            d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
            opacity=".5"
          />
        </svg>
      </Source>
    </PlanetDescriptionContainer>
  );
};

const PlanetDescriptionContainer = styled.div`
  text-align: center;
  margin-bottom: 1.75rem;
  font-size: 0.6875rem;

  @media (${QUERIES.laptop}) {
    font-size: 0.875rem;
  }

  p {
    width: 84%;
    margin: 0 auto;
    line-height: 22px;
    margin-bottom: 2rem;
  }
`;

const Source = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

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

const Name = styled.h1`
  font-size: 2.5rem;
  text-transform: uppercase;
  margin-bottom: 1rem;

  @media (${QUERIES.tablet}) {
    font-size: 3rem;
  }

  @media (${QUERIES.laptop}) {
    font-size: 5rem;
  }
`;

export default PlanetDescription;

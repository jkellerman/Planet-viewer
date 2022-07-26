import styled from "styled-components";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import { COLORS, FONTWEIGHT, QUERIES } from "../utils/variables";
import {
  centerDiv,
  flexColumnSpaceBetween,
  flexRowSpaceBetween,
  setupBorder,
} from "../utils/helpers";

const PlanetData = () => {
  const { planetName } = useParams();
  const planets = data.find((planet) => planet.name === planetName);
  const { rotation, revolution, radius, temperature } = planets;
  return (
    <List>
      <ListContainer>
        <Title>rotation time</Title>
        <Data>{rotation}</Data>
      </ListContainer>
      <ListContainer>
        <Title>revolution time</Title>
        <Data>{revolution}</Data>
      </ListContainer>
      <ListContainer>
        <Title>radius</Title>
        <Data>{radius}</Data>
      </ListContainer>
      <ListContainer>
        <Title>average temp.</Title>
        <Data>{temperature}</Data>
      </ListContainer>
    </List>
  );
};

const List = styled.dl`
  ${centerDiv}
  ${flexColumnSpaceBetween}
  gap: .5rem;
  text-transform: uppercase;
  margin-bottom: 3rem;

  @media (${QUERIES.tablet}) {
    ${flexRowSpaceBetween}
    gap: 0;
  }

  @media (${QUERIES.laptop}) {
    max-width: 1110px;
    transform: translateX(-0.55rem);
  }
`;

const ListContainer = styled.div`
  border: ${setupBorder({})};
  padding: 1rem 1.5rem;
  ${flexRowSpaceBetween}

  @media (${QUERIES.tablet}) {
    ${flexColumnSpaceBetween}
    padding: 1rem 1rem;
    align-items: flex-start;
    min-width: 24%;
  }
`;

const Title = styled.dt`
  color: ${COLORS.secondary};
  font-size: 0.5rem;
  letter-spacing: 0.73px;
  font-weight: ${FONTWEIGHT.bold};

  @media (${QUERIES.laptop}) {
    font-size: 0.6875rem;
    margin-bottom: 0.875rem;
  }
`;
const Data = styled.dd`
  font-size: 1.25rem;

  @media (${QUERIES.tablet}) {
    font-size: 1.5rem;
  }

  @media (${QUERIES.laptop}) {
    font-size: 2.5rem;
  }
`;

export default PlanetData;

import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../data/data.json";

const Planet = () => {
  const { planetName } = useParams();
  const planets = data.find((planet) => planet.name === planetName);
  const { images, name } = planets;
  return (
    <PlanetContainer>
      <StyledImg src={images.planet} alt={`planet ${name}`} />
    </PlanetContainer>
  );
};

const PlanetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 305px;
`;

const StyledImg = styled.img`
  transform: scale(0.3);
`;

export default Planet;

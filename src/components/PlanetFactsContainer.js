import styled from "styled-components";
import Tabs from "./Tabs";
import Planet from "./Planet";
import PlanetDescription from "./PlanetDescription";
import { QUERIES } from "../utils/variables";

const PlanetFactsContainer = () => {
  return (
    <main>
      <Container>
        <Tabs />
        <Planet />
        <PlanetDescription />
      </Container>
    </main>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (${QUERIES.tablet}) {
    display: grid;
    justify-items: center;
    align-items: center;
    width: 90%;
    margin: 1.6875rem auto;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (${QUERIES.laptop}) {
    max-width: 1110px;
    min-height: 668px;
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 150px 1fr 150px;
  }

  @media (${QUERIES.desktop}) {
    margin-top: 2.5rem;
  }
`;

export default PlanetFactsContainer;

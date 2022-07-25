import styled from "styled-components";
import Tabs from "./Tabs";
import Planet from "./Planet";
import PlanetDescription from "./PlanetDescription";

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
`;

export default PlanetFactsContainer;

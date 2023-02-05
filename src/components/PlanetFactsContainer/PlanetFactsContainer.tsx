import React from "react";
import Tabs from "../Tabs/Tabs";
import Planet from "../Planet/Planet";
import PlanetDescription from "../PlanetDescription/PlanetDescription";
import PlanetData from "../PlanetData/PlanetData";

import * as S from "./PlanetFactsContainer.styled";

const PlanetFactsContainer: React.FC = () => {
  return (
    <main>
      <S.Container>
        <Tabs />
        <Planet />
        <PlanetDescription />
      </S.Container>
      <PlanetData />
    </main>
  );
};

export default PlanetFactsContainer;

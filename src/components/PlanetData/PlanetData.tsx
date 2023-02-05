import { useParams } from "react-router-dom";
import { PLANETS } from "../../data/data";

import * as S from "./PlanetData.styled";

const PlanetData = () => {
  const { planetName } = useParams();
  const planet = PLANETS.find((planet) => planet.name === planetName);

  const DATA = [
    { id: 1, name: "rotation time ", data: planet?.rotation },
    { id: 2, name: "revolution time", data: planet?.revolution },
    { id: 3, name: "radius", data: planet?.radius },
    { id: 4, name: "average temp", data: planet?.temperature },
  ];

  return (
    <S.List>
      {DATA.map((item) => {
        const { id, name, data } = item;
        return (
          <S.ListContainer key={id}>
            <S.Title>{name}</S.Title>
            <S.Data
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
              exit={{ opacity: 0 }}
            >
              {data}
            </S.Data>
          </S.ListContainer>
        );
      })}
    </S.List>
  );
};

export default PlanetData;

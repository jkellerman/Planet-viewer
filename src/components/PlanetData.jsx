import styled from "styled-components";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import { COLORS, FONTWEIGHT, QUERIES } from "../utils/variables";
import {
  centerDiv,
  flexColumnSpaceBetween,
  flexRowSpaceBetween,
  setupBorder,
} from "../utils/snippets";
import { motion } from "framer-motion";

const PlanetData = () => {
  const { planetName } = useParams();
  const planets = data.find((planet) => planet.name === planetName);
  const { rotation, revolution, radius, temperature } = planets;

  const DATA = [
    { id: 1, name: "rotation time ", data: rotation },
    { id: 2, name: "revolution time", data: revolution },
    { id: 3, name: "radius", data: radius },
    { id: 4, name: "average temp", data: temperature },
  ];

  return (
    <StyledList>
      {DATA.map((item) => {
        const { id, name, data } = item;
        return (
          <StyledListContainer key={id}>
            <StyledTitle>{name}</StyledTitle>
            <StyledData
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
              exit={{ opacity: 0 }}
            >
              {data}
            </StyledData>
          </StyledListContainer>
        );
      })}
    </StyledList>
  );
};

const StyledList = styled.dl`
  ${centerDiv}
  ${flexColumnSpaceBetween}
  gap: .5rem;
  text-transform: uppercase;
  margin-bottom: 3rem;

  @media (${QUERIES.mobileL}) {
    width: 80%;
  }

  @media (${QUERIES.tablet}) {
    width: 90%;
    ${flexRowSpaceBetween}
    gap: 0;
  }
  @media (${QUERIES.tabletL}) {
    width: 80%;
  }

  @media (${QUERIES.laptop}) {
    width: 90%;
    max-width: 1110px;
    transform: translateX(-0.55rem);
  }
`;

const StyledListContainer = styled.div`
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

const StyledTitle = styled.dt`
  @media (${QUERIES.mobileS}) {
    font-size: 0.675rem;
  }

  color: ${COLORS.secondary};
  font-size: 0.75rem;
  letter-spacing: 0.73px;
  font-weight: ${FONTWEIGHT.bold};

  @media (${QUERIES.laptop}) {
    margin-bottom: 0.875rem;
  }
`;
const StyledData = styled(motion.dd)`
  font-size: 1.25rem;

  @media (${QUERIES.tablet}) {
    font-size: 1.5rem;
  }

  @media (${QUERIES.laptop}) {
    font-size: 2.5rem;
  }
`;

export default PlanetData;

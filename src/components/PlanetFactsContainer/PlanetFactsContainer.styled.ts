import styled from "styled-components";

import { QUERIES } from "../../styles/mediaQueries";

export const Container = styled.div`
  display: grid;

  @media (${QUERIES.tablet}) {
    justify-items: center;
    align-items: center;
    width: 90%;
    margin: 1.6875rem auto 0;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (${QUERIES.tabletL}) {
    width: 80%;
  }

  @media (${QUERIES.laptop}) {
    width: 90%;
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

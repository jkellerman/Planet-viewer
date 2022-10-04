import Head from "next/head";
import { PLANETS } from "../../utils/variables";
import Navigation from "../../components/Navigation";
import Tabs from "../../components/Tabs";
import Planet from "../../components/Planet";
import PlanetDescription from "../../components/PlanetDescription";
import PlanetData from "../../components/PlanetData";
import styled from "styled-components";
import { QUERIES } from "../../utils/variables";

const planet = ({ planet }) => {
  return (
    <>
      <Head>
        <title>{`Planet Viewer | ${planet}`}</title>
      </Head>
      <>
        <Navigation />
        <StyledContainer>
          <Tabs />
          <Planet />
          <PlanetDescription />
        </StyledContainer>
        <PlanetData />
      </>
    </>
  );
};

export default planet;

const StyledContainer = styled.div`
  display: grid;

  @media (${QUERIES.tablet}) {
    justify-items: center;
    align-items: center;
    width: 90%;
    margin: 1.6875rem auto;
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

export async function getStaticPaths() {
  const paths = PLANETS.map((planet) => {
    return {
      params: { planet: planet.name },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const planet = params.planet;

  return {
    props: {
      planet,
    },
  };
}

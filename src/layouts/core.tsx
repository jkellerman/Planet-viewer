import Navigation from "../components/Navigation/Navigation";
import PlanetFactsContainer from "../components/PlanetFactsContainer/PlanetFactsContainer";

const Core = () => {
  return (
    <>
      <Navigation $isNavOpen />
      <PlanetFactsContainer />
    </>
  );
};

export default Core;

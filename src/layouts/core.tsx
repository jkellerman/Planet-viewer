import Navigation from "../components/Navigation/Navigation";
import PlanetFactsContainer from "../components/PlanetFactsContainer/PlanetFactsContainer";
import StarField from "../components/Starfield/Starfield";

const Core = () => {
  return (
    <>
      <StarField />
      <Navigation $isNavOpen />
      <PlanetFactsContainer />
    </>
  );
};

export default Core;

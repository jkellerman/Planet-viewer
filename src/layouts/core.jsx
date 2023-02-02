import Navigation from "../components/Navigation";
import PlanetFactsContainer from "../components/PlanetFactsContainer";
import StarField from "../components/Starfield";

const Core = () => {
  return (
    <>
      <StarField />
      <Navigation />
      <PlanetFactsContainer />
    </>
  );
};

export default Core;

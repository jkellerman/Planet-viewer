import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import GlobalStyles from "./styles/globals";
import PlanetPage from "./layouts/core";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/planet/mercury" />} />
          <Route path="planet/:planetName" element={<PlanetPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;

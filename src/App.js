import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyles from "./styles/global-styles";
import PlanetPage from "./pages/PlanetPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/planet/earth" />} />
          <Route path="planet/:planetName" element={<PlanetPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import GlobalStyles from "./styles/global-styles";
import PlanetPage from "./pages/PlanetPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/planet/mercury" />} />
          <Route path="planet/:planetName" element={<PlanetPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

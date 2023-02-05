import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ActiveTabProvider } from "./contexts/activeTab";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ActiveTabProvider>
      <Router>
        <App />
      </Router>
    </ActiveTabProvider>
  </React.StrictMode>
);

import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import PageHome from "./pages/PageHome";
import CssBaseline from "@mui/material/CssBaseline";
import routes from "./routes";
import "./styles.css";

const components = {
  home: PageHome,
};

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <div>
          <Navigation />

          <p>React router + TypeScript issue (dummy code)</p>

          <Routes>
            {routes.map((route) => {
              return (
                <Route
                  path={route.path}
                  element={components[route.component]}
                />
              );
            })}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}

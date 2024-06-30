import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TransAllianceLogoGif from "/src/assets/images/TransAllianceLogoGif.gif";

// Import views using lazy loading
const LandingPage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Suspense
                fallback={
                  <div className="flex items-center justify-center h-[100vh]">
                    <img src={TransAllianceLogoGif} alt="trans-allianceLogo" />
                  </div>
                }
              >
                <LandingPage />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

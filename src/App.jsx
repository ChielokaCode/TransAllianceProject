import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import views using lazy loading
const LandingPage = lazy(() => import("./pages/LandingPage"));

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
                    Loading...
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

import React from "react";
import NavBar from "../views/navbar/NavBar"; // Correct import statement
import OverlapImages from "../components/OverlapImages";
import HeroGrid from "../components/HeroGrid";
import OverlapTwoScreens from "../components/OverlapTwoScreens";
import AboutUs from "../components/AboutUs";

const LandingPage = () => {
  return (
    <>
      <div className="bg-[#122038] w-full h-screen relative">
        {/* NavBar positioned at the top */}
        <NavBar />

        {/* Overlapping Images */}
        <OverlapImages />

        {/* Main content */}
        <HeroGrid />
      </div>

      {/* Overlap Two Screens */}
      <OverlapTwoScreens />

      {/* Second Screen */}
      <div className="bg-gray-200 w-full h-screen relative ">
        {/* Additional content for the second section */}
        <AboutUs />
      </div>
      <div className="bg-gray-200 w-full h-screen relative">
        {/* Additional content for the second section */}
      </div>
    </>
  );
};

export default LandingPage;

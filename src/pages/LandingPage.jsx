import React from "react";
import NavBar from "../views/navbar/NavBar"; // Correct import statement
import OverlapImages from "../components/OverlapImages";
import HeroGrid from "../components/HeroGrid";
import OverlapTwoScreens from "../components/OverlapTwoScreens";
import AboutUs from "../components/AboutUs";
import OurService from "../components/OurService";

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
      <div className="bg-gray-200 w-full h-[200vh] relative space-y-3 pr-4 pl-4 z-10 ">
        {/* Additional content for the second section */}
        <AboutUs />
      </div>
      <div className="bg-gray-100 w-full h-[200vh] relative space-y-3 pr-4 pl-4 ">
        {/* Additional content for the second section */}
        <OurService />
      </div>
    </>
  );
};

export default LandingPage;

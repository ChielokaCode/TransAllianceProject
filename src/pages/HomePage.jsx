import React from "react";
import NavBar from "../views/navbar/NavBar"; // Correct import statement
import OverlapImages from "../views/overlapImages/OverlapImages";
import HeroGrid from "../views/hero/HeroGrid";
import OverlapTwoScreens from "../views/overlapImages/OverlapTwoScreens";
import AboutUs from "../views/AboutUs";
import OurService from "../views/OurService";
import Sectors from "../views/Sectors";
import SpeakToSales from "../views/SpeakToSales";
import FooterComponent from "../views/FooterComponent";

const HomePage = () => {
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

      {/* About Us */}
      <div className="bg-gray-200 w-full h-[200vh] relative space-y-3 pr-4 pl-4 z-20 ">
        <AboutUs />
      </div>
      {/* Our Service */}
      <div className="bg-gray-100 w-full h-[200vh] relative space-y-3 pr-4 pl-4 z-10">
        <OurService />
      </div>
      {/* Sectors we Serve */}
      <div className="bg-gray-100 w-full h-[200vh] relative space-y-3 pr-4 pl-4 ">
        <Sectors />
      </div>
      {/* Speak to Sales */}
      <div className="bg-gray-100 w-full h-[100vh] relative space-y-3 pr-4 pl-4 ">
        <SpeakToSales />
      </div>

      {/* Footer */}
      <div className="bg-gray-100 w-full h-[50vh] relative space-y-3 pr-4 pl-4 ">
        <FooterComponent />
      </div>
    </>
  );
};

export default HomePage;

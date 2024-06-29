import React from "react";
import NavBar from "../views/navbar/NavBar"; // Correct import statement
import OverlapImages from "../components/OverlapImages";
import HeroGrid from "../components/HeroGrid";
import OverlapTwoScreens from "../components/OverlapTwoScreens";
import AboutUs from "../components/AboutUs";
import OurService from "../components/OurService";
import Sectors from "../components/Sectors";
import SpeakToSales from "../components/SpeakToSales";
import Footer from "../components/Footer";

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
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;

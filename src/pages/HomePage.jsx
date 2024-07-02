import React from "react";
import NavBar from "../views/navbar/NavBar";
import OverlapImages from "../views/overlapImages/OverlapImages";
import HeroGrid from "../views/hero/HeroGrid";
import OverlapTwoScreens from "../views/overlapImages/OverlapTwoScreens";
import AboutUs from "../views/AboutUs";
import OurService from "../views/OurService";
import Sectors from "../views/Sectors";
import SpeakToSales from "../views/SpeakToSales";
import FooterComponent from "../views/FooterComponent";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="bg-[#122038] w-[100vw] h-screen relative">
        <NavBar />
        <OverlapImages />
        <HeroGrid />
      </div>

      <OverlapTwoScreens />

      <div className="bg-gray-200 w-full md:h-[200vh] h-[250vh] relative space-y-3 px-4 z-20">
        <AboutUs />
      </div>

      <div className="bg-gray-100 w-full h-[200vh] relative space-y-3 px-4 z-10">
        <OurService />
      </div>

      <div className="bg-gray-100 w-full md:h-[200vh] h-[220vh] relative space-y-3 px-4">
        <Sectors />
      </div>

      <div className="bg-gray-100 w-full md:h-[100vh] h-[150vh] relative space-y-3 px-4">
        <SpeakToSales />
      </div>

      <div className="bg-gray-100 w-full h-[50vh] relative space-y-3 px-4">
        <FooterComponent />
      </div>
    </>
  );
};

export default HomePage;

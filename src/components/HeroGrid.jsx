import React from "react";
import LeftHandHero from "./LeftHandHero";
import RightHandHero from "./RightHandHero";

const HeroGrid = () => {
  return (
    <div className="absolute grid grid-cols-2 gap-4 p-4 h-[70vh] w-[80vw] top-[50%] left-[55%] transform -translate-x-1/2 -translate-y-1/2">
      <LeftHandHero />
      <RightHandHero />
    </div>
  );
};

export default HeroGrid;

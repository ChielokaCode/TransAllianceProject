import React from "react";
import FirstImage from "./images/firstImage.png";
import ImageCard from "./ImageCard";

const RightHandHero = () => {
  return (
    <>
      <div className="relative flex items-center justify-center h-full z-20">
        {/* <img
          src={FirstImage}
          alt="First"
          className="w-[350px] h-[350px] object-cover"
        />
        <div className="absolute top-[20%] left-[0] bg-white p-4 shadow-lg opacity-80 rounded-xl font-dm-sans font-bold px-2 py-3">
           Add your content here 
          24/7, 365 transaction tracking
        </div> 
        */}
        <ImageCard
          bgImage={FirstImage}
          altText="24/7, 365 transaction tracking"
          divPositionTop="25%"
          divPositionLeft="-25%"
          imageWidth="350px"
          imageHeight="350px"
        />
      </div>
    </>
  );
};

export default RightHandHero;

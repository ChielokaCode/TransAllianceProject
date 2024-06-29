import React from "react";
import yellowUpEllipse from "/src/assets/images/yellowEllipseBlur.png";
import yellowDownEllipse from "/src/assets/images/yellowDownEllipse.png";
import blurDots from "/src/assets/images/blurDots.png";
import TravelDown from "/src/assets/images/TravelDown.png";
import LineSlant from "/src/assets/images/lineSlant.png";
import VectorLeft from "/src/assets/images/VectorLeft.png";
import ArrowRightCircle from "/src/assets/images/ArrowRightCircle.png";

const OverlapImages = () => {
  return (
    <>
      {/* Overlapping images */}
      <div className="absolute top-0 left-0">
        <img
          className="h-screen"
          src={yellowUpEllipse}
          alt="Yellow Up Ellipse"
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <img
          className="w-screen"
          src={yellowDownEllipse}
          alt="Yellow Down Ellipse"
        />
      </div>
      <div className="absolute bottom-0 left-0">
        <img className="w-screen" src={blurDots} alt="Blur Dots" />
      </div>

      {/* Travel Image with Overlapping Discover More */}
      <div className="absolute bottom-0 left-0 bg-green-300 bg-opacity-60 rounded-tr-[50px]">
        <img className="w-[800px] h-[200px]" src={TravelDown} alt="" />
        <div className="absolute grid grid-cols-2 items-center top-[-17%] left-1/2 transform -translate-x-1/2 bg-[#8A8A8A] font-dm-sans font-bold bg-opacity-70 p-4 shadow-lg rounded-lg w-[300px] border-l-[1px] border-t-[1px] border-white backdrop-blur-sm">
          <h2 className="text-white">Discover More</h2>
          <img className="w-6 h-6 ml-20" src={ArrowRightCircle} alt="" />
        </div>
        {/* Green Line Slant */}
        <div className="absolute top-[-40%] right-[-17%]">
          <img className="w-36" src={LineSlant} alt="" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 ">
        <img className="w-96" src={VectorLeft} alt="" />
      </div>
    </>
  );
};

export default OverlapImages;

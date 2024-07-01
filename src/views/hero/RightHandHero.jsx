import React from "react";
import FirstImage from "/src/assets/images/firstImage.png";
import ImageCard from "../../components/ImageCard";

const RightHandHero = () => {
  return (
    <>
      <div className="relative md:flex items-center justify-center h-full z-20 hidden">
        <ImageCard
          bgImage={FirstImage}
          className="md:w-[300px] md:h-[300px] w-[200px] h-[200px]"
          altText="24/7, 365 transaction tracking"
          altTextSize="14px"
          divPositionTop="25%"
          divPositionLeft="-25%"
          divPaddingTop="15px"
          divPaddingBottom="15px"
        />
      </div>
    </>
  );
};

export default RightHandHero;

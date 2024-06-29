import React from "react";
import FirstImage from "/src/assets/images/firstImage.png";
import ImageCard from "../../components/ImageCard";

const RightHandHero = () => {
  return (
    <>
      <div className="relative flex items-center justify-center h-full z-20">
        <ImageCard
          bgImage={FirstImage}
          bgImageHeight="350px"
          bgImageWidth="350px"
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

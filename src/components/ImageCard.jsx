import React from "react";

const ImageCard = ({
  bgImage,
  fgImage,
  altText,
  divPositionTop,
  divPositionLeft,
  imageWidth,
  imageHeight,
  imagePositionTop,
  imagePositionLeft,
}) => (
  <div className="relative flex items-center justify-center h-full z-20">
    <img src={bgImage} alt={altText} className="relative w-[300px] h-[300px]" />
    {fgImage && (
      <img
        src={fgImage}
        alt={altText}
        className="object-contain absolute"
        style={{
          top: imagePositionTop,
          left: imagePositionLeft,
          width: imageWidth,
          height: imageHeight,
        }}
      />
    )}
    <div
      className="absolute bg-white p-4 backdrop-blur-sm bg-opacity-50 rounded-xl font-dm-sans font-bold px-2 py-3"
      style={{
        top: divPositionTop,
        left: divPositionLeft,
      }}
    >
      {altText}
    </div>
  </div>
);

export default ImageCard;

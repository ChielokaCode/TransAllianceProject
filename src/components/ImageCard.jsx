import React from "react";

const ImageCard = ({
  bgImage,
  fgImage,
  altText,
  altTextSize,
  divPositionTop,
  divPositionLeft,
  divPaddingTop,
  divPaddingBottom,
  divWidth,
  fgImageWidth,
  fgImageHeight,
  bgImageWidth,
  bgImageHeight,
  buttonText,
  buttonImg,
  isLearnMore,
  imagePositionTop,
  imagePositionLeft,
}) => (
  <div className="relative flex items-center justify-center h-full z-20">
    <img
      src={bgImage}
      alt={altText}
      style={{ width: bgImageWidth, height: bgImageHeight }}
      className="relative"
    />
    {fgImage && (
      <img
        src={fgImage}
        alt={altText}
        className="object-contain absolute"
        style={{
          top: imagePositionTop,
          left: imagePositionLeft,
          width: fgImageWidth,
          height: fgImageHeight,
        }}
      />
    )}
    <div
      className="absolute bg-white backdrop-blur-sm bg-opacity-50 rounded-xl font-dm-sans font-bold px-2"
      style={{
        top: divPositionTop,
        left: divPositionLeft,
        width: divWidth,
        paddingTop: divPaddingTop,
        paddingBottom: divPaddingBottom,
      }}
    >
      <h2
        className="font-dm-sans"
        style={{ fontWeight: "500", fontSize: altTextSize }}
      >
        {altText}
      </h2>
      <div className="grid grid-cols-2">
        <h2 className="font-dm-sans text-sm font-light">{buttonText}</h2>
        {isLearnMore ? (
          <img className="w-6 h-6 ml-1" src={buttonImg} alt=" " />
        ) : (
          ""
        )}
      </div>
    </div>
  </div>
);

export default ImageCard;

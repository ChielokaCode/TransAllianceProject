import React from "react";
import { Link } from "react-router-dom";

const ImageCard = ({
  className,
  bgImage,
  fgImage,
  altText,
  divTextClassName,
  divClassName,
  fgClassName,
  buttonText,
  buttonImg,
  isLearnMore,
  hrefPath,
}) => (
  <div
    className={`relative flex items-center justify-center h-full z-20 transform transition-transform duration-300 hover:scale-105 ${className}`}
  >
    <img src={bgImage} alt={altText} className="relative" />
    {fgImage && (
      <img
        src={fgImage}
        alt={altText}
        className={`object-contain absolute ${fgClassName}`}
      />
    )}
    <div
      className={`absolute bg-white backdrop-blur-sm bg-opacity-50 rounded-xl font-dm-sans font-bold px-2 transform transition-transform duration-300 hover:scale-105 ${divClassName}`}
    >
      <h2
        className={`font-dm-sans ${divTextClassName}`}
        style={{ fontWeight: "500" }}
      >
        {altText}
      </h2>
      <div className="grid grid-cols-2">
        <Link to={hrefPath} className="font-dm-sans text-sm font-light">
          {buttonText}
        </Link>
        {isLearnMore ? (
          <Link to={hrefPath}>
            <img className="w-6 h-6 ml-1" src={buttonImg} alt=" " />
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  </div>
);

export default ImageCard;

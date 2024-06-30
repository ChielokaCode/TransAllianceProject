import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  backgroundGradient,
  width,
  height,
  imgSrc,
  text,
  fontSize,
  buttonBorderRadius,
  hrefPath,
  onClick,
}) => {
  return (
    <div
      className="flex items-center justify-center p-3 cursor-pointer transform transition-transform duration-300 hover:scale-105"
      style={{
        background: backgroundGradient,
        width: width,
        height: height,
        borderRadius: buttonBorderRadius,
      }}
      onClick={onClick}
    >
      <span
        className="text-black font-bold text-center"
        style={{ fontSize: fontSize }}
      >
        <Link to={hrefPath} className="flex items-center justify-center">
          {text}
          <img src={imgSrc} alt="" className="w-6 h-6 ml-2" />
        </Link>
      </span>
    </div>
  );
};

export default Button;

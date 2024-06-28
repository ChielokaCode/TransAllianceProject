import React from "react";

const Button = ({
  backgroundGradient,
  width,
  height,
  imgSrc,
  text,
  fontSize,
  buttonBorderRadius,
  onClick,
}) => {
  return (
    <div
      className="flex items-center justify-center p-3 cursor-pointer"
      style={{
        background: backgroundGradient,
        width: width,
        height: height,
        borderRadius: buttonBorderRadius,
      }}
      onClick={onClick}
    >
      <div className="flex items-center justify-between w-full">
        <span
          className="text-black font-bold text-center"
          style={{ fontSize: fontSize }}
        >
          {text}
        </span>
        <img src={imgSrc} alt="" className="w-6 h-6 ml-auto" />
      </div>
    </div>
  );
};

export default Button;

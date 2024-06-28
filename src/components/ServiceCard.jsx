import React from "react";

const ServiceCard = ({ headlineText, bodyText, imgSrc }) => {
  return (
    <>
      <div className="grid grid-rows space-y-2 max-w-xs mb-4 mt-4">
        <div className="relative w-10 h-10 rounded-md bg-[#5AAF87]">
          <img
            className="absolute w-8 h-8 top-[10%] left-[10%]"
            src={imgSrc}
            alt=""
          />
        </div>
        <h2 className="font-dm-sans font-bold">{headlineText}</h2>
        <p className="font-dm-sans text-[#757575] text-sm max-w-xs">
          {bodyText}
        </p>
      </div>
    </>
  );
};

export default ServiceCard;

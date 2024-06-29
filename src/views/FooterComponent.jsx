import React from "react";
import Button from "../components/Button";
import LightGreenArrowCircle from "/src/assets/images/LightGreenArrowCircle.png";
import TransLogoFooter from "/src/assets/images/transLogo.png";

const FooterComponent = () => {
  const handleContactUs = () => {
    // contact us
  };

  return (
    <div className="absolute top-[0%] left-[0] w-screen h-[50vh] pt-14 px-32 text-center grid grid-cols-5 bg-white text-black">
      <div className="grid grid-rows-2 gap-y-10 h-fit">
        <div className="flex items-center space-x-2 h-fit">
          <img className="w-14 h-14" src={TransLogoFooter} alt="" />
          <p className="text-sm font-light font-dm-sans mt-4">
            Transalliance Group.
          </p>
        </div>
        <div>
          <Button
            backgroundGradient="linear-gradient(264.61deg, #24343E -97.02%, #5AAF87 133.21%)"
            width="160px"
            height="50px"
            buttonBorderRadius="10px"
            imgSrc={LightGreenArrowCircle}
            text="Contact Us"
            fontSize="16px"
            onClick={handleContactUs}
          />
        </div>
      </div>
      <div className="grid grid-rows space-y-4 font-dm-sans text-left h-fit ml-4">
        <h2 className="font-semibold">Offices</h2>
        <h4 className="text-sm max-w-sm">
          Denmark:Toldbodgade 55B1253, Copenhagen United Kingdom:
        </h4>
        <h4 className="max-w-sm">
          1 Poultry EC2R 8EJ, London info@inpay.com
          <br />
          Phone: +45 88 610 600
        </h4>
      </div>
      <div className="grid grid-rows space-y-2 text-left"></div>
      <div className="grid grid-rows space-y-2 text-left"></div>
      <div className="grid grid-rows space-y-2 text-left"></div>
    </div>
  );
};

export default FooterComponent;

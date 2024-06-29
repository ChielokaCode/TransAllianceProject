import React from "react";
import Button from "../components/Button";
import LightGreenArrowCircle from "/src/assets/images/LightGreenArrowCircle.png";
import TransLogoFooterDark from "/src/assets/images/TransLogoFooterDark.png";
import FacebookIcon from "/src/assets/images/FacebookLogo.png";
import TwitterIcon from "/src/assets/images/TwitterLogo.png";
import InstagramIcon from "/src/assets/images/InstagramLogo.png";
import FooterBlur from "/src/assets/images/FooterBlur.png";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <>
      <div className="absolute top-[0%] left-[0] w-screen h-[70vh] pt-14 px-32 text-center grid grid-cols-5 bg-white text-black">
        <div className="grid grid-rows-2 gap-y-10 h-fit">
          <div className="flex items-center space-x-2 h-fit">
            <img className="w-14 h-14" src={TransLogoFooterDark} alt="" />
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
              hrefPath="/#"
            />
          </div>
        </div>
        <div className="grid grid-rows space-y-4 max-w-32 font-dm-sans text-left h-fit ml-4">
          <h2 className="font-semibold">Offices</h2>
          <h4 className="text-xs font-light">
            Denmark:
            <br />
            Toldbodgade 55B
            <br />
            1253, Copenhagen United Kingdom:
          </h4>
          <h4 className="text-xs max-w-sm font-light">
            1 Poultry EC2R 8EJ, London info@inpay.com
            <br />
            Phone: +45 88 610 600
          </h4>
        </div>
        <div className="grid grid-rows space-y-4 font-dm-sans text-left h-fit ml-4">
          <h2 className="font-semibold">Solutions</h2>
          <Link to={"#"} className="">
            Money Out
          </Link>
          <Link to={"#"} className="">
            Money In
          </Link>
        </div>
        <div className="grid grid-rows space-y-4 font-dm-sans text-left h-fit ml-4">
          <h2 className="font-semibold">Sectors</h2>
          <Link to={"#"} className="">
            Financial Services
          </Link>
          <Link to={"#"} className="">
            iGaming
          </Link>
          <Link to={"#"} className="">
            Corporates
          </Link>
          <Link to={"#"} className="">
            NGOs
          </Link>
        </div>
        <div className="grid grid-rows space-y-4 font-dm-sans text-left h-fit ml-4">
          <h2 className="font-semibold">Others</h2>
          <Link to={"#"} className="">
            About Us
          </Link>
          <Link to={"#"} className="">
            News & Insights
          </Link>
          <Link to={"#"} className="">
            Compliance
          </Link>
          <Link to={"#"} className="">
            Careers
          </Link>
          <Link to={"#"} className="">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="absolute bottom-[-35%] left-[10%] grid grid-rows h-[30vh] w-[80vw]">
        <hr />
        <div className="grid grid-rows h-fit gap-y-2 justify-end -mt-8">
          <h2 className="font-dm-sans text-md font-semibold">Social Media</h2>
          <div className="grid grid-cols-3 gap-x-2">
            <Link to={"#"}>
              <img className="w-10 h-10" src={FacebookIcon} alt="" />
            </Link>
            <Link to={"#"}>
              <img className="w-10 h-10" src={TwitterIcon} alt="" />
            </Link>
            <Link to={"#"}>
              <img className="w-10 h-10" src={InstagramIcon} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-40%] left-[0] w-screen h-[5vh] pt-14 px-32 text-center grid grid-cols-5 bg-[#122038] text-black">
        <div className="absolute bottom-0 left-0 ">
          <img className="w-fit" src={FooterBlur} alt="" />
        </div>
      </div>
    </>
  );
};

export default FooterComponent;

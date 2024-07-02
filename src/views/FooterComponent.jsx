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
      <div className="absolute md:top-[0%] top-[-30%] left-[0] w-screen md:h-[70vh] h-[110vh] md:pt-14 pt-10 px-32 text-center grid md:grid-cols-5 grid-rows bg-white text-black">
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
        <div className="grid grid-rows md:space-y-4 space-y-2 max-w-32 font-dm-sans text-left h-fit ml-4">
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
        <div className="grid grid-rows md:space-y-4 space-y-2 font-dm-sans text-left h-fit ml-4">
          <h2 className="md:font-semibold font-medium">Solutions</h2>
          <Link to={"#"} className="md:text-sm text-xs ">
            Money Out
          </Link>
          <Link to={"#"} className="md:text-sm text-xs">
            Money In
          </Link>
        </div>
        <div className="grid grid-rows md:space-y-4 space-y-2 font-dm-sans text-left h-fit ml-4">
          <h2 className="md:font-semibold font-medium">Sectors</h2>
          <Link to={"#"} className="md:text-sm text-xs">
            Financial Services
          </Link>
          <Link to={"#"} className="md:text-sm text-xs">
            iGaming
          </Link>
          <Link to={"#"} className="md:text-sm text-xs">
            Corporates
          </Link>
          <Link to={"#"} className="md:text-sm text-xs">
            NGOs
          </Link>
        </div>
        <div className="grid grid-rows md:space-y-4 space-y-2 font-dm-sans text-left h-fit ml-4">
          <h2 className="md:font-semibold font-medium">Others</h2>
          <Link to={"#"} className="md:text-sm text-xs">
            About Us
          </Link>
          <Link to={"#"} className="md:text-sm text-xs">
            News & Insights
          </Link>
          <Link to={"#"} className="md:text-sm text-xs">
            Compliance
          </Link>
          <Link to={"#"} className="md:text-sm text-xs">
            Careers
          </Link>
          <Link to={"#"} className="md:text-sm text-xs">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="absolute bottom-[-35%] left-[10%] grid grid-rows h-[30vh] w-[80vw]">
        <hr className="hidden md:block" />
        <div className="grid grid-rows h-fit gap-y-2 justify-end -mt-8">
          <h2 className="font-dm-sans text-md md:font-semibold font-medium">
            Social Media
          </h2>
          <div className="grid grid-cols-3 gap-x-2">
            <Link to={"#"}>
              <img
                className="md:w-10 md:h-10 w-6 h-6"
                src={FacebookIcon}
                alt=""
              />
            </Link>
            <Link to={"#"}>
              <img
                className="md:w-10 md:h-10 w-6 h-6"
                src={TwitterIcon}
                alt=""
              />
            </Link>
            <Link to={"#"}>
              <img
                className="md:w-10 md:h-10 w-6 h-6"
                src={InstagramIcon}
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute md:bottom-[-40%] bottom-[-130%] left-[0] w-screen h-[5vh] pt-14 px-32 text-center grid grid-cols-5 bg-[#122038] text-black">
        <div className="absolute bottom-0 left-0 ">
          <img className="md:w-fit w-screen" src={FooterBlur} alt="" />
        </div>
      </div>
    </>
  );
};

export default FooterComponent;

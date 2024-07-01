import React from "react";
import Button from "../components/Button";
import ArrowRightCircle from "/src/assets/images/ArrowRightCircle.png";
import AboutUsBlurImage from "/src/assets/images/AboutUsBlurImage.png";
import AboutUsWoman from "/src/assets/images/AboutUsWoman.png";
import AboutUsWomanBackground from "/src/assets/images/AboutUsWomanBackground.png";
import AboutUsMan from "/src/assets/images/AboutUsMan.png";
import AboutUsManBackground from "/src/assets/images/AboutUsManBackground.png";
import AboutUsFirstImg from "/src/assets/images/AboutUsFirstImg.png";
import LightGreenArrowCircle from "/src/assets/images/LightGreenArrowCircle.png";
import ImageCard from "../components/ImageCard";
import GroupBlur from "/src/assets/images/GroupBlur.png";
import SideBySideDivs from "../components/SideBySideDivs";
import SideWoman from "/src/assets/images/SideWoman.png";
import SideBlur from "/src/assets/images/SideBlur.png";
import SideTransLogo from "/src/assets/images/transLogo.png";

const AboutUs = () => {
  return (
    <>
      <div className="absolute grid grid-rows-1 md:grid-cols-2 gap-2 md:p-6 p-3 w-[80vw] md:top-[17%] top-[17%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-50">
        <span className="font-dm-sans text-sm text-[rgb(133,133,133)]">
          ABOUT US
        </span>
        <div className="md:pl-10 pl-4">
          <h2 className="font-dm-sans text-3xl">
            Payment pathways, built <br /> for you
          </h2>
          <p className="text-[#757575] font-medium text-sm max-w-md text-balance">
            Transalliance Group. Money Out and Money In solutions give our
            customers the ability to complete cross-border, multi-currency
            transactions securely and at speed. And with a single provider for
            both payouts and pay-ins, say goodbye to the operational headaches
            of multi-supplier management
          </p>
          <div className="cursor-pointer block md:hidden mt-4">
            <Button
              backgroundGradient="linear-gradient(263.68deg, #5AAF87 4.04%, #D3BD00 127.52%)"
              width="160px"
              height="55px"
              buttonBorderRadius="10px"
              imgSrc={ArrowRightCircle}
              text="Money Out"
              fontSize="14px"
              hrefPath="/moneyOut"
            />
          </div>
        </div>

        {/* Money Out Button */}
        <div className="absolute bottom-[0] border-2 ml-6 cursor-pointer hidden md:block">
          <Button
            backgroundGradient="linear-gradient(263.68deg, #5AAF87 4.04%, #D3BD00 127.52%)"
            width="160px"
            height="55px"
            buttonBorderRadius="10px"
            imgSrc={ArrowRightCircle}
            text="Money Out"
            fontSize="14px"
            hrefPath="/moneyOut"
          />
        </div>
      </div>

      <div className="absolute md:top-[50%] top-[60%] md:left-[55%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 grid grid-rows md:grid-cols-2 gap-20 w-[80vw] h-auto z-20 justify-center items-center">
        <ImageCard
          bgImage={AboutUsBlurImage}
          className="md:w-[300px] md:h-[300px] w-[200px] h-[200px]"
          altText="SEPA Instant, SEPA & SWIFT"
          altTextSize="14px"
          divPositionTop="92%"
          divPositionLeft="30%"
          divPaddingTop="10px"
          divPaddingBottom="10px"
        />
        <ImageCard
          bgImage={AboutUsWomanBackground}
          className="md:w-[300px] md:h-[300px] w-[200px] h-[200px]"
          fgImage={AboutUsWoman}
          altText="Customer portal for live transaction monitoring"
          altTextSize="14px"
          divPositionTop="92%"
          divPositionLeft="10%"
          fgClassName="md:w-[300px] md:h-[300px] left-[20%]"
          divPaddingTop="10px"
          divPaddingBottom="10px"
        />
        <ImageCard
          bgImage={AboutUsManBackground}
          className="md:w-[300px] md:h-[300px] w-[200px] h-[200px]"
          fgImage={AboutUsMan}
          altText="Danish FSA regulated"
          altTextSize="14px"
          divPositionTop="10%"
          divPositionLeft="5%"
          fgClassName="md:w-[300px] md:h-[330px] w-[300px] h-[300px] md:top-[-10%] top-[-32%]"
          divPaddingTop="10px"
          divPaddingBottom="10px"
        />
        <ImageCard
          bgImage={AboutUsFirstImg}
          className="md:w-[300px] md:h-[300px] w-[200px] h-[200px]"
          altText="90+ currencies served"
          altTextSize="14px"
          divPositionTop="90%"
          divPositionLeft="30%"
          divPaddingTop="10px"
          divPaddingBottom="10px"
        />
        <div className="block md:hidden ">
          <Button
            backgroundGradient="linear-gradient(264.61deg, #24343E -97.02%, #5AAF87 133.21%)"
            width="160px"
            height="50px"
            buttonBorderRadius="10px"
            imgSrc={LightGreenArrowCircle}
            text="Learn More"
            fontSize="14px"
            hrefPath="/learn-more1"
          />
        </div>
      </div>

      {/* Learn More button */}
      <div className="absolute bottom-[10%] left-[70%] mb-4 ml-4 border-2 z-50 hidden md:block">
        <Button
          backgroundGradient="linear-gradient(264.61deg, #24343E -97.02%, #5AAF87 133.21%)"
          width="160px"
          height="50px"
          buttonBorderRadius="10px"
          imgSrc={LightGreenArrowCircle}
          text="Learn More"
          fontSize="14px"
          hrefPath="/learn-more1"
        />
      </div>

      <div className="absolute bottom-[-50%] left-0">
        <img className="w-screen" src={GroupBlur} alt="" />
      </div>

      {/*  */}
      <SideBySideDivs
        containerClassName="w-screen h-[60vh] md:bottom-[-19%] bottom-[-12%] left-[0%]"
        div1Props={{
          className:
            "flex md:justify-end justify-center bg-[#5FB083] pt-4 md:pr-3 pr-0 h-[65%] w-screen md:w-[40%]",
          style: { bottom: "-10%" },
          children: (
            <div className="grid grid-rows-3 md:max-w-sm max-w-xs text-left">
              <h2 className="font-gayathri font-bold text-3xl">
                The human-powered payments network
              </h2>
              <p className="font-dm-sans mb-2 max-w-sm text-sm">
                Driven by a team of over 200 global payments experts with
                absolute dedication to solving our customers’ most complex
                cross-border payments challenges.
              </p>
              <div className="mt-3 mx-3 justify-start">
                <Button
                  backgroundGradient="linear-gradient(263.68deg, #5AAF87 4.04%, #D3BD00 127.52%)"
                  width="160px"
                  height="55px"
                  buttonBorderRadius="10px"
                  imgSrc={ArrowRightCircle}
                  text="Learn More"
                  fontSize="14px"
                  hrefPath="/learn-more2"
                />
              </div>
            </div>
          ),
        }}
        div2Props={{
          className: "bg-[#122038] h-[90%] w-[60%] hidden md:block",
          style: {
            bottom: "-10%",
          },

          borderTopLeftRadius: "50px",
          children: (
            <>
              {/* Side Blur */}
              <div className="absolute top-0 left-0">
                <img className="w-fit opacity-50" src={SideBlur} alt="" />
              </div>
              {/* Side Trans Logo */}
              <div className="absolute top-0 right-[8%] mr-4 mt-3">
                <img className="w-14 h-14" src={SideTransLogo} alt="" />
              </div>
              {/* Side Woman with Laptop */}
              <div className="flex  top-[10%] md:left-[30%] left-[15%] absolute justify-center items-center">
                <img
                  className="object-cover md:w-[350px] w-[250px] md:h-[350px] h-[250px] transform transition-transform duration-300 hover:scale-105"
                  src={SideWoman}
                  alt=""
                />
              </div>
            </>
          ),
        }}
      />
      {/*  */}
    </>
  );
};

export default AboutUs;

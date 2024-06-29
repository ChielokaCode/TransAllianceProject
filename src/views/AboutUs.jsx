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
      <div className="absolute grid grid-cols-2 gap-4 p-6 h-[70vh] w-[80vw] top-[28%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <span className="font-dm-sans text-sm text-[rgb(133,133,133)]">
          ABOUT US
        </span>
        <div className="space-y-4 pl-10">
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
        </div>

        {/* Money Out Button */}
        <div className="absolute bottom-[50%] border-2 ml-6 cursor-pointer hover:scale-50">
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

      <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 grid-rows-2 gap-20 w-[80vw] h-auto z-20">
        <ImageCard
          bgImage={AboutUsBlurImage}
          bgImageHeight="300px"
          bgImageWidth="300px"
          altText="SEPA Instant, SEPA & SWIFT"
          altTextSize="14px"
          divPositionTop="92%"
          divPositionLeft="30%"
          divPaddingTop="10px"
          divPaddingBottom="10px"
        />
        <ImageCard
          bgImage={AboutUsWomanBackground}
          bgImageHeight="300px"
          bgImageWidth="300px"
          fgImage={AboutUsWoman}
          altText="Customer portal for live transaction monitoring"
          altTextSize="14px"
          divPositionTop="92%"
          divPositionLeft="10%"
          fgImageWidth="400px"
          fgImageHeight="300px"
          imagePositionLeft="15%"
          divPaddingTop="10px"
          divPaddingBottom="10px"
        />
        <ImageCard
          bgImage={AboutUsManBackground}
          bgImageHeight="300px"
          bgImageWidth="300px"
          fgImage={AboutUsMan}
          altText="Danish FSA regulated"
          altTextSize="14px"
          divPositionTop="10%"
          divPositionLeft="5%"
          fgImageWidth="300px"
          fgImageHeight="330px"
          imagePositionTop="-10%"
          divPaddingTop="10px"
          divPaddingBottom="10px"
        />
        <ImageCard
          bgImage={AboutUsFirstImg}
          bgImageHeight="300px"
          bgImageWidth="300px"
          altText="90+ currencies served"
          altTextSize="14px"
          divPositionTop="90%"
          divPositionLeft="30%"
          divPaddingTop="10px"
          divPaddingBottom="10px"
        />
      </div>

      {/* Learn More button */}
      <div className="absolute bottom-[10%] left-[70%] mb-4 ml-4 border-2 outline-black">
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
        containerClassName="w-screen h-[60vh]"
        containerStyle={{ bottom: "-19%", left: "0%" }}
        div1Props={{
          className: "flex justify-end bg-[#5FB083] pt-4",
          style: { bottom: "-10%" },
          height: "65%",
          width: "40%",
          children: (
            <div className="grid grid-rows-3 max-w-sm text-left ">
              <h2 className="font-gayathri font-bold text-3xl">
                The human-powered payments network
              </h2>
              <p className="font-dm-sans mb-2 max-w-sm">
                Driven by a team of over 200 global payments experts with
                absolute dedication to solving our customers’ most complex
                cross-border payments challenges.
              </p>
              <div className="mt-2">
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
          className: "bg-[#122038]",
          style: {
            bottom: "-10%",
          },
          height: "90%",
          width: "60%",
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
              <div className="flex  top-[10%] left-[30%] absolute justify-center items-center">
                <img
                  className=" object-cover w-[350px] h-[350px]"
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

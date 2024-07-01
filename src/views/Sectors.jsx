import React from "react";
import SectorsFirstImage from "/src/assets/images/SectorsFirstImage.png";
import SectorsSecondImage from "/src/assets/images/SectorsThirdImage.png";
import SectorsThirdImage from "/src/assets/images/SectorsSecondImage.png";
import SectorsFourthImage from "/src/assets/images/SectorsFourthImage.png";
import LearnMoreButton from "/src/assets/images/ArrowRightCircle.png";
import AnnualReportBlurLeft from "/src/assets/images/AnnualReportBlurLeft.png";
import AnnualReportBlur from "/src/assets/images/AnnualReportBlur.png";
import ImageCard from "../components/ImageCard";

const Sectors = () => {
  return (
    <>
      <div className="absolute grid grid-rows p-6 h-[70vh] w-[80vw] md:top-[32%] top-[20%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <div className="grid grid-rows space-y-3 mb-6">
          <h2 className="font-gayathri text-3xl font-bold">Sectors we serve</h2>
          <p className="font-dm-sans text-md text-[#757575] max-w-2xl">
            We simplify the complexities of cross-border payments in some of the
            world’s most demanding sectors. Learn more about who we serve and
            how we add value below.
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-rows md:gap-x-4 gap-y-2 h-auto md:mt-8 mt-2">
          <div className="grid grid-rows md:space-y-8 space-y-0 justify-center">
            <ImageCard
              bgImage={SectorsFirstImage}
              className="md:w-[350px] md:h-[250px] w-[250px] h-[250px]"
              altText="Financial Services"
              altTextSize="20px"
              buttonText="Learn More"
              isLearnMore="true"
              buttonImg={LearnMoreButton}
              divPositionTop="60%"
              divPositionLeft="70%"
              divWidth="200px"
              divPaddingTop="5px"
              divPaddingBottom="5px"
              hrefPath="/#"
            />
            <ImageCard
              bgImage={SectorsSecondImage}
              className="md:w-[350px] md:h-[250px] w-[250px] h-[250px]"
              altText="NGOs"
              altTextSize="20px"
              buttonText="Learn More"
              isLearnMore="true"
              buttonImg={LearnMoreButton}
              divPositionTop="15%"
              divPositionLeft="70%"
              divPaddingTop="5px"
              divPaddingBottom="5px"
              hrefPath="/#"
            />
          </div>
          <div className="grid grid-rows-1 md:-mt-6 mt-0 mb-4 md:space-y-10 space-y-0 justify-center">
            <ImageCard
              bgImage={SectorsThirdImage}
              className="md:w-[350px] md:h-[250px] w-[250px] h-[250px]"
              altText="iGaming"
              altTextSize="20px"
              buttonText="Learn More"
              isLearnMore="true"
              buttonImg={LearnMoreButton}
              divPositionTop="5%"
              divPositionLeft="10%"
              divPaddingTop="5px"
              divPaddingBottom="5px"
              hrefPath="/#"
            />
            <ImageCard
              bgImage={SectorsFourthImage}
              className="md:w-[350px] md:h-[250px] w-[250px] h-[250px]"
              altText="Corporates"
              altTextSize="20px"
              buttonText="Learn More"
              isLearnMore="true"
              buttonImg={LearnMoreButton}
              divPositionTop="80%"
              divPositionLeft="10%"
              divPaddingTop="5px"
              divPaddingBottom="5px"
              hrefPath="/#"
            />
          </div>
        </div>
      </div>

      <div className="absolute md:top-[70%] top-[85%] left-[0] w-screen md:h-[40vh] h-[35vh] text-center p-10 justify-center items-center grid grid-rows bg-[#122038] rounded-br-[50px] text-white z-10">
        <h2 className="font-gayathri md:text-5xl text-3xl">
          2023 Annual Report
        </h2>
        <h4 className="font-dm-sans md:text-2xl text-xl font-medium max-w-3xl">
          Click below to read more about Inpay’s impressive year-on-
          <br />
          year growth and to download the full report.
        </h4>

        <div className="absolute bottom-0 right-0 z-40">
          <img
            className="md:w-[50vw] w-screen opacity-45 md:opacity-100"
            src={AnnualReportBlur}
            alt=""
          />
        </div>

        <div className="absolute top-0 left-0 z-40">
          <img
            className="md:w-[50vw] w-screen opacity-45 md:opacity-100"
            src={AnnualReportBlurLeft}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Sectors;

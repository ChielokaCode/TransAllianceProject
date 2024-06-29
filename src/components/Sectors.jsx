import React from "react";
import SectorsFirstImage from "./images/SectorsFirstImage.png";
import SectorsSecondImage from "./images/SectorsThirdImage.png";
import SectorsThirdImage from "./images/SectorsSecondImage.png";
import SectorsFourthImage from "./images/SectorsFourthImage.png";
import LearnMoreButton from "./images/ArrowRightCircle.png";
import AnnualReportBlurLeft from "./images/AnnualReportBlurLeft.png";
import AnnualReportBlur from "./images/AnnualReportBlur.png";
import ImageCard from "./ImageCard";

const Sectors = () => {
  return (
    <>
      <div className="absolute grid grid-rows p-6 h-[70vh] w-[80vw] top-[32%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <div className="grid grid-rows-2 space-y-3 mb-6">
          <h2 className="font-gayathri text-3xl font-bold">Sectors we serve</h2>
          <p className="font-dm-sans text-md text-[#757575] max-w-2xl">
            We simplify the complexities of cross-border payments in some of the
            world’s most demanding sectors. Learn more about who we serve and
            how we add value below.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-4 h-auto mt-8">
          <div className="grid grid-rows-1 space-y-8">
            <ImageCard
              bgImage={SectorsFirstImage}
              altText="Financial Services"
              altTextSize="20px"
              buttonText="Learn More"
              isLearnMore="true"
              buttonImg={LearnMoreButton}
              bgImageWidth="350px"
              bgImageHeight="250px"
              divPositionTop="60%"
              divPositionLeft="70%"
              divWidth="200px"
              divPaddingTop="5px"
              divPaddingBottom="5px"
            />
            <ImageCard
              bgImage={SectorsSecondImage}
              altText="NGOs"
              altTextSize="20px"
              buttonText="Learn More"
              isLearnMore="true"
              buttonImg={LearnMoreButton}
              bgImageWidth="350px"
              bgImageHeight="250px"
              divPositionTop="15%"
              divPositionLeft="70%"
              divPaddingTop="5px"
              divPaddingBottom="5px"
            />
          </div>
          <div className="grid grid-rows-1 -mt-6 mb-4 space-y-10">
            <ImageCard
              bgImage={SectorsThirdImage}
              altText="iGaming"
              altTextSize="20px"
              buttonText="Learn More"
              isLearnMore="true"
              buttonImg={LearnMoreButton}
              bgImageWidth="350px"
              bgImageHeight="250px"
              divPositionTop="5%"
              divPositionLeft="10%"
              divPaddingTop="5px"
              divPaddingBottom="5px"
            />
            <ImageCard
              bgImage={SectorsFourthImage}
              altText="Corporates"
              altTextSize="20px"
              buttonText="Learn More"
              isLearnMore="true"
              buttonImg={LearnMoreButton}
              bgImageWidth="350px"
              bgImageHeight="250px"
              divPositionTop="80%"
              divPositionLeft="10%"
              divPaddingTop="5px"
              divPaddingBottom="5px"
            />
          </div>
        </div>
      </div>

      <div className="absolute top-[70%] left-[0] w-screen h-[40vh] text-center p-10 justify-center items-center grid grid-rows bg-[#122038] rounded-br-[50px] text-white">
        <h2 className="font-gayathri text-5xl">2023 Annual Report</h2>
        <h4 className="font-dm-sans text-2xl font-medium max-w-3xl">
          Click below to read more about Inpay’s impressive year-on-
          <br />
          year growth and to download the full report.
        </h4>

        <div className="absolute bottom-0 right-0 z-40">
          <img className="w-[50vw]" src={AnnualReportBlur} alt="" />
        </div>

        <div className="absolute top-0 left-0 z-40">
          <img className="w-[50vw]" src={AnnualReportBlurLeft} alt="" />
        </div>
      </div>
    </>
  );
};

export default Sectors;

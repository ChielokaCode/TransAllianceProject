import React from "react";
import ServiceCard from "./ServiceCard";
import ServicesFirstIcon from "./images/ServicesFirstIcon.png";
import ServicesSecondIcon from "./images/ServicesSecondIcon.png";
import ServicesThirdIcon from "./images/ServicesThirdIcon.png";
import ServicesFourthIcon from "./images/ServicesFourthIcon.png";
import ServicesWoman from "./images/ServicesWoman.png";
import SideBySideDivs from "./SideBySideDivs";
import ServicesFifthTablet from "./images/ServicesFifthTablet.png";
import SideBlur from "./images/SideBlur.png";
import SideTransLogo from "/src/assets/transLogo.png";

const OurService = () => {
  return (
    <>
      <div className="absolute grid grid-cols-2 gap-4 p-6 h-[70vh] w-[80vw] top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 ">
        <div className="grid grid-rows space-y-3">
          <span className="text-sm text-[#757575] font-dm-sans">
            OUR SERVICE
          </span>
          <br />
          <ServiceCard
            imgSrc={ServicesFirstIcon}
            headlineText="We are your trusted partner"
            bodyText="We are a dedicated and diligent team of payments specialists that’s committed to helping you unlock opportunity, create value and make payments happen, together."
          />
          <ServiceCard
            imgSrc={ServicesSecondIcon}
            headlineText="We provide the network you need"
            bodyText="We open access to a resilient global network spanning 90+ countries that’s built to simplify complex challenges and move money at speed."
          />
          <ServiceCard
            imgSrc={ServicesThirdIcon}
            headlineText="We bring certainty through compliance"
            bodyText="We were born with compliance at our heart. Licensed by the globally trusted Danish FSA, when we move money you can be confident that it gets to the right place with absolute accuracy."
          />
          <ServiceCard
            imgSrc={ServicesFourthIcon}
            headlineText="We execute with expertise"
            bodyText="We complete an industry-leading 99% of payments for customers in the fast-changing financial services, iGaming, corporate and NGO sectors, drawing on 16 years of proven expertise."
          />
        </div>
        <div className="grid grid-rows space-y-2">
          <div className="space-y-2">
            <h2 className="font-gayathri text-4xl">
              The Transalliance Group. <br />
              difference
            </h2>
            <p className="font-dm-sans text-xl font-light text-[#757575]">
              Our global payments network is powered by passionate people,
              transparent customer relationships, and leading-edge technology.
            </p>
          </div>
          <img src={ServicesWoman} alt="" />
        </div>
      </div>

      <SideBySideDivs
        containerClassName="w-screen h-[60vh]"
        containerStyle={{ bottom: "-10%", left: "0%" }}
        div1Props={{
          className: "flex justify-end bg-[#122038] pt-4",
          style: { bottom: "-10%" },
          height: "90%",
          width: "60%",
          borderTopRightRadius: "50px",
          children: (
            <>
              {/* Side Blur */}
              <div className="absolute top-0 left-0">
                <img className="w-screen opacity-70" src={SideBlur} alt="" />
              </div>
              {/* Side Trans Logo */}
              <div className="absolute top-0 left-[8%] ml-4 mt-3">
                <img className="w-14 h-14" src={SideTransLogo} alt="" />
              </div>
              {/* Side Woman with Laptop */}
              <div className="flex top-[1%] left-[30%] absolute justify-center items-center">
                <img
                  className=" object-contain w-[450px] h-[450px]"
                  src={ServicesFifthTablet}
                  alt=""
                />
              </div>
            </>
          ),
        }}
        div2Props={{
          className: "bg-[#5FB083]",
          style: {
            bottom: "-10%",
          },
          height: "65%",
          width: "40%",
          children: (
            <>
              <div className="grid grid-rows mt-6 ml-4 space-y-2 max-w-sm text-left ">
                <h2 className="font-gayathri font-bold text-3xl">
                  One portal,
                  <br /> every transaction
                </h2>
                <p className="font-dm-sans mb-2 max-w-sm text-md font-light">
                  Our customer portal provides an intuitive interface to access
                  all of our services via a simple, single login.
                  <ul className="text-sm font-dm-sans ">
                    <li>Real-time, 24/7, 365 transaction tracking</li>
                    <li>Customizable & downloadable reports</li>
                    <li>Rich data analysis</li>
                    <li>
                      Multiple integration methods, built to suit your needs
                    </li>
                  </ul>
                </p>
              </div>
            </>
          ),
        }}
      />
    </>
  );
};

export default OurService;

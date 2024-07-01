import React from "react";
import ServiceCard from "../components/ServiceCard";
import ServicesFirstIcon from "/src/assets/images/ServicesFirstIcon.png";
import ServicesSecondIcon from "/src/assets/images/ServicesSecondIcon.png";
import ServicesThirdIcon from "/src/assets/images/ServicesThirdIcon.png";
import ServicesFourthIcon from "/src/assets/images/ServicesFourthIcon.png";
import ServicesWoman from "/src/assets/images/ServicesWoman.png";
import SideBySideDivs from "../components/SideBySideDivs";
import ServicesFifthTablet from "/src/assets/images/ServicesFifthTablet.png";
import SideBlur from "/src/assets/images/SideBlur.png";
import SideTransLogo from "/src/assets/images/transLogo.png";
import { Link } from "react-router-dom";

const OurService = () => {
  return (
    <>
      <div className="absolute grid grid-cols-2 gap-4 p-6 h-[70vh] md:w-[80vw] w-screen md:top-[40%] top-[35%] md:left-[50%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 ">
        <div className="grid grid-rows space-y-3 w-screen">
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
        <div className="md:grid grid-rows space-y-2 hidden">
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
          <Link to={"/#"}>
            <img
              className="cursor-pointer transform transition-transform duration-300 hover:scale-105"
              src={ServicesWoman}
              alt=""
            />
          </Link>
        </div>
      </div>

      <SideBySideDivs
        containerClassName="w-screen h-[60vh] md:bottom-[-10%] bottom-[0] left-[0]"
        div1Props={{
          className:
            "flex justify-end bg-[#122038] pt-4 h-[90%] w-[60%] hidden md:block",
          style: { bottom: "-10%" },
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
                  className=" object-contain w-[450px] h-[450px] transform transition-transform duration-300 hover:scale-105"
                  src={ServicesFifthTablet}
                  alt=""
                />
              </div>
            </>
          ),
        }}
        div2Props={{
          className: "bg-[#5FB083] h-[65%] w-screen md:w-[40%] ",
          style: {
            bottom: "-10%",
          },
          children: (
            <>
              <div className="grid grid-rows mt-6 md:ml-4 ml-10 space-y-2 max-w-sm text-left ">
                <h2 className="font-gayathri font-bold text-3xl">
                  One portal,
                  <br /> every transaction
                </h2>
                <p className="font-dm-sans mb-2 max-w-sm text-md font-semibold">
                  Our customer portal provides an intuitive interface to access
                  all of our services via a simple, single login.
                  <ul className="text-sm font-medium font-dm-sans ">
                    <li>- Real-time, 24/7, 365 transaction tracking</li>
                    <li>- Customizable & downloadable reports</li>
                    <li>- Rich data analysis</li>
                    <li>
                      - Multiple integration methods, built to suit your needs
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

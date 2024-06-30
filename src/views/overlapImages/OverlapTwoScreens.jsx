import React from "react";
import FirstLogo from "/src/assets/images/firstLogo.png";
import SecondLogo from "/src/assets/images/secondLogo.png";
import ThirdLogo from "/src/assets/images/thirdLogo.png";
import FourthLogo from "/src/assets/images/fourthLogo.png";
import FifthLogo from "/src/assets/images/fifthLogo.png";
import SixthLogo from "/src/assets/images/sixthLogo.png";

const OverlapTwoScreens = () => {
  return (
    <>
      <div className="absolute p-6 bottom-[-15%] left-[10%] right-[10%] bg-white bg-opacity-50 backdrop-blur-lg h-[25vh] rounded-xl border-r-white z-30">
        <p className="font-dm-sans font-normal text-black">
          Send and Receive Money from all <br /> over with ease.
        </p>
        <div className="grid grid-cols-6 items-center justify-center">
          <img
            className="transform transition-transform duration-300 hover:scale-125"
            src={FirstLogo}
            alt=""
          />
          <img
            className="transform transition-transform duration-300 hover:scale-125"
            src={SecondLogo}
            alt=""
          />
          <img
            className="transform transition-transform duration-300 hover:scale-125"
            src={ThirdLogo}
            alt=""
          />
          <img
            className="transform transition-transform duration-300 hover:scale-125"
            src={FourthLogo}
            alt=""
          />
          <img
            className="transform transition-transform duration-300 hover:scale-125"
            src={FifthLogo}
            alt=""
          />
          <img
            className="transform transition-transform duration-300 hover:scale-125"
            src={SixthLogo}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default OverlapTwoScreens;

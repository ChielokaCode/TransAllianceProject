import React from "react";
import FirstLogo from "./images/firstLogo.png";
import SecondLogo from "./images/secondLogo.png";
import ThirdLogo from "./images/thirdLogo.png";
import FourthLogo from "./images/fourthLogo.png";
import FifthLogo from "./images/fifthLogo.png";
import SixthLogo from "./images/sixthLogo.png";

const OverlapTwoScreens = () => {
  return (
    <>
      <div className="absolute p-6 bottom-[-15%] left-[10%] right-[10%] bg-white bg-opacity-50 backdrop-blur-lg h-[25vh] rounded-xl border-r-white z-20">
        <p className="font-dm-sans font-normal text-black">
          Send and Receive Money from all <br /> over with ease.
        </p>
        <div className="grid grid-cols-6 items-center justify-center">
          <img src={FirstLogo} alt="" />
          <img src={SecondLogo} alt="" />
          <img src={ThirdLogo} alt="" />
          <img src={FourthLogo} alt="" />
          <img src={FifthLogo} alt="" />
          <img src={SixthLogo} alt="" />
        </div>
      </div>
    </>
  );
};

export default OverlapTwoScreens;

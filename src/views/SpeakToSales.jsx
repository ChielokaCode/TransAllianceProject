import React from "react";
import SalesFirstImage from "/src/assets/images/SalesFirstImage.png";
import CustomForm from "../components/CustomForm";

const SpeakToSales = () => {
  return (
    <>
      <div className="absolute grid grid-cols-2 pt-3 h-[70vh] w-[80vw] top-[30%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <img
          className="w-[500px] h-[500px] mt-5 mb-5"
          src={SalesFirstImage}
          alt=""
        />
        <div className="w-[40vw] h-auto bg-white rounded-md shadow-md grid grid-rows pt-4 px-4 pb-3">
          <h2 className="font-dm-sans text-3xl">Speak to Sales</h2>
          <CustomForm />
        </div>
      </div>
    </>
  );
};

export default SpeakToSales;

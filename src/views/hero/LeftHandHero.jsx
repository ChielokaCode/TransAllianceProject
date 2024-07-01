import React from "react";

const LeftHandHero = () => {
  return (
    <>
      <div className="md:flex items-center md:justify-center text-left md:h-full md:p-4 mt-20 md:mt-0">
        <div className="font-bold text-left text-white max-w-xl space-y-2">
          <h5 className="font-dm-sans text-gradient md:text-sm text-[14px]">
            Simplified cross-border payments
          </h5>
          <h2 className="md:text-7xl text-4xl font-light md:w-[600px] w-[400px] font-gayathri">
            We are the Payments people
          </h2>
          <p className="font-normal font-dm-sans w-[400px]">
            Transalliance Group’s cross-border payments solutions connect
            organisations and communities globally to the network they need{" "}
            <br />
            to thrive. Together, we make money move.
          </p>
        </div>
      </div>
    </>
  );
};

export default LeftHandHero;

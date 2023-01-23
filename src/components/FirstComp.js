import React from "react";
import section1Img from "../assets/Sanctions,PEP_Image.png";

const FirstComp = () => {
  return (
    <div className="w-full min-h-[25vh] bg-[#ffffff] text-[#131f40] py-20 px-8 flex flex-col justify-center items-center md:flex-row md:px-12">
      <div className="flex flex-col">
        <h1 className="text-4xl font-semibold md:font-bold">
          Sanctions, PEP and media checks on a centralized platform
        </h1>
        <p className="text-base mt-4 mb-4">
          Bring all your data on a no-code, powerful platform to maximize the
          efficiency of all AML compliance operations.
        </p>
      </div>
      <img src={section1Img} alt="" />
    </div>
  );
};

export default FirstComp;

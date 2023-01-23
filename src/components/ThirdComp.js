import React from "react";
import OFAC from "../assets/thirdComp/OFAC.png";
import FCA from "../assets/thirdComp/FCA.png";
import EU from "../assets/thirdComp/EU.png";
import UN from "../assets/thirdComp/UN.png";

const SecondComp = () => {
  return (
    <div className="w-full min-h-[25vh] bg-[#ffffff] text-[#131f40] px-8 py-20 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold md:font-bold">
        Reliable, global data sources
      </h1>
      <p className="text-lg text-center my-4">
        We support and frequently update our data sources from global lists
        including OFAC, HM Treasury, UN, and EU to deliver you relevant and
        up-to-date information.
      </p>
      <div className="mt-6 flex flex-wrap justify-around items-center">
        <img src={OFAC} className="mb-10 md:mr-32" alt="OFAC" />
        <img src={FCA} className="mb-10 md:mr-32" alt="FCA" />
        <img src={EU} className="mb-10 md:mr-32" alt="EU" />
        <img src={UN} className="mb-10" alt="UN" />
      </div>
    </div>
  );
};

export default SecondComp;

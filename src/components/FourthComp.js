import React from "react";
import PO from "./PO";

const FourthComp = () => {
  return (
    <div className="w-full min-h-[25vh] bg-[#1a1935] text-[#131f40] px-8 md:px-20 lg:px-40 xl:px-60 2xl:96  py-20 md:py-32 flex flex-col justify-center items-center">
      <h1 className="text-4xl text-[#ffffff] font-semibold md:font-bold">
        <span className="text-[#8b75f2]">Protect</span> your organization and
        users
      </h1>
      <div className="md:flex">
        <PO
          syl="md:mr-36"
          image=""
          heading="Sanctions"
          text="Global data about financial penalties imposed on institutions by governments."
        />
        <PO
          syl="md:mr-36"
          image=""
          heading="PEP"
          text="Identify politically exposed parties and accurately asses your customers' risk exposure."
        />
        <PO
          image=""
          heading="Adverse Media"
          text="View negative mentions of buisness and consumer users in the news."
        />
      </div>
    </div>
  );
};

export default FourthComp;

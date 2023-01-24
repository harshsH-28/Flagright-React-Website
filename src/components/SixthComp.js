import React from "react";
import FD from "./FD";

const SixthComp = () => {
  return (
    <div className="w-full min-h-[25vh] bg-[#1a1935] text-[#131f40] px-8 md:px-96 py-20 md:py-32 flex flex-col justify-center items-center">
      <div>
        <h1 className="text-4xl text-center text-[#ffffff] mb-6 font-semibold md:font-bold">
          What makes Flagright{" "}
          <span className="text-[#8b75f2]">different?</span>
        </h1>
        <p className="text-lg text-center text-[#ffffff]">
          Flagright's developer friendly API takes developer teams 4 days to
          integrate. Flagright API is the ultimate AML compliance and fraud
          prevention layer that enables your to deliver services to your
          customers at scale usign your preferred frameworks.
        </p>
      </div>
      <div className="md:flex">
        <FD
          mystyle="mr-20"
          image=""
          heading="Go live in 4 days"
          text="Quickest integration in the world. 85% faster than insutry benchmark.
        Our competitors take 2-4 months."
        ></FD>
        <FD
          mystyle="mr-20"
          image=""
          heading="One powerful API"
          text="A unified, standardized API for all suspicious activity detection use cases."
        ></FD>
        <FD
          mystyle="mr-20"
          image=""
          heading="Always real-time"
          text="Flagright API is always fast at no additional cost even for complex use cases."
        ></FD>
        <FD
          image=""
          heading="Usage-based pricing"
          text="Flexible payment plans that plans that help you realize ROI faster"
        ></FD>
      </div>
    </div>
  );
};

export default SixthComp;

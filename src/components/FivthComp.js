import React from "react";
import profileImg from "../assets/fivComp/modal.png";
import rect from "../assets/fivComp/Rectangle 179.png";

const FivthComp = () => {
  return (
    <div className="w-full min-h-[25vh] bg-[#ffffff] text-[#131f40] px-8 md:px-60 pt-20 flex flex-col justify-center items-center md:flex-row">
      <div className="md:mr-40">
        <h1 className="text-4xl font-semibold md:font-bold">
          Streamline screening & case management
        </h1>
        <ul className="mt-5 ml-8">
          <li className="text-lg mb-5">
            Automatically screen all new customers
          </li>
          <li className="text-lg mb-5">
            Get a complete, unified picture of risky customers and transactions
          </li>
          <li className="text-lg mb-5">
            Flexible configuration options to minimize false positives
          </li>
        </ul>
      </div>
      <div className="relative">
        <img
          src={profileImg}
          className="w-[12em] md:w-[20em] absolute z-50 top-[8.3em] md:top-[16.5em] left-[1em]"
          alt="profileImg"
        />
        <img src={rect} alt="Img" />
      </div>
    </div>
  );
};

export default FivthComp;

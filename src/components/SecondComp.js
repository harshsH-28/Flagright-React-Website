import React from "react";
import mainChar from "../assets/secondComp/Rectangle 129.png";
import rect from "../assets/secondComp/Rectangle 161.png";
import riskImg from "../assets/secondComp/Group 9222.png";
import screenFrame from "../assets/secondComp/Frame 9341.png";

const FirstComp = () => {
  return (
    <div className="w-full min-h-[25vh] bg-[#f8fafe] text-[#131f40] px-8 py-20 flex flex-col justify-center items-center md:flex-row">
      <div className="flex flex-col">
        <h1 className="text-4xl font-semibold md:font-bold">
          Combine screening with transaction monitoring, customer risk
          assessment & more.
        </h1>
        <ul className="mt-5 ml-8">
          <li className="flex flex-col">
            <p className="text-lg mb-5">
              Real-time, risk-based transaction monitoring for AML compliance &
              fraud prevention.
            </p>
            <a
              href="/"
              className="mb-8 font-semibold text-[#1169f9]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more {">"}
            </a>
          </li>
          <li className="flex flex-col">
            <p className="text-lg mb-5">
              Transform customer risk assessment for onboarding & transaction
              risk, get rid of spreadsheets.
            </p>
            <a
              href="/"
              className="mb-8 font-semibold text-[#1169f9]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more {">"}
            </a>
          </li>
        </ul>
      </div>
      <div className="flex relative">
        <img src={mainChar} className="absolute" alt="mainCharacter" />
        <img
          src={screenFrame}
          className="absolute"
          alt="Screening and Sanctions"
        />
        <img src={riskImg} alt="Risk Scoring" />
        <img src={rect} className="absolute" alt="Rectangle" />
      </div>
    </div>
  );
};

export default FirstComp;

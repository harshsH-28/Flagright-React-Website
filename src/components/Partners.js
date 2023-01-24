import React from "react";
import ca from "../assets/partners/comply_advantage_logo.png";
import trm from "../assets/partners/trm_logo.png";
import cj from "../assets/partners/clear_junction_logo.png";
import coin from "../assets/partners/coinfirm_logo.png";
import ap from "../assets/partners/aiprise_logo.png";
import rapyd from "../assets/partners/rapyd_logo.png";
import revolut from "../assets/partners/revolut.52867e35.svg";
import aws from "../assets/partners/aws.cd17f65c.svg";
import palantir from "../assets/partners/palantir.ee61f691.svg";
import fb from "../assets/partners/floridablue.79657e29.svg";

const Partners = () => {
  return (
    <div className="w-full min-h-[25vh] bg-[#ffffff] text-[#131f40] px-8 py-20 flex flex-col justify-center items-center">
      <div className="mb-20">
        <h1 className="text-4xl mb-20 text-center text-[#131f40] font-bold">
          Our partners
        </h1>
        <div className="flex items-center">
          <div className="mr-20 md:flex md:justify-center md:items-baseline">
            <img
              src={ca}
              className="mb-8 md:mr-20"
              height="1em"
              width="190em"
              alt=""
            />
            <img
              src={trm}
              className="mb-8 md:mr-20"
              height="1em"
              width="190em"
              alt=""
            />
            <img src={cj} height="1em" width="190em" alt="" />
          </div>
          <div className="md:flex">
            <img
              src={coin}
              className="mb-8 md:mr-20"
              height="1em"
              width="190em"
              alt=""
            />
            <img
              src={ap}
              className="mb-8 md:mr-20"
              height="1em"
              width="190em"
              alt=""
            />
            <img src={rapyd} height="1em" width="190em" alt="" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-4xl mb-5 text-center text-[#131f40] font-bold">
          Expert team
        </h1>
        <p className="text-center mb-20 text-[#142040] text-lg">
          Our team has built anomaly detection & financial crime solutions in
          the world's most innovative companies
        </p>
        <div className="flex items-center justify-center">
          <div className="mr-20 md:flex md:justify-center md:items-baseline">
            <img src={revolut} className="mb-8 md:mr-20" alt="" />
            <img src={aws} alt="" />
          </div>
          <div className="md:flex">
            <img src={palantir} className="mb-8 md:mr-20" alt="" />
            <img src={fb} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;

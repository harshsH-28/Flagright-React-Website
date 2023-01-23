import React from "react";

const PO = (props) => {
  return (
    <div className={`mt-20 text-[#131f40] ${props.syl}`}>
      <img src={props.image} className="mb-2" alt="orgImg" />
      <h1 className="font-bold text-xl text-[#ffffff]">{props.heading}</h1>
      <p className="text-lg text-[#ffffff]">{props.text}</p>
    </div>
  );
};

export default PO;

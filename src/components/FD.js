import React from "react";

const FD = (props) => {
  return (
    <div className="mt-20 text-[#ffffff]">
      <img src={props.image} className="mb-2" alt="Img" />
      <h1 className="font-bold text-xl mb-2">{props.heading}</h1>
      <p className="text-lg">{props.text}</p>
    </div>
  );
};

export default FD;

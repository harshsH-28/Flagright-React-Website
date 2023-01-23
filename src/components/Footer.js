import React from "react";
import frLogo from "../assets/logo_blue.png";

const Footer = () => {
  return (
    <div className="h-[57em] bg-[#ebf2ff] py-20 px-8 flex flex-col flex-wrap">
      <div className="mb-10">
        <img src={frLogo} className="w-40 mb-4" alt="Flagright Logo" />
        <p>&copy; 2022 Flagright</p>
      </div>
      <div>
        <div className="mb-10">
          <h1 className="text-[#333f5d] font-semibold text-lg mb-4">
            Platform
          </h1>
          <ul className="text-[#2a374d]">
            <li className="mb-2">Real-time transaction monitoring</li>
            <li className="mb-2">Customer risk assessment</li>
            <li className="mb-2">Sanctions, PEP, AM screening</li>
            <li className="mb-2">ID verification</li>
          </ul>
        </div>
        <div className="mb-10">
          <h1 className="text-[#333f5d] font-semibold text-lg mb-4">
            Integrations
          </h1>
          <ul className="text-[#2a374d]">
            <li>Blockchain analytics</li>
          </ul>
        </div>
        <div className="mb-10">
          <h1 className="text-[#333f5d] font-semibold text-lg mb-4">
            Advisory Services
          </h1>
          <ul className="text-[#2a374d]">
            <li>Launchpad</li>
          </ul>
        </div>
        <h1 className="text-[#333f5d] font-semibold text-lg mb-4">
          Privacy Policy
        </h1>
        <h1 className="text-[#333f5d] font-semibold text-lg mb-4">Terms</h1>
        <h1 className="text-[#333f5d] font-semibold text-lg mb-4">Jobs</h1>
        <h1 className="text-[#333f5d] font-semibold text-lg mb-4">
          Cookie Policy
        </h1>
        <h1 className="text-[#333f5d] font-semibold text-lg mb-4">Imprint</h1>
      </div>
      <div>
        <h1 className="text-[#333f5d] font-semibold text-lg mb-4">Follow us</h1>
        <div className="flex">
          <img src="" className="mr-4" alt="L" />
          <img src="" className="mr-4" alt="T" />
          <img src="" alt="M" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

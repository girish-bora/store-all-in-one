import React from "react";

import logo from "../../assets/images/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="mt-4">
      <div>
        <hr className="h-px w-full bg-gray-400 opacity-50 outline-none border-none" />
      </div>
      <div className="flex items-center justify-around pt-4">
        <div>
          <img className="h-20" src={logo} alt="logo" />
        </div>
        <div>
          <p className="text-black text-sm font-inter no-underline normal-case">
            Copyright &copy; {year} page by iniT.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

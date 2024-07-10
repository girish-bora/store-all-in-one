import React from "react";

import logo from "../../assets/images/logo.png";
import logoDark from "../../assets/images/logodark.png";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const year = new Date().getFullYear();

  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className="py-2 dark:bg-blue-gray-900 bg-blue-gray-300">
      <div>
        <hr className="h-px w-full bg-gray-400 hidden dark:hidden opacity-50 outline-none border-none" />
      </div>
      <div className="flex items-center justify-around pt-4">
        <div>
          <img className="h-20" src={darkMode ? logoDark : logo} alt="logo" />
        </div>
        <div>
          <p className="text-black dark:text-white text-sm font-inter no-underline normal-case">
            {t("footer.copy")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

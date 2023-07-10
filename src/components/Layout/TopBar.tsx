import React from "react";

import { Bars3Icon } from "@heroicons/react/24/solid";

interface Props {
  showNav: Boolean;
  setShowNav: (value: boolean) => void;
}

const TopBar: React.FC<Props> = ({ setShowNav, showNav }) => {
  return (
    <>
      <div
        className={`fixed w-full flex h-[60px] items-center justify-start border-b border-[#23252c] px-6 transition-all ease-in-out duration-[400ms] ${
          showNav ? "ml-[250px]" : ""
        }`}
      >
        <div className="pl-4 md:px-16">
          <Bars3Icon
            className="h-8 w-8 text-gray-500 cursor-pointer"
            onClick={() => setShowNav(!showNav)}
          />
        </div>
      </div>
    </>
  );
};

export default TopBar;

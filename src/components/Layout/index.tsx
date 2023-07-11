import React, { ReactNode, useState, useEffect, Fragment, use } from "react";
import TopBar from "./TopBar";
import { Transition } from "@headlessui/react";
import SideBar from "./SideBar";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (innerWidth <= 640) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener("resize", handleResize);
    }

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Transition
        as={Fragment}
        show={showNav}
        enter="transform transition duration-[400ms]"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition duration-[400ms] ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <SideBar showNav={showNav} isMobile={isMobile} />
      </Transition>

      <TopBar showNav={showNav} setShowNav={setShowNav} />

      <main
        className={`pt-16 transition-all ease-in-out duration-[400ms] ${
          showNav && !isMobile ? "ml-[250px]" : ""
        }`}
        
        onClick={() => {
          if (isMobile) {
            setShowNav(false);
          }
        }}
      >
        <div className="px-4 md:px-16">{children}</div>
      </main>
    </>
  );
};

export default Layout;

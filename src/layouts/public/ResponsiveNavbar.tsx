import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const ResponsiveNavbar = () => {
  const [showNav, setShowNav] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navARR = [
    { title: "Home", link: "/" },
    { title: "About", link: "/" },
    { title: "Services", link: "/" },
    {
      title: "Resume",
      link: "/",
    },
    {
      title: "Portfolio",
      link: "/",
    },
  ];
  const handleClose = (e: any) => {
    e.target.dataset.closesidebar && setShowNav(false);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="main-container relative flex h-[4.5rem] items-center gap-1 justify-between py-2 shadow">
      <div className="h-full w-full">
        <Link href="/">
          <img src="/logo.png" alt="logo" className="h-full w-auto" />
        </Link>
      </div>
      <div className="flex items-center justify-end gap-1">
        <div onClick={() => setShowNav(!showNav)} className="z-20">
          {showNav ? (
            <AiOutlineClose className="text-red-700 text-xl" />
          ) : (
            <AiOutlineMenu />
          )}
        </div>
      </div>

      <div
        id="nav-menu"
        data-closesidebar
        className={`absolute top-0 left-0 z-10 flex h-screen w-screen bg-black/20 transition-all duration-500 ease-in-out lg:-left-[1.7rem] ${
          showNav ? "translate-x-0" : "-translate-x-full"
        } `}
        onClick={handleClose}
      >
        <div className="z-20 w-[65vw] overflow-y-auto font-semibold bg-white py-4 px-3">
          <div className="flex w-full justify-start pt-2 pb-4">
            <Link href="/">
              <img src="/logo.png" alt="logo" className="w-14" />
            </Link>
          </div>
          <hr />
          <div className="flex flex-col gap-2 pt-2 items-start">
            {navARR.map((item, i) => (
              <div
                key={i}
                className="relative group hover:text-theme3 text-black "
              >
                <Link href={item?.link} rel="noopener noreferrer">
                  <p className="flex items-center gap-4">{item.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;

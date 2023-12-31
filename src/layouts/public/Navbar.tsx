/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Navbar = () => {
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
    <>
      <section className="sticky top-0 z-[999] hidden bg-white lg:block shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        <div className="main-container flex justify-between items-center py-3 ">
          <Link href="/">
            <img src="/logo.jpg" alt="" className=" w-20" />
          </Link>
          <div className="flex gap-8">
            {navARR.map((item, i) => (
              <div
                key={i}
                className="relative group hover:text-theme3 text-black"
              >
                <Link href="/" rel="noopener noreferrer">
                  <p className="flex items-center gap-4">{item.title}</p>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-6 items-center">
            {/* <Link href="#contact">
              <div className="group flex items-center gap-3 cursor-pointer bg-secondary rounded-md hover:bg-theme2 common-transition hover: px-8 py-2 text-white hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                <MdCall className="common-transition group-hover:rotate-12" />
                CONTACT US
              </div>
            </Link> */}
          </div>
        </div>
      </section>

      {/* --------- Responsive Navbar----------- */}
      <section className="sticky top-0 z-[999] block bg-white lg:hidden">
        <ResponsiveNavbar />
      </section>
    </>
  );
};

export default Navbar;

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import ResponsiveNavbar from "./ResponsiveNavbar";
import Button from "@/components/home/Buttton";

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
            <img src="/logo.jpg" alt="" className="w-32" />
          </Link>
          <div className="flex gap-8">
            {navARR.map((item, i) => (
              <div
                key={i}
                className="relative group hover:text-secondary text-black"
              >
                <Link href="/" rel="noopener noreferrer">
                  <p className="flex items-center gap-4">{item.title}</p>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-6 items-center">
            <Link href="#contact">
              <Button title={"Contact Us"} />
            </Link>
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

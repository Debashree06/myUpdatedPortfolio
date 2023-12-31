/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Footer = () => {
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

  return (
    <footer className="w-full">
      <section className=" bg-black w-full pt-10 md:pt-20  md:rounded-tl-[5rem]   lg:rounded-tl-[8rem] ">
        <article className="main-container grid gap-4 grid-cols-1 md:grid-cols-2 pb-12  w-full lg:grid-cols-4">
          <div className="flex flex-col">
            <div className="relative w-fit uppercase flex gap-4">
              <span className="text-2xl md:text-xl font-bold text-white">
                Quick Links
              </span>
              <div className="absolute -bottom-2 w-full flex gap-1 items-center">
                <div className="w-1/2 h-1 bg-white hover:text-primary  rounded-lg "></div>
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-8">
              {navARR.map((item, i) => (
                <div
                  key={i}
                  className="common-transition font-semibold text-white hover:text-theme3  hover:border-b border-b-theme3 hover:translate-x-1 w-fit"
                >
                  <Link href={item.link}>{item.title}</Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-4 lg:gap-7">
              <div className="relative w-fit uppercase flex gap-4">
                <span className="text-2xl md:text-xl font-bold text-white">
                  Services
                </span>
                <div className="absolute -bottom-2 w-full flex gap-1 items-center">
                  <div className="w-1/2 h-1 bg-white hover:text-primary  rounded-lg "></div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href=""
                  className="common-transition font-semibold  hover:translate-x-1 w-fit text-white hover:text-theme3  hover:border-b border-b-theme3"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href=""
                  className="common-transition font-semibold  hover:translate-x-1 w-fit text-white hover:text-theme3  hover:border-b border-b-theme3"
                >
                  Privacy Policy
                </Link>
                <h1></h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-6xl">
              Let's Make Consultation With Us!
            </h1>
          </div>
        </article>
        <div className="main-container flex items-center justify-between md:flex-row flex-col border-t gap-4 py-7">
          <div className="flex py-3 lg:flex-row flex-col lg:justify-between items-center text-white tracking-wide gap-3 ">
            <small className="text-center lg:text-start">
              &copy; {new Date().getFullYear()} | All rights reserved
            </small>
            <small className="flex md:flex-row flex-col justify-center items-center gap-1">
              Developed & Designed By{"    "}
              <Link
                href=""
                target=" "
                className="hover:cursor-pointer text-quinary"
              >
                {" "}
                Debashree Jena
              </Link>{" "}
            </small>
          </div>
          {/* </section> */}
        </div>
      </section>
    </footer>
  );
};

export default Footer;

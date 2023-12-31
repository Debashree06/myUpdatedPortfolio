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
      <section className="bg-secondary w-full pt-10 md:pt-20  md:rounded-tl-[5rem]   lg:rounded-tl-[8rem] ">
        <article className="main-container grid gap-4 grid-cols-1 md:grid-cols-2 pb-12  w-full lg:grid-cols-4">
          <div className="w-3/4 flex flex-col gap-3">
            <div className="hotel-logo w-44">
              <Link href="/">
                <img src="/White_one.png" alt="" className="" />
              </Link>
            </div>
            <p className="text-base text-white pt-3 ">
              GROWING MIND is dedicated to empower children with Autism Spectrum
              Disorders and other behavioral and developmental disorder.
            </p>
          </div>
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
                  Privacy Policy
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
            <div className="flex flex-col gap-4 lg:gap-7">
              <div className="relative w-fit uppercase flex gap-4">
                <h1 className="text-2xl md:text-xl font-bold text-white">
                  Contact US
                </h1>
                <div className="absolute -bottom-2 w-full flex gap-1 items-center">
                  <div className="w-1/2 h-1 bg-white hover:text-primary  rounded-lg "></div>
                </div>
              </div>
              <div className="flex flex-col font-semibold gap-4">
                <p className="text-white tracking-wide">
                  Reach out to us for support and assistance
                </p>
                <Link
                  href="mailto:contact@thegrowingmind.in"
                  className="!w-fit"
                >
                  <div className="flex gap-2 items-center">
                    {/* <Email className="text-red-700" /> */}
                    <div className="w-8">
                      <img src="/mail.png" alt="" />
                    </div>
                    <div className="text-sm text-white hover:text-theme3">
                      contact@thegrowingmind.in
                    </div>
                  </div>
                </Link>

                <Link href="tel:+91 8968400889" className="!w-fit">
                  <div className="flex gap-2 items-center">
                    {/* <Call className="text-green-800" /> */}
                    <div className="w-8">
                      <img src="/telephone.png" alt="" />
                    </div>
                    <div className="text-sm text-white hover:text-theme3">
                      +91 8968400889
                    </div>
                  </div>
                </Link>

                {/* <p className="flex gap-2 items-center">
                  <LocationOn className="text-blue-900" />
                  <span className="text-sm hover:text-theme3 text-white">
                    NH-5,Bamphakuda Phulnakhara,Cuttack-754001
                  </span>
                </p> */}
              </div>
            </div>
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

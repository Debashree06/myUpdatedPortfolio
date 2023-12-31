/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { LuFacebook } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [loading, setloading] = useState(false);
  // const handleSubscribe = async () => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   const isValid = emailRegex.test(email);
  //   if (isValid) {
  //     // console.log(`Subscribing with email: ${email}`);
  //     setEmail("");
  //     setIsValidEmail(true);
  //     try {
  //       setloading(true);
  //       await database.push("newsletter", {
  //         email,
  //       });
  //       setloading(false);
  //       Swal.fire(
  //         "Success",
  //         "You are successfully subscribed to our newsletter.",
  //         "success"
  //       );
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     setIsValidEmail(false);
  //   }
  // };
  const handleSubscribe = () => {};
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
      <section className="bg-black w-full pt-10 md:pt-20  md:rounded-tl-[5rem]   lg:rounded-tl-[8rem] ">
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
                  className="common-transition font-semibold text-white hover:text-secondary  hover:border-b border-b-secondary hover:translate-x-1 w-fit"
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
                  className="common-transition font-semibold  hover:translate-x-1 w-fit text-white hover:text-secondary  hover:border-b border-b-secondary"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href=""
                  className="common-transition font-semibold  hover:translate-x-1 w-fit text-white hover:text-secondary  hover:border-b border-b-secondary"
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
              <div className="flex flex-col font-semibold gap-6">
                <p className="text-white tracking-wide">
                  Reach out to us for support and assistance
                </p>
                <div className="text-sm text-white hover:text-secondary">
                  jenadeba07@gmail.com
                </div>
                <div className="flex gap-3">
                  <Link href="" className="!w-fit">
                    <div className="bg-slate-400 flex items-center justify-center hover:bg-secondary rounded-md w-10 h-10">
                      <LuFacebook className="text-white text-xl" />
                    </div>
                  </Link>
                  <Link href="" className="!w-fit">
                    <div className="bg-slate-400 flex items-center justify-center hover:bg-secondary rounded-md w-10 h-10">
                      <LuLinkedin className="text-white text-xl" />
                    </div>
                  </Link>
                  <Link href="" className="!w-fit">
                    <div className="bg-slate-400 flex items-center justify-center hover:bg-secondary rounded-md w-10 h-10">
                      <LuInstagram className="text-white text-xl" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="  rounded-lg p-3">
              <h3 className="font-semibold text-4xl text-white  w-fit mb-4">
                Let's Make Consultation With Us!
              </h3>
              <div className="flex items-center py-2">
                <input
                  className={`border-none w-full text-black py-1 px-2 rounded-l-lg bg-white/80 focus:outline-none text-base ${
                    isValidEmail ? "" : "border-red-500"
                  }`}
                  type="text"
                  placeholder="name@email.com"
                  aria-label="Full name"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsValidEmail(true); // Reset validation when input changes
                  }}
                />
                <button
                  className="px-3 py-1 bg-secondary rounded-r-lg hover:bg-secondary/80"
                  type="button"
                  onClick={() => handleSubscribe()}
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
              {!isValidEmail && (
                <p className="text-red-500 bg-gray-800 rounded-lg p-2 text-sm mt-1">
                  Please enter a valid email address.
                </p>
              )}
            </div>
          </div>
        </article>
        <div className="flex flex-col"></div>
      </section>
    </footer>
  );
};

export default Footer;

import React from "react";
import Link from "next/link";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { LuLinkedin } from "react-icons/lu";
import { TbBrandYoutube } from "react-icons/tb";

import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin, BsPinterest } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { RiHotelLine, RiTwitterXFill } from "react-icons/ri";
import { HeroAnimatedText } from "../cards";

const HeroSection = () => {
  const onlineSite = [
    {
      link: "https://www.facebook.com/SearchingYardAshutoshMohapatra/",
      icon: <FiFacebook />,
    },
    {
      link: "https://www.instagram.com/_ashutoshmohapatra_/",
      icon: <FaInstagram />,
    },
    {
      link: "https://www.linkedin.com/in/searchingyardashutosh/",
      icon: <LuLinkedin />,
    },
    {
      link: "https://www.youtube.com/channel/UCIm8hFwJVuiJbRe8S4ghiCQ",
      icon: <TbBrandYoutube />,
    },
  ];
  return (
    <section className="py-12  bg-primary">
      <aside className="main-container  hidden md:flex flex-col lg:flex-row items-center gap-8 lg:gap-20 2xl:gap-24">
        <div className="lg:w-3/5 w-full flex flex-col gap-24">
          <div className="flex flex-col lg:gap-6 gap-3">
            <h1 className="flex items-start leading-7 font-light tracking-wide">
              I'm glad you're here.
            </h1>
            <p className="text-black font-semibold lg:text-5xl text-3xl">
              Hi, 👋 I’m{" "}
              <span className="text-secondary lg:text-5xl text-3xl font-semibold">
                Debashree Jena
              </span>
            </p>
            <div className="flex items-center gap-2">
              <p className="text-secondary lg:text-5xl text-3xl font-semibold">
                a
              </p>
              <HeroAnimatedText />
            </div>
            <p className="text-md leading-7 text-justify">
              I'm a passionate full stack developer with a love for creating
              innovative and user-friendly web applications. With a background
              in 1year experience, I have honed my skills in both front-end and
              back-end development. I'm also proficient in utilizing modern
              front-end frameworks such as React, Angular, or Vue.js to build
              dynamic and interactive web applications | Let's embark on a
              journey of endless possibilities!
            </p>
          </div>
          <article className="flex flex-col gap-5">
            <h1 className="flex items-start leading-7 font-semibold tracking-wide">
              FIND ME
            </h1>
            <div className="flex gap-6">
              {onlineSite.map((cards, i) => (
                <div key={i} className="">
                  <Link
                    href={cards.link}
                    className="cursor-pointer text-white hover:text-secondary hover:bg-white bg-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 rounded-md w-12 h-12 items-center justify-center flex"
                  >
                    <div className="text-xl">{cards.icon}</div>
                  </Link>
                </div>
              ))}
            </div>
          </article>
          {/* <article>
              <h1>BEST SKILLS ON </h1>
            </article> */}
        </div>
        <div className="lg:w-2/5 w-full relative">
          <div className="design absolute w-full h-4/5 bottom-0 left-14 z-10"></div>
          <img src="/slide3.png" alt="ceo" className="relative z-20" />
        </div>
      </aside>
      <aside className="md:hidden block main-container">
        <div className="lg:w-2/5 w-full relative">
          <div className="design absolute w-full h-4/5 bottom-0 left-0 z-10"></div>
          <img src="/logo2.png" alt="ceo" className="relative z-20" />
        </div>
        <div className="lg:w-3/5 w-full flex flex-col gap-32">
          <div className="flex flex-col lg:gap-6 gap-3">
            <h1 className="flex items-start leading-7 font-light tracking-wide">
              I'm glad you're here.
            </h1>
            <p className="text-black font-semibold lg:text-5xl text-3xl">
              Hi, I’m 👋
              <span className="text-secondary lg:text-5xl text-3xl font-semibold">
                Debashree Jena
              </span>
            </p>
            <div className="flex items-center gap-2">
              <p className="text-secondary lg:text-5xl text-3xl font-semibold">
                a
              </p>
              <HeroAnimatedText />
            </div>
            <p className="text-md leading-7 text-justify">
              Founder & CEO of SearchingYard Group | Passionate visionary
              driving innovation in the digital landscape | Transforming ideas
              into reality | Leading a dynamic team to redefine the search
              experience | Tech enthusiast with a commitment to excellence. |
              Striving to connect people with information seamlessly | Let's
              embark on a journey of endless possibilities!
            </p>
          </div>
          <article className="flex flex-col gap-5">
            <h1 className="flex items-start leading-7 font-semibold tracking-wide">
              FIND ME
            </h1>
            <div className="flex gap-6">
              {onlineSite.map((cards, i) => (
                <div key={i} className="">
                  <Link
                    href={cards.link}
                    className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer hover:text-white hover:bg-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 rounded-md w-12 h-12 items-center justify-center flex"
                  >
                    <div className="text-xl">{cards.icon}</div>
                  </Link>
                </div>
              ))}
            </div>
          </article>
          {/* <article>
              <h1>BEST SKILLS ON </h1>
            </article> */}
        </div>
      </aside>
    </section>
  );
};

export default HeroSection;

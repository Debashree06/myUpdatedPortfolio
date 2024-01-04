import { motion } from "framer-motion";
import React from "react";
import { Button } from "..";

const About = () => {
  const Product_Arr = [
    {
      id: 1,
      des: "Expertise in both front-end and back-end development, with proficiency in languages such as HTML, CSS, JavaScript, Java, and more.",
      image: "/tabLogoOne.png",
    },
    {
      id: 2,
      des: "Experience in developing responsive and user-friendly web applications and websites.",
      image: "/tabLogoTwo.png",
    },
    {
      id: 3,
      des: "Ability to work with various frameworks and libraries, such as React, Next. js, Node.js, and MongoDb.",
      image: "/tabLogoThree.png",
    },
  ];

  return (
    <section className="bg-white overflow-hidden">
      <article className="main-container top-spacing  flex flex-col gap-12">
        <div className="flex flex-col justify-center items-center gap-5 lg:gap-8">
          <h1 className="text-4xl text-secondary font-semibold">About Us</h1>
          {/* <p className="common-title text-center">
            A Complete Pack Of Ground Breaking Products
          </p> */}
          <p className="text-center text-base w-full lg:w-1/2">
            We deliver the most transforming & futuristic SAAS & Cloud based
            platform that have the power of delivering the best to your
            business.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-12 lg:gap-20 2xl:gap-4 w-full">
            <div className="col-span-6 lg:col-span-6 flex flex-col justify-center items-center">
              <motion.img
                viewport={{ once: true }}
                initial={{ scale: 1, opacity: 0, x: -300 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                exit={{ scale: 0, opacity: 0, y: 20 }}
                src="/aboutFourImg.png"
                className="w-2/3"
              />
            </div>
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-10 md:gap-14 justify-center">
              {Product_Arr.map((_, i) => (
                <motion.div
                  viewport={{ once: true }}
                  initial={{ scale: 1, opacity: 0, x: 300 }}
                  whileInView={{ scale: 1, opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.4, duration: 1 }}
                  exit={{ scale: 0, opacity: 0, y: 20 }}
                  key={i}
                  className="flex gap-6"
                >
                  <div className="rounded-md grid place-items-center bg-theme w-14 h-14">
                    <img src={_?.image} className="w-4" />
                  </div>
                  <div className="flex flex-col gap-1 w-[calc(100%-4.5rem)]">
                    <p className="text-xs md:text-base text-black font-normal">
                      {_?.des}
                    </p>
                  </div>
                </motion.div>
              ))}
              <Button title={"Download CV"} />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;

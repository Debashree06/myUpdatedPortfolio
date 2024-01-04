import React from "react";

const Services = () => {
  const serviceArray = [
    {
      img: "responsive.png",
      title: "Web Development",
      des: "Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only text generator treatment contrary.",
    },
    {
      img: "app-development.png",
      title: "Web Design",
      des: "Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only text generator treatment contrary.",
    },
    {
      img: "development.png",
      title: "Single-page application ",
      des: "Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only text generator treatment contrary.",
    },
    {
      img: "trial.png",
      title: "Real-time application ",
      des: "Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only text generator treatment contrary.",
    },
  ];
  return (
    <section className="main-container  top-spacing">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex items-center justify-center gap-2">
          <img src="/orangeDot.png" alt="w-10 h-10" />
          <p className="text-md">Services</p>
        </div>
        <h1 className="text-5xl text-black font-extrabold">My Services</h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-5 py-16">
        {serviceArray.map((card, i) => (
          <div
            key={i}
            className="flex items-start flex-col gap-4 border rounded-md border-primary p-6 py-10 hover:bg-primary cursor-pointer"
          >
            <div className="flex items-center w-16 h-16 rounded-md bg-primary justify-center">
              <img className="w-8 h-8" src={card.img} alt="app" />
            </div>
            <h1 className="text-lg font-semibold">{card.title}</h1>
            <p className="text-sm text-gray-600">{card.des}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

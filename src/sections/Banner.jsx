import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import banner1 from "../assets/banner1.jpg";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  });
  return (
    <>
      <section
        id="gallery"
        className="w-full bg-black h-fit flex justify-between items-center text-white px-10 lg:px-40 py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${banner1})` }}
      >
        <div className="flex flex-col justify-center items-start gap-8 w-full">
          <div
            data-aos="zoom-in"
            id="box-circle"
            className="bg-green-500 p-12 rounded-full flex justify-center items-center flex-col gap-4 w-60 mt-6"
          >
            <h1 className="text-black font-bold text-6xl">40%</h1>
            <h1 className="text-black font-bold text-xl text-center">
              BUSINESS <br /> LUNCH
            </h1>
          </div>
          <h1
            data-aos="slide-up"
            data-aos-delay="300"
            className="lg:text-6xl text-5xl font-semibold"
          >
            Keep up with us
          </h1>
          <p
            data-aos="slide-up"
            data-aos-delay="400"
            className="text-xl lg:text-2xl font-semibold"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ex
            voluptatum incidunt vero ipsa, quasi quaerat nesciunt perspiciatis
            similique odit nam tempore nulla veritatis quia perferendis laborum?
            Minima, quaerat veritatis.
          </p>
          <div
            data-aos="slide-right"
            data-aos-delay="600"
            id="form"
            className="flex-flex-col lg:flex-row justify-start items-start w-full gap-6 mt-3"
          >
            <input
              type="text"
              className="p-4 text-black font-normal w-full lg:w-[50%] rounded-full"
              placeholder="Enter Valid Email"
            />
            <button
              type="submit"
              className="bg-green-500 hover-bg-orange-500 px-10 py-4 rounded-full text-black font-bold text-lg"
            >
              SEND
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

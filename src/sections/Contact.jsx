import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import phone from "../assets/icons/phone.svg";
import mail from "../assets/icons/mail.svg";
import map from "../assets/icons/map.svg";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  });

  return (
    <section
      id="contact"
      className="bg-slate-950 w-full px-20 py-20 flex flex-col lg:flex-row justify-around items-center gap-16"
    >
      <div
        data-aos="slide-left"
        data-aos-delay="400"
        className="flex flex-col justify-center items-center gap-4"
      >
        <div
          id="icon-box"
          className="bg-green-500 p-4 rounded-full hover:bg-orange-500 cursor-pointer"
        >
          <img src={phone} alt="phone icon" width={40} height={40} />
        </div>
        <h1 className="text-white font-bold text-2xl uppercase">Call Us</h1>
        <p className="text-white font-normal text-xl text-center ">
          Mon-Fri :- 8AM to 7PM
        </p>
        <p className="text-orange-500 underline text-xl text-center font-bold cursor-pointer">
          +91 9173325960
        </p>
      </div>

      <div
        data-aos="slide-up"
        data-aos-delay="500"
        className="flex flex-col justify-center items-center gap-4"
      >
        <div
          id="icon-box"
          className="bg-green-500 p-4 rounded-full hover:bg-orange-500 cursor-pointer"
        >
          <img src={mail} alt="phone icon" width={40} height={40} />
        </div>
        <h1 className="text-white font-bold text-2xl uppercase">Mail Us</h1>
        <p className="text-white font-normal text-xl text-center ">
          Mon-Fri :- 8AM to 7PM
        </p>
        <p className="text-orange-500 underline text-xl text-center font-bold cursor-pointer">
          yatharthzinzuwadia@gmail.com
        </p>
      </div>

      <div
        data-aos="slide-right"
        data-aos-delay="600"
        className="flex flex-col justify-center items-center gap-4"
      >
        <div
          id="icon-box"
          className="bg-green-500 p-4 rounded-full hover:bg-orange-500 cursor-pointer"
        >
          <img src={map} alt="phone icon" width={40} height={40} />
        </div>
        <h1 className="text-white font-bold text-2xl uppercase">Visit us!</h1>
        <p className="text-white font-normal text-xl text-center ">
          Mon-Fri :- 8AM to 7PM
        </p>
        <p className="text-orange-500 underline text-xl text-center font-bold cursor-pointer">
          Ahmedabad
        </p>
      </div>
    </section>
  );
};

export default Contact;

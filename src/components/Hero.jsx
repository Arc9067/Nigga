import React from "react";
import person1 from "../assets/person1.svg";
import person2 from "../assets/person2.svg";
import person3 from "../assets/person3.svg";

function Hero() {
  return (
    <section id="hero" className="py-32 w-full ">
      <div className="container  flex justify-center flex-col items-center">
        <h1 className="md:text-7xl text-6xl lg:text-8xl uppercase text-center">
          Get your nigga certificate now
        </h1>

        <div className="flex justify-center items-center gap-6 flex-col lg:flex-row mt-6">
          <img src={person1} alt="nigga 1" className="w-[25rem]" />
          <img src={person2} alt="nigga 2" className="w-[25rem]" />
          <img src={person3} alt="nigga 3" className="w-[25rem]" />
        </div>

        <div className="flex flex-col gap-8 juce items-center">
          <p className="text-2xl break-all text-center mt-10">
            7u6WirUYbf3kJdZQoPTCYjgU5rpVg21LuXLKmmCUpump
          </p>
          <a
            href=""
            className="w-[266px] h-[70px] p-[5px] bg-white rounded-full justify-center items-center inline-flex"
          >
            <div className="grow shrink basis-0 self-stretch px-8 py-4 bg-[#339762] rounded-[100px] shadow justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-xl font-normal font-['Lucky Coin'] leading-7">
                Buy Now
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

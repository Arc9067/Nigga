import React, { useState } from "react";
import cert from "../assets/certificate.svg";
import html2canvas from "html2canvas";

function Gen() {
  const [name, setName] = useState("Elon Musk");

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setName(inputValue === "" ? "Cool Nigga" : inputValue);
  };

  const downloadImage = () => {
    const element = document.getElementById("certificateimg");
    html2canvas(element).then((canvas) => {
      const link = document.createElement("a");
      link.download = `${name}-certificate.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return (
    <section id="gen" className="py-12 w-full">
      <div className="container flex justify-center items-center flex-col">
        <div className="text-center text-white text-5xl md:text-7xl font-normal font-['Lucky Coin']">
          Claim your certificate
        </div>

        <div id="certificateimg" classname="mt-28">
          <div className="relative w-full flex justify-center items-center pointer-events-none">
            <img src={cert} alt="Certificate" className="h-[300px] lg:h-auto" />
            <h1 className="font-mono absolute top-[160px] text-2xl lg:top-[320px] inline text-[#6D6D6D] lg:text-6xl text-center capitalize">
              {name}
            </h1>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-center items-center gap-8">
          <input
            className="bg-transparent outline outline-[#D9D9D9] py-3 px-7 font-MonoSans rounded-md focus:outline-[#D9D9D9] border-none"
            placeholder="Enter your name"
            value={name === "Cool Nigga" ? "" : name}
            onChange={handleChange}
          />

          <div
            onClick={downloadImage}
            className="cursor-pointer pl-px pb-1 bg-[#7396de] rounded-full justify-center items-center inline-flex"
          >
            <div className="grow shrink basis-0 h-[70px] px-2 pt-[5px] pb-1 bg-white rounded-full justify-center items-center inline-flex">
              <div className="grow shrink basis-0 self-stretch px-8 py-4 bg-[#339762] rounded-[100px] shadow justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-xl font-normal font-['Lucky Coin'] leading-7">
                  Save photo of certificate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gen;

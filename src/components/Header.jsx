import React from "react";
import x from "../assets/x.svg";
import screen from "../assets/screen.svg";
import telegram from "../assets/telegram.svg";
import dex from "../assets/dex.svg";

function Header() {
  return (
    <header className="py-4 absolute top-0 left-0 w-full">
      <div className="container py-2 lg:max-w-[950px] bg-[#339762] flex justify-between items-center rounded-3xl">
        <a href="" className="text-4xl">
          Nigga
        </a>
        <div className="flex items-center justify-center gap-5">
          <h3 className="uppercase">Join us</h3>
          <div className="flex justify-between items-center gap-3">
            {" "}
            <a href="">
              <img src={x} alt="" />
            </a>
            <a href="">
              <img src={telegram} alt="" />
            </a>
            <a href="">
              <img src={screen} alt="" />
            </a>
            <a href="">
              <img src={dex} alt="" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

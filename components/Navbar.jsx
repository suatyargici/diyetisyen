import Image from "next/image";
import React from "react";
import insta from "../public/images/insta.png";
import logo from "../public/images/logo.png";

const Navbar = () => {
  return (
    <div
      className="bg-navbar flex h-[295px]  w-full items-center justify-center [@media_(max-width:840px)]:h-[110px]"
      id="home"
    >
      <div className="flex justify-between h-[265px] min-w-[300px] max-w-[1180px] border-b-2 border-[#D8CA9D] [@media_(max-width:840px)]:h-[110px] ">
        <a href="/">
          <Image
            src={logo}
            alt="logo"
            className="h-[245px] w-[330px]  [@media_(max-width:840px)]:h-[100px] [@media_(max-width:840px)]:w-[100px]"
          />
        </a>
        <div className="flex md:flex-row flex-col max-[768px]:mt-3 items-center gap-x-5">
         
            <button className="hover:text-[#9BA17B] md:text-base text-[12px]">
              <a href="#hizmetler ">HİZMETLER</a>
            </button>

            <button className="hover:text-[#9BA17B] md:text-base text-[12px]">
              <a href="#iletisim">İLETİŞİM</a>
            </button>
        
          <div className="flex flex-col mt-2">
            <a
              href="https://www.instagram.com/dytsinemtan/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={insta}
                className=" md:h-[48px] md:w-[129px] w-[80px] h-[30px]"
                alt="instagram"
              />
            </a>
            <p className="font-bold ">Ataşehir</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

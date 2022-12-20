import React from "react";

import { BsWhatsapp } from "react-icons/bs";
import { RiMailSendFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import Image from "next/image";
import logo from "../public/images/logo.png";
import Link from "next/link";


const Footer = () => {
  return (
    <div className="flex h-[380px] w-full [@media_(max-width:840px)]:h-[560px]  justify-center [@media_(max-width:840px)]:items-center  bg-[#67A651] ">
      <div className="flex justify-between  relative h-[340px] [@media_(max-width:840px)]:h-[500px] [@media_(max-width:840px)]:items-center [@media_(max-width:840px)]:max-w-[300px] max-w-[1065px] border-b-2 border-black pb-3 [@media_(max-width:840px)]:flex-col ">
        <Link href="/">
        <Image
        src={logo}
        alt="instagram"
          className=" mt-[88px]  [@media_(max-width:840px)]:mt-7 [@media_(max-width:840px)]:h-[200px] [@media_(max-width:840px)]:w-[200px]   h-[220px] w-[346px] "
       
        />

        </Link>
      
{/* <Image 
src={insta}
width={346}
height={220}
className="absolute top-0 left-0"
/> */}
        <div className="[@media_(min-width:840px)]:mt-[110px] [@media_(max-width:840px)]:mt-5 ml-[88px] flex flex-col gap-y-6 text-white" id="iletisim">
          <p className="text-[15px] font-bold">İLETİŞİM</p>
          <a href="https://wa.me/905538210773" target="_blank" className="flex items-center  cursor-pointer gap-x-2 text-[15px]" rel="noreferrer">  <BsWhatsapp /> +90 553 821 07 73</a>
       
          
         
          <a href="mailto:dytsinemtan@gmail.com" target="_blank" className="flex items-center  cursor-pointer gap-x-2 text-[15px]"rel="noreferrer"> 
            <RiMailSendFill /> dytsinemtan@gmail.com
          </a>

        
          <a href="https://www.instagram.com/dytsinemtan/" target="_blank" className="flex items-center cursor-pointer gap-x-2 text-[15px]" rel="noreferrer">
            <AiOutlineInstagram /> @dytsinemtan
          </a>
        </div>

        <p className="absolute bottom-[-30px] z-10 text-lg font-bold" >
          2022 © Diyetisyen Sinem Tan
        </p>
      </div>
    </div>
  );
};

export default Footer;
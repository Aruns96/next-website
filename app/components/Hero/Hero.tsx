"use client";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import chaya from "@/public/images/chaya.jpeg";
import kattan from "@/public/images/katt.jpeg";
import Image from "next/image";
import { BiCycling } from "react-icons/bi";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const Hero = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={4000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
      showDots={true}
    >
      <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-blue-950 md:clip_path">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
          <Image src={chaya} alt="chaya" className="hidden md:block" />
          <div>
            <h1 className="text-[40px] font-semibold text-yellow-400">
            ചായ വേണോ ചായ.. 
            </h1>
            <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">
              Best <br /> ചായ Ever
            </h1>
            <p className="mt-[1rem] text-white text-opacity-70 text-[18px]">
              തേയിലയുപയോഗിച്ച് തയ്യാറാക്കുന്ന ഒരു തരം പാനിയമാണ് ചായ. വെള്ളം
              തിളപ്പിച്ച്‌ തേയിലപ്പൊടിയും ആവശ്യമെങ്കിൽ പാലും പഞ്ചസാരയും
              സുഗന്ധദ്രവ്യങ്ങളും ചേർത്തും ചായ തയ്യാറാക്കാം. ചൈനയിലാണ്‌ ചായയുടെ
              ഉത്ഭവമെന്ന്‌ പൊതുവേ വിശ്വസിക്കപ്പെടുന്നു.
            </p>
            <button className='mt-[2rem] px-8 py-3 text-[16px]  bg-green-500 transition-all duration-200 hover:bg-green-700
                 flex items-center rounded-md space-x-2 text-white'>
                    <span>
                         <BiCycling className='w-[1.7rem] h-[1.7rem]' />
                    </span>
                    <span className='font-bold'>
                         Order Now
                    </span>
                 </button>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-red-950 md:clip_path">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
          <Image src={kattan} alt="kattan" className="hidden md:block" />
          <div>
            <h1 className="text-[40px] font-semibold text-yellow-400">
            ചായ വേണോ ചായ.. 
            </h1>
            <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">
              Top <br /> ചായ Ever
            </h1>
            <p className="mt-[1rem] text-white text-opacity-70 text-[18px]">
              തേയിലയുപയോഗിച്ച് തയ്യാറാക്കുന്ന ഒരു തരം പാനിയമാണ് ചായ. വെള്ളം
              തിളപ്പിച്ച്‌ തേയിലപ്പൊടിയും ആവശ്യമെങ്കിൽ പാലും പഞ്ചസാരയും
              സുഗന്ധദ്രവ്യങ്ങളും ചേർത്തും ചായ തയ്യാറാക്കാം. ചൈനയിലാണ്‌ ചായയുടെ
              ഉത്ഭവമെന്ന്‌ പൊതുവേ വിശ്വസിക്കപ്പെടുന്നു.
            </p>
            <button className='mt-[2rem] px-8 py-3 text-[16px]  bg-blue-500 transition-all duration-200 hover:bg-green-700
                 flex items-center rounded-md space-x-2 text-white'>
                    <span>
                         <BiCycling className='w-[1.7rem] h-[1.7rem]' />
                    </span>
                    <span className='font-bold'>
                         Order Now
                    </span>
                 </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;

"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
const TypeWriterEffect = () => {
  return (
    <>
      <TypeAnimation
        sequence={[
          "A Frontend Developer",
          1000,
          "A Javacsript Developer",
          1000,
          "A React.Js Developer",
          1000,
          "A Next.Js Developer",
          1000,
        ]}
        wrapper="span"
        speed={50}
        className="text-[24px] sm:text-[22px] md:text-[35px] lg:text-[40px] xl:text-[43px] font-bold leading-[30px] lg:leading-[3.6rem] md:leading-[3.6rem] xl:leading-[3.6rem] text-[#001f3f] text-center lg:text-center ml-[10px] lg:ml-[0px] md:ml-[0px]"
        repeat={Infinity}
      />
    </>
  );
};

export default TypeWriterEffect;

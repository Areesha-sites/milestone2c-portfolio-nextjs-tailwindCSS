"use client";
import {
  BugAntIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CursorArrowRaysIcon,
  RocketLaunchIcon,
  ServerIcon,
} from "@heroicons/react/16/solid";
import React from "react";
import Tilt from "react-parallax-tilt";
import { ServicesCardsType } from "../../../types/Types";
const iconMapping: Record<string, React.ElementType> = {
  "01": CommandLineIcon,
  "02": ServerIcon,
  "03": CodeBracketIcon,
  "04": CursorArrowRaysIcon,
  "05": RocketLaunchIcon,
  "06": BugAntIcon,
};
const ServicesCards = ({ num, title, description }:ServicesCardsType ) => {
  const IconComponent = iconMapping[num] || iconMapping["01"];
  return (
    <>
      <Tilt>
        <div
          data-aos="zoom-in-right"
          data-aos-delay="200"
          className="group bg-[#001f3f] relative transform text-center p-6 shadow-xl  w-full h-full rounded-2xl"
        >
          <IconComponent className="w-[5rem] relative z-[1] mx-auto h-[5rem] text-[#0074d9]  " />
          <h1 className="text-[25px] font-bold relative z-[1] text-white mt-[1rem]">
            {title}
          </h1>
          <p className="text-white text-[15px] hover:opacity-100 mt-[0.8rem] ">
            {description}
          </p>
          <p className="text-white text-[1.6rem] font-bold absolute top-3 right-4 ">
            {num}
          </p>
        </div>
      </Tilt>
    </>
  );
};

export default ServicesCards;

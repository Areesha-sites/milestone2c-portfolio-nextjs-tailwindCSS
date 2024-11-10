"use client";
import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { SkillCardsType } from "../../../types/Types";
const SkillCards = ({ image, percent, title }: SkillCardsType) => {
  return (
    <>
      <Tilt>
        <div
          data-aos="flip-right"
          data-aos-delay="100"
          className="p-6 hover:bg-lightBlue duration-300 transition-all cursor-pointer text-center rounded-lg bg-buttonBackground hover:scale-105 shadow-xl shadow-gray-400 "
        >
          <Image
            src={image}
            width={80}
            height={80}
            alt="React"
            className="mx-auto object-cover"
          />
          <h1 className="text-[20px] mt-[1rem] text-white font-bold mb-[1rem]">
            {title}
          </h1>
          <div className="bg-black rounded-lg p-2 text-white opacity-50">
            {percent}
          </div>
          <button className="text-[15px] mt-4 text-white hover:text-bodyTextfont-semibold underline">
            Explore More
          </button>
        </div>
      </Tilt>
    </>
  );
};

export default SkillCards;

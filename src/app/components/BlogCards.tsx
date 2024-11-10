"use client";
import React from "react";
import Image from "next/image";
import { CalendarIcon } from "@heroicons/react/20/solid";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import Tilt from "react-parallax-tilt";
import { BlogCardsType } from "../../../types/Types";
const BlogCards = ({ comment, image, title, date }: BlogCardsType) => {
  return (
    <>
      <Tilt>
        <div
          data-aos="flip-right"
          data-aos-delay="200"
          className="bg-mainHeading rounded-xl shadow-xl shadow-gray-400 hover:scale-105 cursor-pointer transition-all duration-300 "
        >
          <div className="">
            <Image
              src={`${image}`}
              alt="blog"
              width={300}
              height={300}
              className="object-cover w-[100%] h-[100%] rounded-xl"
            />
          </div>
          <div className="p-4">
            <div className="mt-[1rem] mb-[1rem] px-3 py-1 bg-lightBlue w-fit flex items-center space-x-2 rounded-lg">
              <CalendarIcon className="w-[1rem] h-[1rem] text-mainHeading" />

              <p className="text-white text-[14px] ">{date}</p>
            </div>
            <h1 className="text-[20px] hover:text-lightBlue transition-all duration-200 cursor-pointer text-white font-semibold underline">
              {title}
            </h1>
            <div className="flex items-center mt-[2rem] justify-between">
              <div className="flex items-center space-x-3 ">
                <ChatBubbleLeftRightIcon className="w-[1.2rem] h-[1.2rem] text-[#0074d9]" />
                <p className="text-[15px] text-white ">{comment} Comments</p>
              </div>
              <button
                data-aos="zoom-in"
                data-aos-delay="100"
                className="text-[15px] hover:text-lightBlue transition-all duration-150 text-white font-semibold underline"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </Tilt>
    </>
  );
};

export default BlogCards;

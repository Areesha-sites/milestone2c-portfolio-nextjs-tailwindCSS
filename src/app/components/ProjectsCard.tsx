"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ProjectCardsType } from "../../../types/Types";
const ProjectsCard = ({
  image,
  title,
  tech1,
  tech2,
  tech3,
  tech4,
  description,
  sourceCode,
  livePreview,
}: ProjectCardsType) => {
  useEffect(() => {
    AOS.init({
      // initialize
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="grid w-[80%] mx-auto pt-[3rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div
          data-aos="flip-left"
          data-aos-delay="100"
          className="p-4 rounded-2xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-200 bg-mainHeading shadow-md shadow-gray-400 text-center "
        >
          <Image
            src={`${image}`}
            alt={title}
            width={500}
            height={500}
            className="object-contain w-full rounded-xl mx-auto shadow-xl"
          />
        </div>
        <div className="">
          <h1
            data-aos="fade-right"
            data-aos-delay="100"
            className="text-[30px] text-bodyText font-bold xl:font-bold md:font-bold "
          >
            {title}
          </h1>

          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className="text-bodyText text-[15px] mt-[1rem]"
          >
            {description}
          </p>
          <div className="mt-4 flex justify-center mx-5">
            <span
              data-aos="fade-right"
              data-aos-delay="100"
              className="bg-mainHeading text-white text-xs font-medium ml-2 px-4 py-2 rounded-full  shadow-xl shadow-gray-300"
            >
              {tech1}
            </span>

            <span
              data-aos="fade-right"
              data-aos-delay="100"
              className="bg-mainHeading text-white text-xs font-medium ml-2 px-4 py-2 rounded-full  shadow-xl shadow-gray-300"
            >
              {tech2}
            </span>

            <span
              data-aos="fade-right"
              data-aos-delay="100"
              className="bg-mainHeading text-white text-xs font-medium ml-2 px-4 py-2 rounded-full  shadow-xl shadow-gray-300"
            >
              {tech3}
            </span>

            <span
              data-aos="fade-right"
              data-aos-delay="100"
              className="bg-mainHeading text-white text-xs font-medium ml-2 px-4 py-2 rounded-full  shadow-xl shadow-gray-300"
            >
              {tech4}
            </span>
          </div>
          <div className="flex items-center justify-center relative md:left-30 left-[0rem]">
            <button
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-[15px] hover:text-bodyText transition-all duration-150 text-lightBlue font-semibold underline"
            >
              <Link href={sourceCode} target="_blank">
                Source Code
              </Link>
            </button>
            <button
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-[15px] hover:text-mainHeading transition-all duration-150 text-bodyText font-semibold underline pb-12 ml-8 relative top-6"
            >
              <Link href={livePreview} target="_blank">
                Live Preview
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;

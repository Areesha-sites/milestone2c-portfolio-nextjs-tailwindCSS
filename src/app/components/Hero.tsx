"use client";
import React from "react";
import TypeWritter from "./helper/TypeWritter";
import Image from "next/image";
import Link from "next/link";
import { MdDownload } from "react-icons/md";
const Hero = () => {
  return (
    <>
      <div className=" pt-[2rem] md:pt-[6rem] min-h-screen bg-backgroundColour pb-[6rem]  ">
        <div className="flex justify-center flex-col w-[70%] md:w-[80%] mx-auto">
          <div className="md:grid lg:grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[3rem] flex justify-center items-center flex-col-reverse mt-[4rem] md:flex-col md:mt-[0rem]">
            <div className="">
              <div
                data-aos="fade-right"
                data-aos-delay="100"
                className="flex justify-start items-center mt-6"
              >
                <span
                  className="bg-badgeBackgroundColour text-bodyText text-[10px] lg:text-xs font-medium me-2 px-2.5 py-0.5 rounded-full sm:mt-[-3rem] xl:mt-[2rem]"
                  style={{ boxShadow: "3px 3px 5px #F4F6FF" }}
                >
                  Welcome To My Digital Space
                </span>
              </div>
              <div>
                <h1
                  data-aos="fade-left"
                  data-aos-delay="200"
                  className="text-[26px] sm:text-[28px] md:text-[40px] lg:text-[40px] xl:text-[48px] font-bold leading-[41px] md:leading-[3.6rem] lg:leading-[3.6rem] text-bodyText text-center md:text-left lg:text-left lg:font-bold mt-3 lg:mt-0  md:mt-[-20px]"
                >
                  Hey I am
                  <span className="text-lightBlue font-extrabold">
                    {" "}
                    Areesha
                  </span>
                </h1>
                <TypeWritter data-aos="fade-right" data-aos-delay="100" />
              </div>
              <p
                data-aos="fade-right"
                data-aos-delay="200"
                className="mt-[1.2rem] text-[13px] md:text-[15px] text-bodyText text-center md:text-left"
              >
                I am <span className="font-bold text-mainHeading">Areesha</span>
                , a web developer with a passion for creating exceptional
                digital experiences. Skilled in
                <span className="font-bold text-mainHeading"> Next.js </span>,
                <span className="font-bold text-mainHeading">Tailwind CSS</span>
                , and modern web technologies, I build responsive, dynamic
                websites that are both visually captivating and highly
                functional. Combining creativity with technical expertise, I am
                committed to delivering intuitive user experiences and
                innovative solutions tailored to every project.✦
              </p>
              <div className="text-bodyText text-[15px] mt-[1rem] text-center md:text-left">
                <i>
                  <b data-aos="fade-right" data-aos-delay="200">
                    Building Ideas one line of code at a time. 💻
                  </b>
                </i>
              </div>
              <div className="mt-[0.8rem] flex flex-col md:flex-row items-center justify-center md:justify-start space-x-0 space-y-4 md:space-y-0 md:space-x-6">
                <button
                  data-aos="zoom-in-right"
                  data-aos-delay="100"
                  type="button"
                  className="text-backgroundColour bg-gradient-to-br from-[#0c2b43] via-[#1f4d6e] to-[#6fb8de] hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  "
                >
                  <Link href="/contact">Hire Me</Link>
                </button>

                <button
                  data-aos="zoom-in-right"
                  data-aos-delay="100"
                  type="button"
                  className="text-white bg-gradient-to-br from-[#0c2b43] via-[#1f4d6e] to-[#6fb8de] hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                >
                  <Link href="/contact" className="flex ">
                    Download CV <MdDownload className="h-5 w-5 ml-2" />
                  </Link>
                </button>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="order-1 md:pt-[1rem] "
            >
              <Image
                src="/main-image.png"
                alt="hero"
                width={350}
                height={350}
                className="w-[100%] lg:ml-[107px] md:w-[50%] md:ml-[130px] lg:w-[75%] xl:w-[75%] 2xl:w-[75%]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

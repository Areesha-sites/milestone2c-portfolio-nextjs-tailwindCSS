"use client";
import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className=" bg-backgroundColour pt-7 min-h-screen pb-[3rem] ">
        <div className="w-[80%] pt-[5rem]  md:pt-[5rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
          <div className="">
            <p
              data-aos="fade-right"
              data-aos-delay="100"
              className="inline-block rounded-full mb-2 text-sm py-1 px-3 text-bodyText font-semibold bg-badgeBackgroundColour "
              style={{ boxShadow: "3px 3px 5px #F4F6FF" }}
            >
              About Me
            </p>
            <h1
              data-aos="fade-left"
              data-aos-delay="100"
              className="text-[30px] sm:text-[30px] md:text-[48px] lg:text-[48px] font-bold leading-[41px] lg:leading-[3.6rem] md:leading-[3.6rem] text-bodyText "
            >
              Meet <span className="text-lightBlue">Areesha</span> Your Web
              Development Specialist.
              <i className="bx bxl-sketch -ml-0 mt-2"></i>
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-[15px] mt-[1.3rem] text-bodyText"
            >
              Hey I am <b className="text-bodyText">Areesha,</b> a passionate
              web developer dedicated to creating impactful digital experience.
              With expertise in React Javascript and Next.Js. I transform ideas
              into user-friendly website that drive results.✮
            </p>
            <div className="mt-3 text-bodyText">
              <b data-aos="fade-right" data-aos-delay="200">
                <i>Connecting Creativity and technology in Everything I Do.</i>
                💡
              </b>
            </div>
            <div className="mt-[2rem] space-y-3 ">
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                className="flex items-center space-x-4 "
              >
                <CheckIcon className="w-[2rem] h-[2rem] text-bodyText " />
                <p className="text-[18px] text-bodyText">Frontend Developer</p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="200"
                className="flex items-center space-x-4 "
              >
                <CheckIcon className="w-[2rem] h-[2rem] text-bodyText " />
                <p className="text-[18px] text-bodyText">
                  Javascript Developer
                </p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                className="flex items-center space-x-4 "
              >
                <CheckIcon className="w-[2rem] h-[2rem] text-bodyText" />
                <p className="text-[18px] text-bodyText">
                  Typescript Developer
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="200"
                className="flex items-center space-x-4 "
              >
                <CheckIcon className="w-[2rem] h-[2rem] text-bodyText" />
                <p className="text-[18px] text-bodyText">Next.Js Developer</p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                className="flex items-center space-x-4 "
              >
                <CheckIcon className="w-[2rem] h-[2rem] text-bodyText" />
                <p className="text-[18px] text-bodyText">UX/UI Designer</p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="200"
                className="flex items-center space-x-4 "
              >
                <CheckIcon className="w-[2rem] h-[2rem] text-bodyText" />
                <p className="text-[18px] text-bodyText">
                  Full Stack Developer
                </p>
              </div>
            </div>
          </div>

          <div className="-mt-24 ">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:ml-[15px] xl:ml-[15px] xl:mt-[2rem] 2xl:mt-[5rem] items-center gap-[2rem] mt-[5rem] md:grid-cols-2 lg:grid-cols-2 lg:mt-[-4rem]">
              <Tilt>
                <div
                  data-aos="fade-right"
                  data-aos-delay="300"
                  className="group p-4 text-center bg-[#001f3f] flex flex-col justify-center items-center h-[200px] rounded-xl shadow-xl shadow-gray-400 cursor-pointer "
                >
                  <p className="text-[25px] text-white font-bold lg:text-[21px]">
                    HTML & CSS
                  </p>
                  <p className="text-[13px] text-white font-semibold mt-3 ">
                    Skilled in building responsive and accessible layouts that
                    provide a seamless experience for users across various
                    devices.
                  </p>
                </div>
              </Tilt>
              <Tilt>
                <div
                  data-aos="fade-left"
                  data-aos-delay="300"
                  className="group p-4 text-center bg-[#001f3f] flex flex-col justify-center items-center h-[200px] rounded-xl shadow-xl shadow-gray-400 cursor-pointer"
                >
                  <p className="text-[25px] text-white font-bold ">
                    JavaScript
                  </p>
                  <p className="text-[13px] text-white font-semibold mt-3 ">
                    Well-versed in core Javascript principles enabling me to
                    dynamic and interactive web applications.
                  </p>
                </div>
              </Tilt>
              <Tilt>
                <div
                  data-aos="fade-right"
                  data-aos-delay="300"
                  className="group p-4 text-center bg-[#001f3f] flex flex-col justify-center items-center h-[200px] rounded-xl shadow-xl shadow-gray-400 cursor-pointer"
                >
                  <p className="text-[25px] text-white font-bold ">
                    React & Next.js
                  </p>
                  <p className="text-[13px] text-white font-semibold mt-3 ">
                    Specializing in React and Next.js to create high-performance
                    scalable applications.
                  </p>
                </div>
              </Tilt>
              <Tilt>
                <div
                  data-aos="fade-left"
                  data-aos-delay="300"
                  className="group p-4 text-center bg-[#001f3f] flex flex-col justify-center items-center h-[200px] rounded-xl shadow-xl shadow-gray-400 cursor-pointer"
                >
                  <p className="text-[25px] text-white font-bold  ">
                    Team Player
                  </p>
                  <p className="text-[13px] text-white font-semibold mt-3">
                    A collaborative team player with strong problem-solving
                    abilities commited to driving projects.
                  </p>
                </div>
              </Tilt>

              <div className="flex justify-center md:justify-center sm:justify-center lg:justify-center lg:relative lg:left-[108px]">
                <button
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  className="bg-[#0074d9] text-white px-4 py-1 rounded-lg hover:scale-105 hover:font-semibold text-[17px] font-semibold duration-300 transition-transform hover:bg-white hover:text-[#0074d9] flex justify-center items-center shadow-lg shadow-gray-400"
                >
                  <Link href="/my_projects"> View My Work</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

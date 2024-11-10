"use client";
import React from "react";
import Link from "next/link";
import SkillCards from "../components/SkillCards";
import "boxicons/css/boxicons.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="pt-[7rem] pb-[3rem] bg-white min-h-screen">
        <div className="text-center">
          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className="inline-block rounded-full mb-2 mt-5 text-sm py-1 px-3 text-bodyText font-semibold bg-badgeBackgroundColour shadow-md shadow-gray-300"
          >
            My Expertise Showcase
          </p>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-[2rem] items-center w-[70%] mx-auto">
            <h1
              data-aos="fade-left"
              data-aos-delay="100"
              className="text-[30px] sm:text-[30px] md:text-[48px] xl:text-[48px] font-bold leading-[41px] lg:leading-[3.6rem] md:leading-[3.6rem] text-mainHeading  "
            >
              Unveiling My Top <span className="text-lightBlue">Skills</span> &
              Experience <i className="bx bxs-folder-open"></i>
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-[15px] text-mainHeading overflow-hidden"
            >
              I specialize in creating dynamic responsive websites using
              <b> React Next.js</b> and <b> Tailwind CSS</b> combining design
              and functionality for seamless user experiences. With expertise in
              both frontend and backend development I build scalable efficient
              and innovative solutions that bring ideas to life.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button
              data-aos="fade-left"
              data-aos-delay="100"
              className="bg-mainHeading text-white px-6 py-1 rounded-lg hover:scale-105 hover:font-bold text-lg font-semibold duration-300 transition-transform hover:bg-white hover:text-bodyText flex justify-center items-center shadow-xl shadow-gray-300 mt-5"
            >
              <Link href="/contact">
                <span>Hire Me</span>
              </Link>
            </button>
          </div>
        </div>
        <div className="grid w-[80%] mt-[3rem] mx-auto md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center">
          <div>
            <SkillCards image="/react.svg" percent="65%" title="React.JS" />
          </div>
          <div>
            <SkillCards image="/next.svg" percent="60%" title="Next.JS" />
          </div>
          <div>
            <SkillCards image="/html.svg" percent="80%" title="HTML" />
          </div>
          <div>
            <SkillCards image="/css.svg" percent="75%" title="CSS" />
          </div>
          <div>
            <SkillCards
              image="/javascript.svg"
              percent="80%"
              title="Javascript"
            />
          </div>
          <div>
            <SkillCards
              image="/typescript.svg"
              percent="75%"
              title="Typescript"
            />
          </div>
          <div>
            <SkillCards image="/node.svg" percent="60%" title="Node.JS" />
          </div>
          <div>
            <SkillCards image="/tailwind.svg" percent="80%" title="Tailwind " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

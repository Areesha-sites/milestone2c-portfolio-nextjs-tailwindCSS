"use client";
import React from "react";
import ServicesCards from "../components/ServicesCards";
import Link from "next/link";
import "boxicons/css/boxicons.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="pt-[7rem] pb-[7rem] bg-backgroundColour sm:pt-28 md:pt-28 min-h-screen">
        <div className="text-center mx-auto w-[80%]">
          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className="inline-block rounded-full mt-3 text-sm py-1 2xl:mt-[3rem] px-3 text-bodyText font-semibold bg-badgeBackgroundColour "
            style={{ boxShadow: "3px 3px 5px #F4F6FF" }}
          >
            What I Offer
          </p>
          <h1
            data-aos="fade-left"
            data-aos-delay="100"
            className="text-[30px] sm:text-[30px] md:font-bold md:text-[48px] lg:text-48 font-bold leading-[41px] lg:leading-[3.6rem] md:leading-[3.6rem] text-bodyText text-center"
          >
            Comprehensive <span className="text-lightBlue">Services</span>
            <br />
            to Build Your Online Presence.<i className="bx bx-globe"></i>
          </h1>

          <div className="text-center max-w-2xl text-bodyText mt-5 mx-auto w-[85%] ">
            <p
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-center text-bodyText"
            >
              I take the time to understand your unique needs and goals crafting
              tailored web solutions that bring your Vision to life. Whether you
              are looking to build a modern responsive website or enhance your
              digital presence, my services are designed to reflect your brand
              and deliver results that exceed expectations.⋆｡°✩
            </p>
            <div className="mt-3">
              <i>
                <b data-aos="fade-left" data-aos-delay="100">
                  Your Vision, brought to life through innovative and bespoke
                  web solutions. 💙
                </b>
              </i>
            </div>
          </div>
        </div>
        <div className="pt-[5rem] w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center ">
          <div className=" rounded-2xl">
            <ServicesCards
              data-aos="zoom-in-right"
              data-aos-delay="200"
              title="React Website"
              num="01"
              description="A modern React website built with powerful components to deliver high performance and user experience.★"
            />
          </div>
          <div className=" rounded-2xl ">
            <ServicesCards
              data-aos="zoom-in-left"
              data-aos-delay="200"
              title="Next Js Website"
              num="02"
              description="A Next.JS website providing server-side rendering and optimized performance for fast-loading applications.★"
            />
          </div>
          <div className=" rounded-2xl">
            <ServicesCards
              data-aos="zoom-in-right"
              data-aos-delay="200"
              title="Frontend Website"
              num="03"
              description="Build a beautifull, responsive frontend website using the latest technologies for a seamless user experience.★"
            />
          </div>
          <div className=" rounded-2xl">
            <ServicesCards
              data-aos="zoom-in-left"
              data-aos-delay="200"
              title="Node Js Website"
              num="04"
              description="A Node.Js-powered website offering robust backend solutions for scaleable and efficient web application.★"
            />
          </div>
          <div className=" rounded-2xl">
            <ServicesCards
              data-aos="zoom-in-right"
              data-aos-delay="200"
              title="Javascript Website"
              num="05"
              description="Crafting interactive, dynamic websites using pure Javascript, tailored to provide fast and efficient results.★"
            />
          </div>
          <div className=" rounded-2xl">
            <ServicesCards
              data-aos="zoom-in-left"
              data-aos-delay="200"
              title="Typescript Website"
              num="06"
              description="Develop a strongly-types, bug-free website using Typescript for enhanced code quality and reliable applications.★"
            />
          </div>
        </div>
        <div className="flex justify-center mt-9 sm:justify-center md:justify-center lg:justify-center">
          <button
            data-aos="zoom-in-right"
            data-aos-delay="200"
            className="bg-lightBlue text-white px-4 py-1 rounded-lg hover:scale-105 hover:font-semibold text-[17px] font-semibold duration-300 transition-transform hover:bg-white hover:text-lightBlue flex justify-center items-center shadow-lg shadow-gray-300"
          >
            <Link href="/contact"> Contact Me</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;

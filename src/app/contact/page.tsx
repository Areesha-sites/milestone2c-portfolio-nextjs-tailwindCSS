"use client";
import React from "react";
import "boxicons/css/boxicons.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="pt-[5rem]  pb-[4rem] bg-white sm:pt-16 w-[100%] md:pt-[2rem] min-h-screen mx-auto">
        <div className="text-center mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-[2rem] items-center w-[70%] mx-auto pt-8  sm:mt-[0rem] ">
            <div className="">
              <p
                data-aos="fade-right"
                data-aos-delay="100"
                className="inline-block rounded-full mb-2 text-sm py-1 px-3 text-bodyText font-semibold bg-badgeBackgroundColour shadow-md shadow-gray-300 sm:mt-[1rem] md:mt-[2rem] lg:mt-[3rem] "
              >
                Get in Touch
              </p>
              <h1
                data-aos="fade-left"
                data-aos-delay="100"
                className="text-[36px] sm:text-[30px] md:text-[51px] lg:text-[51px] font-bold leading-[41px] md:leading-[3.6rem] text-mainHeading"
              >
                Elevate Your <span className="text-lightBlue">Brand </span>
                to New Heights <i className="bx bxs-crown"></i>
              </h1>
              <p
                data-aos="fade-right"
                data-aos-delay="100"
                className="text-[15px] text-bodyText mt-[1rem] "
              >
                Ready to take your <b> Brand</b> to the next level? Lets
                collaborate and bring your vision to life with professional
                designs that truly reflect your business. Whether it is creating
                a stunning website or crafting a unique brand identity. I am
                here to help you shine in the digital world. Lets connect and
                start your brands transformation today.💙
              </p>
              <div className="flex items-center justify-center">
                <p
                  data-aos="fade-left"
                  data-aos-delay="100"
                  className="text-bodyText mt-[1rem] text-center md:text-left italic font-bold "
                >
                  Your brand is the story the world will remember. Let is make
                  it brilliant together!🤝
                </p>
              </div>
            </div>
            <div className="">
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-[1rem] items-center">
                <input
                  data-aos="fade-left"
                  data-aos-delay="100"
                  type="text"
                  placeholder="Name"
                  className="py-[0.7rem] outline-none text-white bg-bodyText rounded-md px-4"
                  required
                />
                <input
                  data-aos="fade-right"
                  data-aos-delay="100"
                  type="email"
                  placeholder="Email"
                  className="py-[0.7rem] outline-none text-white  bg-bodyText rounded-md px-4"
                  required
                />
              </div>
              <input
                data-aos="zoom-in"
                data-aos-delay="100"
                type="text"
                placeholder="Subject"
                className="py-[0.7rem] mb-[1.5rem] mt-[1.5rem] w-full outline-none text-white bg-bodyText rounded-md px-4"
              />
              <textarea
                data-aos="zoom-up"
                data-aos-delay="100"
                placeholder="Message"
                rows={4}
                className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white rounded-md bg-buttonBackground px-4"
              ></textarea>
              <button
                data-aos="zoom-in-right"
                data-aos-delay="100"
                className="py-[0.7rem] mb-[1.8rem] outline-none text-white rounded-md bg-lightBlue font-semibold hover:bg-white hover:border-2 hover:border-buttonBackground hover:text-buttonBackground transition-all duration-200 px-4 "
              >
                Send Message <i className="bx bx-send"></i>
              </button>
              <div className="">
                <h1
                  data-aos="fade-left"
                  data-aos-delay="100"
                  className="text-bodyText text-[30px] font-bold lg:font-bold md:font-bold italic"
                >
                  A Glimpse into My Space
                  <i className="bx bxs-map text-lightBlue ml-3 "></i>
                </h1>
              </div>
              <div className="google-map-container mt-8">
                <iframe
                  data-aos="zoom-in"
                  data-aos-delay="100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.7287421642064!2d67.00993831499772!3d24.860734884060987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f97e63f6a07%3A0x146dc1aab64e2d2!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1616688847380!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

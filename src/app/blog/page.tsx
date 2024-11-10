"use client";
import React from "react";
import BlogCards from "../components/BlogCards";
import "boxicons/css/boxicons.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="pt-[7rem] pb-[7rem] bg-white sm:pt-[7rem] w-[100%] md:pt-[7rem] min-h-screen xl:pt-[5rem] mx-auto ">
        <div className="text-center">
          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className="inline-block rounded-full mb-2 text-sm py-1 px-3 text-[#001f3f] font-semibold bg-purple-100 shadow-md shadow-gray-300 mt-[1rem] sm:mt-[0rem] md:mt-[2rem] lg:mt-[2rem]"
          >
            My Blog Spot
          </p>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-[2rem] items-center w-[90%] mx-auto">
            <h1
              data-aos="fade-left"
              data-aos-delay="100"
              className="text-[30px] sm:text-[30px] md:text-[48px] lg:text-[48px] font-bold leading-[41px] md:leading-[3.6rem] text-[#001f3f] text-center md:font-bold lg:font-bold"
            >
              Discover My <span className="text-[#0074d9]">Blog</span> and
              Insights <i className="bx bx-news"></i>
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-[15px] text-gray-800 mx-auto"
            >
              Discover a fresh perspective every day. Explore my latest thoughts
              ideas and projects. Stay tuned for regular updates and new
              content. Join me on a personal journey as I share my experiences
              thoughts and reflections on life. Discover what inspires me
              challenges me and keeps me going.⋆｡°✩
            </p>
            <div className="flex items-center justify-center">
              <p
                data-aos="fade-left"
                data-aos-delay="100"
                className="text-[#001f3f] text-center md:text-left italic font-bold "
              >
                A blog is a voice that captures the present and inspires the
                future. 🚀
              </p>
            </div>
          </div>
        </div>
        <div className="w-[80%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[2rem] mt-[2rem]">
          <div>
            <BlogCards
              title="FullStack developer roadmap"
              comment="4"
              date="4 october 2024"
              image="/blog1.jpg"
            />
          </div>
          <div>
            <BlogCards
              title="Starting Next.js"
              comment="8"
              date="01 september 2024"
              image="/blog2.jpg"
            />
          </div>
          <div>
            <BlogCards
              title="Time Managment"
              comment="4"
              date="7 May 2024"
              image="/blog3.jpg"
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-9">
          <button
            data-aos="fade-right"
            data-aos-delay="200"
            className="py-[0.7rem] hover:text-bold outline-none text-white rounded-md bg-[#0074d9] font-semibold hover:bg-white hover:text-[#001f3f] hover:scale-105 transition-all duration-200 px-4 shadow-xl shadow-gray-400 "
          >
            Join the Conversation <i className="bx bx-conversation"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Blog;

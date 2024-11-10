"use client";
import React from "react";
import ProjectsCard from "../components/ProjectsCard";
import AOS from "aos";
import "aos/dist/aos.css";
import "boxicons/css/boxicons.min.css";
import { useEffect } from "react";
const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="pt-[6rem] pb-[5rem] bg-backgroundColour min-w-full min-h-screen">
        <div className="text-center">
          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className="inline-block rounded-full mb-2 text-sm py-1 px-3 text-mainHeading font-semibold bg-badgeBackgroundColour shadow-md shadow-gray-300 lg:mt-[2rem] md:mt-[2rem] mt-[1rem]"
          >
            Latest Creation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-[2rem] items-center w-[80%] mx-auto">
            <h1
              data-aos="fade-left"
              data-aos-delay="100"
              className="text-[40px] sm:text-[30px] md:text-[48px] lg:text-[48px] font-bold leading-[43px] md:leading-[3.6rem] lg:leading-[3.6rem] text-mainHeading text-center"
            >
              Showcasing my Creative
              <span className="text-lightBlue">
                <br />
                Projects
              </span>
              <i className="bx bxs-briefcase ml-3"></i>
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-[15px] text-mainHeading mx-auto md:text-[15px] sm:text-[17px]"
            >
              Each project reflects my passion for creativity and commitment to
              delivering impactful solutions. From design to development, my
              work showcases a diverse range of skills and experiences,
              carefully crafted to meet the needs of clients. Explore the
              projects that highlight my expertise and dedication to
              excellence.💙
            </p>
            <div className="flex items-center justify-center">
              <p
                data-aos="fade-left"
                data-aos-delay="100"
                className="text-mainHeading text-center md:text-left italic font-bold "
              >
                Great projects are not just built; they are crafted with
                creativity, dedication, and purpose.📝
              </p>
            </div>
          </div>
        </div>
        <ProjectsCard
          data-aos="flip-left"
          data-aos-delay="100"
          title="Portfolio Website"
          description="In this Project I created a dynamic and responsive website using the core web technologies: HTML, CSS, and JavaScript. The structure is built with clean HTML, styled with modern CSS techniques, including flexbox and grid layouts, and enhanced with interactive JavaScript features. This project showcases my ability to develop user-friendly interfaces, focus on responsive design, and ensure smooth, interactive experiences across all devices"
          tech1="HTML"
          tech2="CSS"
          tech3="Javascript"
          tech4="Typescript"
          image="/project1.jpg"
          sourceCode="https://github.com/Areesha-sites/Portfolio-HTML_CSS_JS.git"
          livePreview="https://portfolio-html-css-js-zeta.vercel.app/"
        />
        <ProjectsCard
          data-aos="flip-right"
          data-aos-delay="100"
          title="Education Website"
          description="This project is a comprehensive education website developed with Next.js and React for fast, efficient, and scalable performance. Leveraging the power of Tailwind CSS, the design is sleek, responsive, and optimized for user experience. The platform provides an intuitive interface for users to explore courses, engage with content, and navigate effortlessly across pages. This project highlights my expertise in building modern web applications with a focus on performance, usability, and clean design."
          tech1="React"
          tech2="Next"
          tech3="Tailwind"
          tech4="Typescript"
          image="/project2.jpg"
          sourceCode="https://github.com/Areesha-sites/milestone-2b-website-with-nextjs-tailwindCss.git"
          livePreview="https://milestone-2b-website-with-nextjs-tailwind-css.vercel.app/"
        />
        <ProjectsCard
          data-aos="flip-left"
          data-aos-delay="100"
          title="Calculator Project"
          description="This project is a fully functional calculator built with a combination of HTML, CSS, JavaScript, and TypeScript. The user interface is designed with a clean and modern layout, ensuring a smooth and intuitive user experience. TypeScript enhances the project by adding type safety, improving code reliability and maintainability. This calculator demonstrates my ability to create interactive, responsive tools while adhering to best coding practices for a seamless user experience"
          tech1="HTML"
          tech2="CSS"
          tech3="Javascript"
          tech4="Typescript"
          image="/project3.jpg"
          sourceCode="https://github.com/Areesha-sites/Calculator-with-HTML-CSS-JS.git"
          livePreview="https://calculator-with-html-css-js.vercel.app/"
        />
        <ProjectsCard
          data-aos="flip-right"
          data-aos-delay="100"
          title="Hackathon Resume"
          description="This project features an interactive resume developed using HTML, CSS, JavaScript, and TypeScript. The design is clean and modern, showcasing my skills, experiences, and accomplishments in a visually appealing manner. By utilizing JavaScript and TypeScript, I added dynamic elements such as collapsible sections for detailed information and responsive design to ensure optimal viewing on all devices. This project not only highlights my technical skills but also reflects my ability to present information effectively and engagingly."
          tech1="HTML"
          tech2="CSS"
          tech3="Javacsript"
          tech4="Typescript"
          image="/project4.jpg"
          sourceCode="https://github.com/Areesha-sites/Hackathon-Milstones.git"
          livePreview="https://milstone1-2.vercel.app/"
        />
        <ProjectsCard
          data-aos="flip-left"
          data-aos-delay="100"
          title="Hackathon Form"
          description="This project features a user-friendly registration form designed specifically for hackathon participants. Built with HTML, CSS, and JavaScript, the form streamlines the registration process, allowing users to easily input their information and submit it for consideration. The layout is responsive and visually appealing, ensuring a seamless experience on both desktop and mobile devices. JavaScript is utilized to enhance functionality, including real-time validation and feedback for user inputs. This project showcases my ability to create effective web forms that enhance user experience and facilitate event organization."
          tech1="HTML"
          tech2="CSS"
          tech3="Javacsript"
          tech4="Typescript"
          image="/project5.jpg"
          sourceCode="https://github.com/Areesha-sites/Hackathon-Milstones.git"
          livePreview="https://milstone5-one.vercel.app/"
        />
      </div>
    </>
  );
};

export default Projects;

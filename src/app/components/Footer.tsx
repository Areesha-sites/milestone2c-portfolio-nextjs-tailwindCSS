import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/16/solid";
import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import { FooterLinksType, FooterSocialLinksType } from "../../../types/Types";
const Footer = () => {
  const footerLinks: FooterLinksType[] = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/about",
      name: "About",
    },
    {
      link: "/my_services",
      name: "Services",
    },
    {
      link: "/skills",
      name: "Skills",
    },
    {
      link: "/my_projects",
      name: "Projects",
    },
    {
      link: "/blog",
      name: "Blogs",
    },
    {
      link: "/contact",
      name: "Contact",
    },
  ];
  const footerSocialLinks: FooterSocialLinksType[] = [
    {
      href: "https://github.com/Areesha-sites",
      icon: (
        <FaGithub className="text-white h-6 w-6 hover:scale-125 cursor-pointer transition-all duration-300 hover:text-[#0074d9]" />
      ),
    },
    {
      href: "https://www.instagram.com/zoxo_emmaaa/?hl=en",
      icon: (
        <FaInstagram className="text-white h-6 w-6 hover:scale-125 cursor-pointer transition-all duration-300 hover:text-[#0074d9] " />
      ),
    },
    {
      href: "https://www.linkedin.com/in/areesha-sattar-14b48832b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: (
        <FaLinkedin className="text-white h-6 w-6 hover:scale-125 cursor-pointer transition-all duration-300 hover:text-[#0074d9] " />
      ),
    },
  ];
  return (
    <>
      <div className="pt-[5rem] w-[100%] pb-[3rem] bg-[#001f3f]">
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40">
          <div className="">
            <div className="font-logo text-white text-[18px]">
              <span className="text-[25px] md:text-[40px] text-[#0074d9] font-bold italic">
                Vision
                <span className="text-[15px] text-white italic">Areesha</span>
              </span>
            </div>
            <h1 className="text-[14px] mt-[0.5rem] text-white">
              Thank you for visiting my portfolio! I specialize in creating
              modern, responsive websites that help bussiness establish a strong
              online presence. Feel free to explore my work and reach out for
              any inquiries or collaboration opportunities. Let is build
              something amazing together!🌐
            </h1>
            <p className="mt-[1.3rem] text-[#0074d9] underline font-semibold cursor-pointer hover:text-white">
              areesha21314@gmail.com
            </p>
          </div>
          <div className="md:mx-auto">
            <h1 className="text-white font-semibold mb-[1.4rem] text-[25px]">
              <i> Quick Links</i>
            </h1>
            {footerLinks.map((link, index) => (
              <Link
              key={index}
                href={link.link}
                className="relative hover:text-[#0074d9] w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#0074d9] text-white after:w-full after:scale-x-0 after:hover:scale-100 after:transition after:duration-300 after:origin-right text-[15px] mb-[1rem]"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="lg:mx-auto">
            <h1 className="text-white font-semibold mb-[1.4rem] text-[25px]">
              <i>Address</i>
            </h1>
            <div className="flex items-center mt-[1rem] space-x-2">
              <MapIcon className="w-[1.5rem] h-[2rem] text-[#0074d9]" />
              <p className="text-[17px] font-normal text-white opacity-75">
                North, karachi pakistan
              </p>
            </div>
            <div className="flex items-center mt-[1rem] space-x-2">
              <EnvelopeIcon className="w-[1.5rem] h-[2rem] text-[#0074d9]" />
              <p className="text-[17px] font-normal text-white opacity-75">
                areesha21314@gmail.com
              </p>
            </div>
            <div className="flex items-center mt-[1rem] space-x-2">
              <PhoneIcon className="w-[1.5rem] h-[2rem] text-[#0074d9]" />
              <p className="text-[17px] font-normal text-white opacity-75">
                0331-2969746
              </p>
            </div>

            <div className="flex items-center mt-[4rem] space-x-4">
              {footerSocialLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Github"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-[1.4rem] w-[80%] mx-auto text-white flex items-center justify-center opacity-70">
          &copy; {new Date().getFullYear()} Areesha | All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default Footer;

"use client";
import Link from "next/link";
import { useState } from "react";
import { Dialog, DialogPanel, Popover, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { HeaderLinksType } from "../../../types/Types";
export default function Header() {
  const headerLinks: HeaderLinksType[] = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/about",
      name: "About",
    },
    {
      href: "/my_services",
      name: "Services",
    },
    {
      href: "/skills",
      name: "Skills",
    },
    {
      href: "/my_projects",
      name: "Projects",
    },
    {
      href: "/blog",
      name: "Blogs",
    },
    {
      href: "/contact",
      name: "Contact",
    },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="absolute w-[100vw] z-[1000] bg-[#001f3f] md:w-full mb-[4rem] sm:mb-[6rem] md:mb-[5rem]">
      <nav
        aria-label="Global"
        className="flex items-center justify-between h-[12vh] max-w-[85%] w-full mx-auto px-4 md:px-0"
      >
        <div className="text-white text-[18px]">
          <span className="text-[30px] md:text-[40px] text-[#0074d9] font-bold italic md:pr-[71px]">
            Vision
            <span className="text-[15px] text-white italic">Areesha</span>
          </span>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-10">
          <Popover className="relative"></Popover>
          {headerLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="relative font-semibold hover:text-[#0074d9] text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#0074d9] text-white after:w-full after:scale-x-0 after:hover:scale-100 after:transition after:duration-300 after:origin-right"
            >
              {link.name}
            </Link>
          ))}
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 overflow-y-auto  px-6 py-6 w-full z-[1000] bg-[#001f3f] md:w-full sm:mb-[6rem] md:mb-[5rem]">
          <div className="flex items-center justify-between ">
            <a href="#" className="-m-1.5 p-1.5">
              <div className="text-white text-[18px]">
                <span className="text-[25px] md:text-[30px] text-[#0074d9] font-bold italic md:pr-[71px]">
                  Vision
                  <span className="text-[15px] text-white italic">Areesha</span>
                </span>
              </div>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className=" flow-root">
            <div className="">
              <div className=" bg-[#001f3f] w-full h-full flex flex-col items-center ">
                {headerLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="relative font-semibold hover:text-[#0074d9] text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#0074d9] text-white after:w-full after:scale-x-0 after:hover:scale-100 after:transition after:duration-300 after:origin-right pt-8 "
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);
  return (
    <>
      <Hero />
    </>
  );
};

export default Home;

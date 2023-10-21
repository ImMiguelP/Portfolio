"use client";
import Link from "next/link";
import React, { use } from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="py-24 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center">
        Hello, I&apos;m <br></br>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-400 ">
          <TypeAnimation
            sequence={[
              "Miguel",
              1000,
              "A Web Developer",
              1000,
              "A Software Engineer",
              1000,
              "A Ui/Ux Designer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </span>
      </h1>
      <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl text-center py-4">
        I am 28 year old with 4+ years of front web development. Currently
        building {""}
        <span className="text-blue-500 underline ">
          <Link href="https://musy.one">musy</Link>
        </span>
      </p>
    </section>
  );
};

export default HeroSection;

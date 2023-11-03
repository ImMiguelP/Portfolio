"use client";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Separator } from "./ui/separator";

const HeroSection = () => {
  return (
    <section className="py-24 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center">
        Hello, I&apos;m Miguel <br></br>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-third">
          <TypeAnimation
            sequence={[
              "A Web Developer",
              1000,
              "A Software Engineer",
              1000,
              "A UI/UX Designer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </span>
      </h1>
      <Separator className="my-4" />
      <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl text-center py-4">
        I am 28 years old with 4+ years of front web development. Currently
        helping build {""}
        <span className="text-blue-500 underline ">
          <Link href="https://musy.one">musy</Link>
        </span>
      </p>
    </section>
  );
};

export default HeroSection;

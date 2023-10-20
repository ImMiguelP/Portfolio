"use client";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { RiHomeHeartFill } from "react-icons/ri";
import { GiClown } from "react-icons/gi";
import { SiMinutemailer } from "react-icons/si";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";

const Nav = () => {
  const pathname = usePathname();
  const buttons = [
    { path: "/", icon: <RiHomeHeartFill /> },
    { path: "/troll", icon: <GiClown /> },
    { path: "/#contact-me", icon: <SiMinutemailer /> },
  ];

  return (
    <div className="flex items-center justify-center ">
      {buttons.map(({ path, icon }) => (
        <Link key={path} href={path}>
          <Button
            variant="link"
            className={`text-xl ${
              pathname === path ? "text-primary" : " text-gray-600"
            }`}
          >
            {icon}
          </Button>
        </Link>
      ))}
      <Separator orientation="vertical" />
      <Button variant="link">
        <FaSun />
      </Button>
      <Button variant="link">
        <FaMoon />
      </Button>
    </div>
  );
};

export default Nav;

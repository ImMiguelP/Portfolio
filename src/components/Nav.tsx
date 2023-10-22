"use client";
import React from "react";
import { RiHomeHeartFill } from "react-icons/ri";
import { GiClown } from "react-icons/gi";
import { SiMinutemailer } from "react-icons/si";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./ui/toggle-mode";

const Nav = () => {
  const pathname = usePathname();
  const buttons = [
    { path: "/", icon: <RiHomeHeartFill /> },
    { path: "/troll", icon: <GiClown /> },
    { path: "/#contact-me", icon: <SiMinutemailer /> },
  ];

  return (
    <div className="flex items-center justify-center py-7 space-x-3 ">
      {buttons.map(({ path, icon }) => (
        <Link key={path} href={path}>
          <Button
            variant="link"
            className={`text-xl px-2 ${
              pathname === path ? "text-primary" : " text-gray-600"
            }`}
          >
            <span
              className={`group relative inline-flex items-center py-2 ${
                pathname === path
                  ? "hover:text-blue-500"
                  : "group-hover:text-blue-500"
              }`}
            >
              {icon}
              <span
                className={`absolute w-full h-0.5 bottom-0 left-0 bg-blue-500 transition-transform duration-300 scale-x-0 group-hover:scale-x-100`}
              ></span>
            </span>
          </Button>
        </Link>
      ))}
      <Separator
        orientation="vertical"
        className="h-3 min-h-full bg-primary mx-1"
      />
      <ModeToggle />
    </div>
  );
};

export default Nav;

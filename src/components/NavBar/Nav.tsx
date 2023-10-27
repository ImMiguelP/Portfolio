"use client";
import React from "react";
import { RiHomeHeartFill } from "react-icons/ri";
import { GiClown } from "react-icons/gi";
import { SiMinutemailer } from "react-icons/si";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";
import { ModeToggle } from "../ui/toggle-mode";

const Nav = () => {
  const pathname = usePathname();
  const buttons = [
    { path: "/", icon: <RiHomeHeartFill /> },
    // { path: "/contact-me", icon: <SiMinutemailer /> },
  ];

  return (
    <div className="fixed top-0 z-10 flex justify-center w-full py-5 space-x-2 backdrop-filter backdrop-blur-2xl">
      {buttons.map(({ path, icon }) => (
        <Link key={path} href={path}>
          <Button
            variant="link"
            className={`text-md px-2 ${
              pathname === path ? "text-primary" : " text-gray-600"
            }`}
          >
            <span
              className={`group relative inline-flex items-center py-2 ${
                pathname === path
                  ? "hover:text-blue-primary"
                  : "group-hover:text-primary"
              }`}
            >
              {icon}
              <span
                className={`absolute w-full h-0.5 bottom-0 left-0 bg-primary transition-transform duration-300 scale-x-0 group-hover:scale-x-100`}
              ></span>
            </span>
          </Button>
        </Link>
      ))}
      <div className="flex items-center">
        <Separator orientation="vertical" className="h-3 bg-primary mx-1" />
      </div>
      <ModeToggle />
    </div>
  );
};

export default Nav;

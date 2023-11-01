import React from "react";
import { ModeToggle } from "../ui/toggle-mode";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { FiMenu } from "react-icons/fi";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { socialInfo } from "./Socials/SocialsObj";
import Link from "next/link";
import { navlinks } from "./NavLinks";

const MobileNav = () => {
  return (
    <div className="flex md:hidden fixed top-0 z-10 justify-between w-full p-6 space-x-2 backdrop-filter backdrop-blur-2xl">
      <ModeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="link" className="text-foreground relative group">
            <FiMenu className="" />
            <span
              className={`absolute w-full h-0.5 bottom-0 left-0 bg-primary transition-transform duration-300 scale-x-0 group-hover:scale-x-100`}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {navlinks.map(({ path, icon, name }) => (
            <>
              <DropdownMenuItem key={path}>
                <Link
                  href={path}
                  className="flex flex-row group relative items-center gap-1  py-1 text-xs w-[100%]"
                >
                  {icon} {name}
                  <span className="absolute w-full h-0.5 bottom-0 left-0 bg-primary transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
                </Link>
              </DropdownMenuItem>
              <Separator />
            </>
          ))}
          {socialInfo.map(({ link, icon, name }) => (
            <>
              <DropdownMenuItem key={link}>
                <Link
                  href={link}
                  className="flex flex-row group relative items-center gap-1 py-1 text-xs w-[100%]"
                >
                  {icon} {name}
                  <span className="absolute w-full h-0.5 bottom-0 left-0 bg-primary transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
                </Link>
              </DropdownMenuItem>
              <Separator />
            </>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNav;

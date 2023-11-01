import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Socials from "./Socials/Socials";
import { ModeToggle } from "../ui/toggle-mode";
import { navlinks } from "./NavLinks";

const BrowserNav = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex fixed top-0 z-10 justify-center w-full py-5 space-x-2 backdrop-filter backdrop-blur-2xl">
      {navlinks.map(({ path, icon }) => (
        <Link key={path} href={path}>
          <Button
            variant="link"
            className={`text-md px-2 ${
              pathname === path ? "text-primary" : "text-foreground"
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
              <span className="absolute w-full h-0.5 bottom-0 left-0 bg-primary transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
            </span>
          </Button>
        </Link>
      ))}
      <div className="flex items-center">
        <Separator orientation="vertical" className="h-3 bg-primary mx-1" />
      </div>
      <Socials />
      <div className="flex items-center">
        <Separator orientation="vertical" className="h-3 bg-primary mx-1" />
      </div>
      <ModeToggle />
    </div>
  );
};

export default BrowserNav;

import React from "react";
import { socialInfo } from "./SocialsObj";
import Link from "next/link";
import { Button } from "../../ui/button";

const Socials = () => {
  return (
    <>
      {socialInfo.map(({ icon, link }) => (
        <Link key={link} href={link}>
          <Button variant="link" className="text-md px-2 text-foreground">
            <span className="group relative inline-flex items-center py-2">
              {icon}
              <span className="absolute w-full h-0.5 bottom-0 left-0 bg-primary transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
            </span>
          </Button>
        </Link>
      ))}
    </>
  );
};

export default Socials;

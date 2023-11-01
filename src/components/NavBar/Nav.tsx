"use client";
import React from "react";
import BrowserNav from "./BrowserNav";
import MobileNav from "./MobileNav";
import { Separator } from "../ui/separator";

const Nav = () => {
  return (
    <nav>
      <BrowserNav />
      <MobileNav />
      <Separator className="bg-green-300 fixed" />
    </nav>
  );
};

export default Nav;

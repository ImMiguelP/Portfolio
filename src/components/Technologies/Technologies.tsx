"use client";
import React from "react";
import { technologies } from "./TechsObject";
import Technology from "./Technology";

const Technologies = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-10 gap-y-8">
      {technologies.map((tech, index) => (
        <div key={index} className="flex">
          <Technology key={index} {...tech} />
        </div>
      ))}
    </div>
  );
};

export default Technologies;

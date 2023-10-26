"use client";
import React from "react";
import { projects } from "./ProjectObject";
import Project from "./Project";
import { useHoverOpacity } from "@/hooks/useStyling";

const Projects = () => {
  const { hoveredIndex, handleMouseEnter, handleMouseLeave } =
    useHoverOpacity();
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 justify-center max-w-screen-xl mx-auto">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex justify-center transition-opacity duration-300 ease-in-out hover:opacity-${
            hoveredIndex === index ? 100 : 50
          }`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave()}
          style={{
            opacity:
              hoveredIndex === null ? 1 : hoveredIndex === index ? 1 : 0.5,
          }}
        >
          <Project key={index} {...project} />
        </div>
      ))}
    </div>
  );
};

export default Projects;

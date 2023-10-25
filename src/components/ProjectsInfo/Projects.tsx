import Image from "next/image";
import React from "react";
import { projects } from "./ProjectObject";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {projects.map((project, index) => (
        <div key={index}>
          <Project key={index} {...project} />
        </div>
      ))}
    </div>
  );
};

export default Projects;

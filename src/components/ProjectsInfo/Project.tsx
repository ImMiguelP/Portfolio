"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { Badge } from "../ui/badge";
import StickyButton from "../ui/StickyButton";
import Link from "next/link";
import { Button } from "../ui/button";
import { useZoom } from "@/hooks/useStyling";
import { Dialog, Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import ProjectModal from "./ProjectsModal";

interface ProjectProps {
  name: string;
  title: string;
  desc: string;
  link?: string;
  git?: string;
  images?: string;
  task: string | string[];
  tech?: React.ReactNode[];
}

const Project: React.FC<ProjectProps> = ({
  name,
  desc,
  link,
  git,
  images,
  task,
  title,
  tech,
}) => {
  const { hoverStyle, handleMouseEnter, handleMouseLeave } = useZoom();
  let [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="flex flex-col h-[300px] rounded-lg overflow-hidden">
      <div className="relative w-[400px] h-[100%] ">
        <Image
          alt=""
          src={images as string}
          fill
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={toggleModal}
          style={{ cursor: "pointer", objectFit: "cover", ...hoverStyle }}
        />
      </div>
      {/* Modal */}
      <ProjectModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        name={name}
        title={title}
        desc={desc}
        link={link}
        git={git}
        images={images}
        task={task}
        tech={tech}
      />
    </main>
  );
};

export default Project;

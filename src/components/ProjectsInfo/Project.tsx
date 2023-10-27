"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Badge } from "../ui/badge";
import StickyButton from "../ui/StickyButton";
import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useZoom } from "@/hooks/useStyling";

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

  return (
    <main className="flex flex-col bg-card h-[700px] w-[512px]  border-solid border-2 rounded-lg overflow-hidden pb-5 justify-between">
      <Image
        alt=""
        width={600}
        height={500}
        src={images as string}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={hoverStyle}
      />

      <div className="flex p-6">
        <div className="flex flex-row align-baseline">
          <header className="text-base font-bold">{name}</header>
          <Badge className="bg-primary ml-2 rounded-sm">{title}</Badge>
        </div>
      </div>
      <h4
        className="text-xs font-bold px-6"
        style={{ overflowWrap: "break-word" }}
      >
        {desc}
      </h4>
      <div className="grid grid-cols-3 gap-4 lg:grid-cols-4 p-5  text-center">
        {Array.isArray(task) ? (
          task.map((item, index) => (
            <StickyButton key={index}>
              <Badge className="bg-transparent text-primary h-[45px] w-[80px] justify-center rounded-sm outline hover:bg-transparent cursor-pointer">
                {item}
              </Badge>
            </StickyButton>
          ))
        ) : (
          <Badge>{task}</Badge>
        )}
      </div>
      {/* <header className="text-xs font-thin px-6">Created Using</header> */}
      <div className="grid grid-cols-10 gap-4 p-5  text-center">
        {Array.isArray(tech) ? (
          tech.map((item, index) => <>{item}</>)
        ) : (
          <Badge>{tech}</Badge>
        )}
      </div>
      <div className="flex flex-row items-center border justify-between rounded-lg w-11/12 mx-5 py-1">
        {link && (
          <Link href={link}>
            <Button variant="link" size="sm">
              Visit Project
            </Button>
          </Link>
        )}
        {link && git && <Separator orientation="vertical" className="h-5 " />}
        {git && (
          <Link href={git}>
            <Button variant="link" size="sm">
              GitHub
            </Button>
          </Link>
        )}
      </div>
    </main>
  );
};

export default Project;

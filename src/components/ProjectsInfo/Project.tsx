"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { Badge } from "../ui/badge";
import StickyButton from "../ui/StickyButton";
import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useZoom } from "@/hooks/useStyling";
import { Dialog, Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";

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
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={toggleModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="transform overflow-hidden w-[800px]  rounded-lg bg-secondary text-left align-middle shadow-xl transition-all">
                  <Dialog.Title className="mb-8 p-3">
                    <div className="flex justify-end top">
                      <IoMdClose
                        className="text-2xl hover:cursor-pointer"
                        onClick={toggleModal}
                      />
                    </div>
                    <div className="flex flex-row justify-between">
                      <div>
                        <header className="text-2xl font-bold">{name}</header>
                        <Badge className="text-[8px]">{title}</Badge>
                      </div>
                      <div className="flex flex-col text-center space-y-1 place-self-end">
                        <header className="text-sm font-light">
                          Technology
                        </header>
                        <div className="flex gap-3 px-2 items-center">
                          {Array.isArray(tech) ? (
                            tech.map((item) => <>{item}</>)
                          ) : (
                            <Badge>{tech}</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </Dialog.Title>
                  <Image
                    alt=""
                    width={900}
                    height={500}
                    src={images as string}
                  />
                  <div className="p-6">
                    <p className="text-sm text-gray-400">{desc}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 lg:grid-cols-4 p-5  text-center">
                    {Array.isArray(task) ? (
                      task.map((item, index) => (
                        <StickyButton key={index}>
                          <Badge className="bg-transparent text-primary text-[8px] h-[45px] w-[80px] justify-center rounded-sm outline hover:bg-transparent cursor-pointer">
                            {item}
                          </Badge>
                        </StickyButton>
                      ))
                    ) : (
                      <Badge>{task}</Badge>
                    )}
                  </div>
                  <div className="flex flex-row items-center mx-2 justify-between mb-4">
                    {link && (
                      <Link href={link}>
                        <Button
                          variant="link"
                          className="text-secondary-foreground hover:text-primary"
                          size="sm"
                        >
                          {link}
                        </Button>
                      </Link>
                    )}
                    {git && (
                      <Link href={git}>
                        <Button
                          variant="link"
                          size="sm"
                          className="text-secondary-foreground hover:text-primary"
                        >
                          GitHub
                        </Button>
                      </Link>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </main>
  );
};

export default Project;

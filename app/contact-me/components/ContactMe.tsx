import React from "react";
import Contact from "./Contact";
import { useHoverOpacity } from "@/hooks/useStyling";
import { contactinfo } from "./ContactObj";

const ContactMe = () => {
  const { hoveredIndex, handleMouseEnter, handleMouseLeave } =
    useHoverOpacity();

  const myStory =
    "I'm Miguel. I've been coding for over four years, starting in LA and now hitting my stride in Vegas. What got me into software engineering? A killer combo of my love for puzzles and the push from friends who shared my interests. I'm all about football and having a good time, but when it comes to coding, I'm dead serious. Whether I'm collaborating on projects with my crew or diving into solo ventures, I live for turning cool ideas into code. It's not just a job for me it's a journey I'm passionate about.";
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16  lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-center">
            About Me
          </h2>
          <p className="text-sm leading-6 text-secondary-foreground/60">
            {myStory}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-center">
            Get in touch
          </h2>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 ">
            {contactinfo.map((contact, index) => (
              <div
                key={index}
                className={`flex justify-center transition-opacity duration-300 ease-in-out hover:opacity-${
                  hoveredIndex === index ? 100 : 50
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}
                style={{
                  opacity:
                    hoveredIndex === null
                      ? 1
                      : hoveredIndex === index
                      ? 1
                      : 0.5,
                }}
              >
                <Contact key={index} {...contact} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

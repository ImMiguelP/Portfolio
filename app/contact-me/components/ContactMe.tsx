import { contactinfo } from "@/components/Contacts/ContactObj";
import React from "react";
import Contact from "./Contact";
import { useHoverOpacity } from "@/hooks/useStyling";

const ContactMe = () => {
  const { hoveredIndex, handleMouseEnter, handleMouseLeave } =
    useHoverOpacity();
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Get in touch
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
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
    </div>
  );
};

export default ContactMe;
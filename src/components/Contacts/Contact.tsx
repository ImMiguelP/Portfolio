"use client";
import React from "react";
import { contactinfo } from "./ContactObj";
import { useHoverOpacity } from "@/hooks/useStyling";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  const { hoveredIndex, handleMouseEnter, handleMouseLeave } =
    useHoverOpacity();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center w-full max-w-screen-xl mx-auto">
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
              hoveredIndex === null ? 1 : hoveredIndex === index ? 1 : 0.5,
          }}
        >
          <ContactInfo key={index} {...contact} />
        </div>
      ))}
    </div>
  );
};

export default Contact;

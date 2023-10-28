"use client";
import ContactForm from "@/components/Form/ContactForm";
import React from "react";
import ContactMe from "./components/ContactMe";

const contactMe = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 lg:p-24">
      {/* <ContactForm /> */}
      <ContactMe />
    </main>
  );
};

export default contactMe;

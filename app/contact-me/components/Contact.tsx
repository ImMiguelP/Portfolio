import React, { ReactNode } from "react";

interface ContactInfoProps {
  name: string;
  icon: ReactNode;
  link?: string;
  email?: string;
}
const Contact: React.FC<ContactInfoProps> = ({ name, icon, link, email }) => {
  const handleButtonClick = () => {
    if (link) {
      window.open(link, "_blank");
    } else if (email) {
      const mailtoLink = `mailto:${email}`;
      window.location.href = mailtoLink;
    }
  };
  return (
    <div
      onClick={handleButtonClick}
      className="flex flex-col items-center justify-center rounded-2xl p-10 hover:cursor-pointer"
    >
      <div className="mb-4">{icon}</div>
      <p className="text-lg font-semibold text-primary">{name}</p>
    </div>
  );
};

export default Contact;

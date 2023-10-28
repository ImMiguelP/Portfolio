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
      className="flex flex-row items-center rounded-2xl bg-secondary p-10 w-[200px] justify-center hover:cursor-pointer"
    >
      <div className="text-secondary-foreground">{icon}</div>

      <p className="text-sm font-semibold text-primary mx-3">{name}</p>
    </div>
  );
};

export default Contact;

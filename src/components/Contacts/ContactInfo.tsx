import React, { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Button } from "../ui/button";
import { useHoverOpacity, useZoom } from "@/hooks/useStyling";

interface ContactInfoProps {
  name: string;
  icon: ReactNode;
  link?: string;
  email?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  name,
  icon,
  link,
  email,
}) => {
  const { hovered, hoverStyle, handleMouseEnter, handleMouseLeave } = useZoom();
  const handleButtonClick = () => {
    if (link) {
      window.open(link, "_blank");
    } else if (email) {
      const mailtoLink = `mailto:${email}`;
      window.location.href = mailtoLink;
    }
  };
  return (
    <TooltipProvider delayDuration={50}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            className="outline outline-primary rounded-lg w-full py-6"
            onClick={handleButtonClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={hoverStyle}
          >
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ContactInfo;

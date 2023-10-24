import React, { ReactNode } from "react";
import StickyButton from "../ui/StickyButton";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TechnologyProps {
  name: string;
  icon: ReactNode;
  link: string;
}

const Technology: React.FC<TechnologyProps> = ({ name, icon, link }) => {
  return (
    <StickyButton>
      <TooltipProvider delayDuration={50}>
        <Tooltip>
          <TooltipTrigger>
            <Link href={link}>
              <Button variant="link" className="text-foreground">
                {icon}
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>{name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </StickyButton>
  );
};

export default Technology;

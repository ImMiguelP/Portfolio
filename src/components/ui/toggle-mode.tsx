import * as React from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "next-themes";

import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link" className="text-foreground relative group ">
          <FaSun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <FaMoon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
          <span
            className={`absolute w-full h-0.5 bottom-0 left-0 bg-primary transition-transform duration-300 scale-x-0 group-hover:scale-x-100`}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="text-xs" onClick={() => setTheme("light")}>
          <div className="flex flex-row group relative items-center gap-1 w-[100%] py-1 text-xs">
            Light
            <span className="absolute w-full h-0.5 bottom-0 left-0 bg-primary transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-xs" onClick={() => setTheme("dark")}>
          <div className="flex flex-row group relative items-center gap-1 w-[100%] py-1 text-xs">
            Dark
            <span className="absolute w-full h-0.5 bottom-0 left-0 bg-primary transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-xs"
          onClick={() => setTheme("system")}
        >
          <div className="flex flex-row group relative text-center gap-1 w-[100%] py-1 text-xs">
            System
            <span className="absolute w-full h-0.5 bottom-0 left-0 bg-primary transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

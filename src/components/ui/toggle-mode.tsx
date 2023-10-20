import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Use state to store the color classes
  const [sunColor, setSunColor] = React.useState(
    theme === "light" ? "text-yellow-400" : "text-gray-500"
  );
  const [moonColor, setMoonColor] = React.useState(
    theme === "dark" ? "text-cyan-800-500" : "text-gray-500"
  );

  // Use useEffect to update the icon colors when the theme changes
  React.useEffect(() => {
    if (theme === "light") {
      setSunColor("text-yellow-400");
      setMoonColor("text-gray-500");
    } else if (theme === "dark") {
      setSunColor("text-gray-500");
      setMoonColor("text-cyan-800-500");
    }
  }, [theme]);

  return (
    <div className="flex space-x-2">
      <Button variant="link" size="icon" onClick={() => setTheme("light")}>
        <Sun
          className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ${sunColor}`}
        />
      </Button>

      <Button variant="link" size="icon" onClick={() => setTheme("dark")}>
        <Moon
          className={`h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all ${moonColor}`}
        />
      </Button>
    </div>
  );
}

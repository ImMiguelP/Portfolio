"use client";
import { useState } from "react";
import { useIsMobile } from "./useIsMobile";

export const useHoverOpacity = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return {
    hoveredIndex,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export const useZoom = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const hoverStyle = {
    transition: "all 0.3s ease-in-out",
    transform: hovered ? "scale(1.05)" : "scale(1.0)",
  };

  return {
    hovered,
    hoverStyle,
    handleMouseEnter,
    handleMouseLeave,
  };
};

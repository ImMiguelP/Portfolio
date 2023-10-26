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

export const useImageHoverEffect = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const imageStyle = {
    transition: "all 0.3s ease-in-out",
    transform: hovered ? "scale(1.15)" : "scale(1.0)",
  };

  return {
    hovered,
    imageStyle,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export const useZoom = () => {
  const isMobile = useIsMobile();
  const zoomEffect = {
    style: {
      transition: "transform 0.3s ease-in-out",
    },
    hover: {
      backgroundColor: "transparent",
      transform: "scale(1.1) scale(1.15)",
    },
  };

  return zoomEffect;
};

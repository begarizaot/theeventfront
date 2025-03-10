import { useState } from "react";
// @ts-ignore
import ColorThief from "colorthief";

export const ColorFromImage = () => {
  const [bgColor, setBgColor] = useState("#000000");

  const getColorImg = (imageUrl: string) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;
    img.onload = () => {
      const colorThief = new ColorThief();
      const color = colorThief.getColor(img);
      setBgColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
    };
  };

  return { bgColor, getColorImg };
};

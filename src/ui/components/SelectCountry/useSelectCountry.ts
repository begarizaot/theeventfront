import { useState } from "react";

export const useSelectCountry = () => {
  const [countries] = useState([
    {
      label: "🇨🇳 +86",
      name: "China",
      value: 1,
      emoji: "🇨🇳",
      desc: "+86",
    },
    {
      label: "🇺🇸 +1",
      name: "United States",
      value: 2,
      emoji: "🇺🇸",
      desc: "+1",
    },
    {
      label: "🇯🇵 +81",
      name: "Japan",
      value: 3,
      emoji: "🇯🇵",
      desc: "+81",
    },
    {
      label: "🇰🇷 +82",
      name: "South Korea",
      value: 4,
      emoji: "🇰🇷",
      desc: "+82",
    },
  ]);

  return { countries };
};

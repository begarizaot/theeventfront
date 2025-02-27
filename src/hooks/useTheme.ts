import { useState, useEffect } from "react";

const THEME_KEY = "theme";

export const useTheme = () => {
  const isClient = typeof window !== "undefined"; // Verifica si estamos en el navegador

  const getInitialTheme = (): "light" | "dark" => {
    if (!isClient) return "light"; // Si estamos en SSR, devolver un valor por defecto
    return (localStorage.getItem(THEME_KEY) as "light" | "dark") || "light";
  };

  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    if (!isClient) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};

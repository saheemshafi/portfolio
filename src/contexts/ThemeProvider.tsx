"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

export const ThemeContext = createContext<{
  theme: string;
  onThemeChange: (theme: string) => void;
}>({
  theme: "yellow-249 204 63",
  onThemeChange: (theme: string) => {},
});

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  let _theme;
  if (typeof localStorage !== "undefined") {
    _theme = localStorage.getItem("theme");
  }

  const [theme, setTheme] = useState(_theme || "yellow-249 204 63");

  if (!ThemeContext) {
    throw new Error(
      "Theme context can only be used inside ThemeContextProvider.",
    );
  }

  const onThemeChange = (theme: string) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    if (typeof localStorage == "undefined") return;
    const _theme = localStorage.getItem("theme");
    document.documentElement.style.setProperty(
      "--theme-color",
      (_theme || theme)?.split("-")[1] || null,
    );
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, onThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};
"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

/**
 * Types for `ThemeContext`
 */
interface ThemeContextType {
  theme: string;
  onThemeChange: (theme: string) => void;
}

/**
 * @type {ThemeContextType}
 * @description `ThemeContext` to manage global theming in app.
 */
export const ThemeContext = createContext<ThemeContextType>({
  theme: "yellow-249 204 63",
  onThemeChange: (theme: string) => {},
});

/**
 * Wraps `children` in `ThemeContext.Provider`.
 * @prop children
 * @returns `JSXElement`
 */
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

  /**
   * @description Sets theme to localstorage and to state.
   * @param theme Format `[color]-[r] [g] [b]`
   * @example
   * <button onClick={() => onThemeChange("yellow-249 204 63")}>Change Theme</button>;
   */
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

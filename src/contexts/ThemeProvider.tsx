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
  theme: "yellow",
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
  const [theme, setTheme] = useState(_theme || "skyblue");

  if (!ThemeContext) {
    throw new Error(
      "Theme context can only be used inside ThemeContextProvider.",
    );
  }

  /**
   * @description Sets theme to localstorage and to state.
   * @param theme Format `theme-[color]`
   * @example
   * <button onClick={() => onThemeChange("yellow")}>Change Theme</button>;
   */
  const onThemeChange = (theme: string) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    if (typeof localStorage == "undefined") return;
    const _theme = localStorage.getItem("theme");
    const htmlElement = document.documentElement;
    const className = htmlElement.className.replace(
      /theme-[\w]+/,
      `theme-${_theme || theme}`,
    );
    htmlElement.className = className;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, onThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

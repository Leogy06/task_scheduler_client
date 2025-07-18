"use client";

import { DarkMode, LightMode } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") setTheme("dark");
    else setTheme("light");

    setHasMounted(true);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  if (!hasMounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      color="inherit"
      className="hover:cursor-pointer hover:text-slate-500 px-4 py-2"
    >
      {theme === "dark" ? <DarkMode /> : <LightMode />}{" "}
    </button>
  );
};

export default ThemeToggle;

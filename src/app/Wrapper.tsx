"use client";

import { SnackbarProvider } from "@/contexts/SnackbarContext";
import { store } from "@/lib/store";
import React, { useEffect } from "react";
import { Provider } from "react-redux";

type WrapperTypes = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: WrapperTypes) => {
  //check token validity

  //dark theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.documentElement.classList.add("dark");
    } else if (saved === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: light)"
      ).matches;
      document.documentElement.classList.toggle("light", prefersDark);
    }
  }, []);

  return (
    <>
      <Provider store={store}>
        <SnackbarProvider>
          <div className="flex flex-col p-4">{children}</div>
        </SnackbarProvider>
      </Provider>
    </>
  );
};

export default Wrapper;

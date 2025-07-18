"use client";

import LoginButton from "@/components/ui/button/LoginButton";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const MainPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center pt-32 "
    >
      <div className="h-40 w-40 p-0 relative">
        <Image
          src={"/images/cropped.png"}
          fill
          alt="App Logo"
          className="object-contain"
        />
      </div>
      <h1 className="text-lg font-bold mt-4">Expense Tracker App</h1>
      <p className="text-base font-medium">Helps you to be a keeper.</p>
      <LoginButton />
    </motion.div>
  );
};

export default MainPage;

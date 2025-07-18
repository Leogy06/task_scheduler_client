import Image from "next/image";
import React from "react";

const AppHeader = () => {
  return (
    <div className="flex p-4">
      <div className="w-32 h-16 relative">
        <Image
          src={"/images/brand__logo.png"}
          fill
          priority
          alt="Leogy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="transition-transform duration-300 scale-105"
        />
      </div>
    </div>
  );
};

export default AppHeader;

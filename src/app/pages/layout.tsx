import AuthContext from "@/contexts/AuthContext";
import React from "react";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthContext>
      <div className="flex flex-col p-4">{children}</div>
    </AuthContext>
  );
};

export default PageLayout;

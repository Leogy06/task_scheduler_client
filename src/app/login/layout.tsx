import AuthContext from "@/contexts/AuthContext";
import React from "react";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return <AuthContext>{children}</AuthContext>;
};

export default LoginLayout;

"use client";

import { useLazyCheckTokenQuery } from "@/lib/api/auth";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

type AuthContextTypes = {
  children: React.ReactNode;
};

const AuthContext = ({ children }: AuthContextTypes) => {
  const pathName = usePathname();
  const router = useRouter();
  const [checkToken] = useLazyCheckTokenQuery();

  useEffect(() => {
    checkToken({})
      .unwrap()
      .then(() => {
        if (pathName === "/login") {
          router.push("/pages/home");
        }
      })
      .catch(() => {
        router.push("/login");
      });
  }, [checkToken, router, pathName]);

  return <>{children}</>;
};

export default AuthContext;

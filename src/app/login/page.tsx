"use client";

import MuiTextField from "@/components/mui/MuiTextField";
import { useSnackbar } from "@/contexts/SnackbarContext";
import { useLoginMutation } from "@/lib/api/auth";
import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import z from "zod";

//credentail validation

const schema = z.object({
  username: z.string().min(1, "Username is required."),
  password: z.string().min(1, "Password is required."),
});

const LoginPage = () => {
  ///router nav
  const router = useRouter();
  const [login] = useLoginMutation();
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const { showSnackbar } = useSnackbar();

  const [formErrors, setFormErrors] = useState<
    Partial<{
      username: string;
      password: string;
    }>
  >();

  const handleLoginSubmit = async () => {
    //empty error first
    setFormErrors({});

    //credentails validation
    const validationResult = schema.safeParse(loginForm);

    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};

      const errors = validationResult.error.flatten().fieldErrors;

      if (errors.username) fieldErrors.username = errors.username[0];
      if (errors.password) fieldErrors.password = errors.password[0];
      setFormErrors(fieldErrors);
      return; //so it will return
    }

    await login(loginForm)
      .unwrap()
      .then(() => {
        router.push("/pages/home");
      })
      .catch((error) => {
        if (error.data.status === 500) {
          throw new Error(error);
        }
        showSnackbar(error.data.message, "error");
      });
  };

  return (
    <div className="flex justify-center pt-24">
      <div className=" flex flex-col items-center bg-slate-50 border border-slate-50 shadow-md rounded-lg p-6 min-w-1/4">
        <div className="h-50 w-30 relative">
          <Image
            src={"/images/cropped_logo.png"}
            fill
            alt="logo only"
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <h1 className=" mb-4 text-lg font-bold">Expense Tracker App Login</h1>
        <div className="flex flex-col gap-4 w-full">
          <MuiTextField
            placeHolder="Username"
            color="success"
            label="Username"
            onChange={(e) =>
              setLoginForm((prevForm) => ({
                ...prevForm,
                username: e.target.value,
              }))
            }
            error={!!formErrors?.username}
            helperText={formErrors?.username}
          />
          <MuiTextField
            placeHolder="Password"
            color="success"
            type="password"
            label="Password"
            error={!!formErrors?.password}
            helperText={formErrors?.password}
            onChange={(e) =>
              setLoginForm((prevForm) => ({
                ...prevForm,
                password: e.target.value,
              }))
            }
          />
          <Button
            variant="contained"
            color="success"
            onClick={handleLoginSubmit}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

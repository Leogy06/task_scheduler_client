"use client";

import { Alert, Slide, Snackbar } from "@mui/material";
import React, { createContext, useContext, useState } from "react";

type SnackbarContextType = {
  showSnackbar: (
    message: string,
    severity?: "success" | "error" | "info"
  ) => void;
};

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
);

export const SnackbarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<"success" | "error" | "info">(
    "info"
  );

  const showSnackbar = (
    msg: string,
    sev: "success" | "error" | "info" = "info"
  ) => {
    setMessage(msg);
    setSeverity(sev);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}

      {/* snackbar alert */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        slots={{ transition: Slide }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);

  if (!context) {
    throw new Error("useSnackbar must be used inside within SnackbarProvider.");
  }

  return context;
};

export default SnackbarContext;

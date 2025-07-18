import { TextField } from "@mui/material";
import React from "react";

type MuiTextFieldType = {
  label?: string;
  placeHolder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  color?: "success" | "info" | "error";
  type?: "text" | "password";
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
  value?: string;
};

const MuiTextField = ({
  label,
  placeHolder,
  onChange,
  color = "success",
  type = "text",
  fullWidth = true,
  error,
  helperText,
  value,
}: MuiTextFieldType) => {
  return (
    <TextField
      label={label}
      placeholder={placeHolder}
      onChange={onChange}
      color={color}
      type={type}
      fullWidth={fullWidth}
      error={error}
      helperText={helperText}
      value={value}
    />
  );
};

export default MuiTextField;

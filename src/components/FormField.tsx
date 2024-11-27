import { TextField } from "@mui/material";
import React from "react";
import { Manrope } from "next/font/google";

const manrope = Manrope({ weight: "400", subsets: ["latin"] });

const FormField: React.FC<{
  multiline?: boolean;
  label: string;
  name: string;
  type?: string;
}> = ({ multiline = false, label, name, type = "text" }) => {
  return (
    <TextField
      multiline={multiline}
      name={name}
      type={type}
      sx={{
        backgroundColor: "#1A1A1A",
        width: "100%", 
        maxWidth: "50rem", 
        marginBottom: "2.4rem",
        boxSizing: "border-box", 
        "& .MuiInputLabel-root": {
          color: "#C7C7C7",
          fontSize: "1.6rem",
          fontFamily: manrope.style.fontFamily,
          transition: "color 0.3s ease",
        },
        "& .MuiInputLabel-root.Mui-focused": { color: "#FFFFFF" },
        "& .MuiFilledInput-root": {
          fontFamily: manrope.style.fontFamily,
          color: "#FFFFFF",
          borderRadius: "8px",
          height: multiline ? "auto" : "5rem",
          minHeight: multiline ? "13.2rem" : "5rem",
          padding: multiline ? "1.2rem" : "1.5rem",
          fontSize: "1.8rem",
          fontWeight: 400,
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        },
        "& .MuiFilledInput-root:hover": {
          backgroundColor: "#292929",
        },
        "& .MuiFilledInput-root.Mui-focused": {
          backgroundColor: "#1E1E1E",
          borderBottom: "2px solid #FF4081",
        },
        "& .MuiFilledInput-underline:after": {
          borderBottomColor: "#FFFFFF",
        },
      }}
      label={label}
      variant="filled"
    />
  );
};

export default FormField;

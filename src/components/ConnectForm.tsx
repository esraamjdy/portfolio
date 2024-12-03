"use client";
import React from "react";
import { Stack, Button, TextField } from "@mui/material";
import { Manrope } from "next/font/google";
import { sendEmail } from "@/lib/actions";
import { toast } from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import classes from './classes.module.css';
import type { Metadata} from 'next';
import { motion } from "framer-motion";
import { CustomButton } from "./customButton";
import type { NextConfig} from 'next';

const manrope = Manrope({ weight: "400", subsets: ["latin"] });
type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const hoverEffect = {
    whileHover: { scale: 1.1, rotate: 2, transition: { duration: 0.3 } },
  };
const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };
const ConnectForm = () => {
  const errorMessage = "This Field is required";
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
    // e.preventDefault();
    // const form = e.target as HTMLFormElement;
    try {
      // const formData = new FormData(form);
      const response = await sendEmail(data);
      if (response?.statusCode == 200) {
        toast.success(response?.message);
        // form.reset();
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      toast.error("An error occurred while sending the email.");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", gap: "2.4rem" }}
    >
      <Stack>
        <TextField
          sx={{
            backgroundColor: "#1A1A1A",
            width: "100%",
            borderRadius: "8px",
            marginBottom: "2.4rem",
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
              height: "5rem",
              minHeight:"5rem", // For multiline textareas
              padding: "1.5rem",
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
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none", // Remove border outline in filled variant
            },
          }}
          {...register("message", {
            required: true,
            pattern: {
              value: /^(?!\s*$).+$/i,
              message: errorMessage,
            },
          })}
          {...register("name", {
            required: true,
            pattern: {
              value: /^(?!\s*$).+$/i,
              message: errorMessage,
            },
          })}
          label="Name"
          variant="filled"
          error={!!errors?.name}
        />
        {errors.name && <span className={classes.error}>{errorMessage}</span>}
      </Stack>
      <Stack>
        <TextField
          sx={{
            backgroundColor: "#1A1A1A",
            width: "100%",
            borderRadius: "8px",
            marginBottom: "2.4rem",
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
              height: "5rem",
              minHeight:"5rem", // For multiline textareas
              padding: "1.5rem",
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
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none", // Remove border outline in filled variant
            },
          }}
          {...register("message", {
            required: true,
            pattern: {
              value: /^(?!\s*$).+$/i,
              message: errorMessage,
            },
          })}
          {...register("email", {
            required: true,
            pattern: {
              value: /^(?!\s*$).+$/i,
              message: errorMessage,
            },
          })}
          label="Email"
          type="email"
          variant="filled"
          error={!!errors?.email}
        />
        {errors.email && <span className={classes.error}>{errorMessage}</span>}
      </Stack>
      <Stack>
        <TextField
          sx={{
            backgroundColor: "#1A1A1A",
            width: "100%",
            borderRadius: "8px",
            marginBottom: "2.4rem",
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
              height: "5rem",
              minHeight:"5rem", // For multiline textareas
              padding: "1.5rem",
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
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none", // Remove border outline in filled variant
            },
          }}
          {...register("message", {
            required: true,
            pattern: {
              value: /^(?!\s*$).+$/i,
              message: errorMessage,
            },
          })}
          {...register("subject", {
            required: true,
            pattern: {
              value: /^(?!\s*$).+$/i,
              message: errorMessage,
            },
          })}
          label="Subject"
          variant="filled"
          error={!!errors?.subject}
        />
        {errors.subject && <span className={classes.error}>{errorMessage}</span>}
      </Stack>
      <Stack>
        <TextField
          sx={{
            backgroundColor: "#1A1A1A",
            width: "100%",
            borderRadius: "8px",
            marginBottom: "2.4rem",
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
              height: "5rem",
              minHeight:"5rem", // For multiline textareas
              padding: "1.5rem",
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
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none", // Remove border outline in filled variant
            },
          }}
          {...register("message", {
            required: true,
            pattern: {
              value: /^(?!\s*$).+$/i,
              message: errorMessage,
            },
          })}
          label="Message"
          multiline
          variant="filled"
          error={!!errors?.message}
        />
        {errors.message && <span className={classes.error}>{errorMessage}</span>}
      </Stack>

      

    
      <motion.div variants={buttonVariant}>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                marginTop: "2rem",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <motion.div {...hoverEffect}>
              <Button
        sx={{
            background: "linear-gradient(45deg, #FF0080, #7700FF)",
            color: "white",
            
            "&:hover": {
              background: "linear-gradient(45deg, #7700FF, #FF0080)",
            },
            backgroundColor: "linear-gradient(45deg, #FF0080, #7700FF)",
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "10rem",
            width:"11.68rem",
            height: "3.37rem",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontFamily: manrope.style.fontFamily,
            
        }}
        type="submit"
        disabled={isSubmitting}
        className={classes['button-link']}
      >
        {!isSubmitting?'SUBMIT':'Loading ...'}
      </Button>
              </motion.div>
            </Stack>
          </motion.div>
        
    </form>
  );
};

export default ConnectForm;
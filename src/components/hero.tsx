"use client";
import { Bebas_Neue, Manrope } from "next/font/google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Typography, Button, Grid, Stack, IconButton } from "@mui/material";
import { CustomButton } from "@/components/customButton";
import { FaCircle } from "react-icons/fa";

import Image from "next/image";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Hero() {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
      sx={{
        display: "flex",
        backgroundColor: "#000", 
        padding: { xs: "2rem", md: "4rem" }, 
        gap: { xs: "3rem", md: "11rem" }, 
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          flex: 1,
          maxWidth: "600px",
          color: "white",
          textAlign: { xs: "center", md: "left" }, 
          marginLeft: { xs: 0, md: "2.5rem" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
            fontWeight: 400,
            color: "#fff",
            fontFamily: bebasNeue.style.fontFamily,
            lineHeight: "1",
            
          }}
        >
          Hello, I AM <br /> Esraa Magdy.
        </Typography>

        <Typography
          variant="h5"
          sx={{
            paddingTop: "1.5rem",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
            fontWeight: 400,
            color: "#B0B0B0",
            fontFamily: manrope.style.fontFamily,
            lineHeight: "1.6",
          }}
        >
          A full-stack developer passionate about building accessible and user-friendly websites.
        </Typography>

        {/* Buttons Section */}
        <Stack
          direction="row"
          spacing={2}
          sx={{
            marginTop: "2rem",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <CustomButton
            label="Contact Me"
            icon={<FaCircle size={10} />}
          />

          <IconButton
            component="a"
            href="https://www.linkedin.com/in/esraamjdy"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              borderRadius: "50%",
              backgroundColor: "#222",
              width: "50px",
              height: "50px",
              color: "#FF0080",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                color: "#FF0080",
              }}
            >
              in
            </Typography>
          </IconButton>

          <IconButton
            component="a"
            href="https://github.com/esraamjdy"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              borderRadius: "50%",
              backgroundColor: "#222",
              width: "50px",
              height: "50px",
              color: "#FF0080",
            }}
          >
            <GitHubIcon sx={{ fontSize: "1.2rem" }} />
          </IconButton>
        </Stack>
      </Box>

      {/* Right Section (Image) */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/image.jpg"
          alt="esraa"
          width={500}
          height={600}
          style={{
            borderRadius: "2rem",
            objectFit: "cover", 
          }}
        />
      </Box>
    </Stack>
  );
}

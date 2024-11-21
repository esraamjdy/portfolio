"use client";
import { Bebas_Neue, Manrope } from "next/font/google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Typography, Button, IconButton, Grid, Stack } from "@mui/material";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400"],
});

export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "black",
        padding: { xs: 2, sm: 4, md: 8 },
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Section - Text */}
        <Grid item xs={12} md={6}>
          <Box sx={{ color: "white" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
                fontWeight: 400,
                color: "white",
                fontFamily: bebasNeue.style.fontFamily,
                lineHeight: 0.9,
              }}
            >
              Hello, I AM <br />
              Esraa Magdy.
            </Typography>

            <Typography
              variant="h5"
              sx={{
                marginTop: 2,
                fontSize: { xs: "1rem", sm: "1.5rem" },
                fontWeight: 400,
                color: "#B0B0B0",
                fontFamily: manrope.style.fontFamily,
                lineHeight: "1.4",
              }}
            >
              A full-stack developer passionate about building accessible and user-friendly websites.
            </Typography>

            <Box sx={{ marginTop: 4 }}>
              <Stack direction="row" spacing={2}>
                {/* Contact Me Button */}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "pink",
                    color: "black",
                    padding: "10px 20px",
                    fontSize: "16px",
                    borderRadius: "30px",
                    fontWeight: "bold",
                    fontFamily: manrope.style.fontFamily,
                    "&:hover": {
                      backgroundColor: "pink",
                    },
                  }}
                >
                  Contact Me
                  <span
                    style={{
                      display: "inline-block",
                      width: "10px",
                      height: "10px",
                      backgroundColor: "black",
                      borderRadius: "50%",
                    }}
                  ></span>
                </Button>

                {/* LinkedIn Icon */}
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/esraamjdy"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderRadius: "50%",
                    backgroundColor: "#222222",
                    width: "60px",
                    height: "60px",
                    color: "pink",
                  }}
                >
                  <Typography
                    sx={{
                      color: "pink",
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                    }}
                  >
                    in
                  </Typography>
                </IconButton>

                {/* GitHub Icon */}
                <IconButton
                  component="a"
                  href="https://github.com/esraamjdy"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderRadius: "50%",
                    backgroundColor: "#222222",
                    width: "60px",
                    height: "60px",
                    color: "pink",
                  }}
                >
                  <GitHubIcon sx={{ fontSize: "1.5rem" }} />
                </IconButton>
              </Stack>
            </Box>
          </Box>
        </Grid>

        {/* Right Section - Image */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/budding-pop-cute.gif"
              alt="GIF Animation"
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "auto",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

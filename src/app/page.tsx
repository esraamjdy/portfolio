"use client";
import { Bebas_Neue, Manrope } from "next/font/google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Typography, Button, Grid, Stack, IconButton } from "@mui/material";

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
        height: "100vh",
        backgroundColor: "black",
        padding: { xs: 2, md: 10 },
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* left part */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            color: "white",
            textAlign: { xs: "center", md: "left" },
          }}
        >

          {/* hello */} 

          <Typography
            variant="h1"
            sx={{
              fontSize: "5rem",
              fontWeight: 400,
              color: "white",
              fontFamily: bebasNeue.style.fontFamily,
              lineHeight: "0.9",
            }}
          >
            Hello, I AM <br /> Esraa Magdy.
          </Typography>

          <Typography
            variant="h5"
            sx={{
              paddingTop: 2,
              fontSize: { xs: "1rem", sm: "1.5rem" },
              fontWeight: 400,
              color: "#B0B0B0",
              fontFamily: manrope.style.fontFamily,
              lineHeight: "1.4",
            }}
          >
            A full-stack developer passionate about building accessible and user
            friendly websites.
          </Typography>


          {/* stack with button and links */} 

          <Stack
            direction="row"
            spacing={2}
            sx={{
              marginTop: 4,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
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
                gap: "25px",
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
                fontSize: "1rem",
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
        </Grid>

        {/*right part gif  */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/budding-pop-cute.gif"
            alt="GIF Animation"
            width="400"
            height="400"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

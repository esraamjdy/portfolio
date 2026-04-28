"use client";

import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Manrope } from "next/font/google";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import CustomLink from "./customLink";

const manrope = Manrope({ weight: "400", subsets: ["latin"] });

const ProjectCard: React.FC<{
  image: string;
  title: string;
  projectType: string;
  description: string;
  year: string;
  role: string;
  demo?: string;
  repo?: string;
}> = ({ image, title, projectType, description, year, role, demo, repo }) => {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        width: "100%",
        borderRadius: "2rem",
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        padding: "2.5rem",
        gap: "2rem",
        fontFamily: manrope.style.fontFamily,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.25)",
        },
      }}
    >
      <Box
        sx={{
          flex: { lg: "0 0 42%", xs: "1 1 100%" },
          minHeight: "260px",
          borderRadius: "1.8rem",
          overflow: "hidden",
          position: "relative",
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          style={{
            objectFit: "cover",
            filter: "saturate(1.05) brightness(0.9)",
          }}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "1.75rem",
        }}
      >
        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            flexWrap="wrap"
            spacing={2}
          >
            <Typography
              sx={{
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "#FF70B7",
                letterSpacing: "0.2rem",
                textTransform: "uppercase",
                lineHeight: 1.2,
              }}
            >
              {projectType}
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                color: "#B0B0B0",
              }}
            >
              {year}
            </Typography>
          </Stack>

          <Typography
            sx={{
              fontSize: { lg: "2rem", xs: "1.75rem" },
              fontWeight: 600,
              color: "#FFFFFF",
              lineHeight: 1.1,
              marginTop: "1rem",
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontSize: "1.05rem",
              fontWeight: 300,
              color: "#d0d0d0",
              lineHeight: 1.8,
              marginTop: "1.5rem",
              maxWidth: "100%",
            }}
          >
            {description}
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "rgba(255,255,255,0.03)",
            borderRadius: "1.4rem",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "1.5rem",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: 600,
              color: "#FFFFFF",
              marginBottom: "1rem",
            }}
          >
            Project Details
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: "1rem",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  color: "#B0B0B0",
                  textTransform: "uppercase",
                  letterSpacing: "0.12rem",
                  marginBottom: "0.5rem",
                }}
              >
                Role
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "#FFFFFF",
                  fontWeight: 400,
                }}
              >
                {role}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  color: "#B0B0B0",
                  textTransform: "uppercase",
                  letterSpacing: "0.12rem",
                  marginBottom: "0.5rem",
                }}
              >
                Year
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "#FFFFFF",
                  fontWeight: 400,
                }}
              >
                {year}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          {demo && (
            <CustomLink
              link={demo}
              children={
                <>
                  LIVE DEMO
                  <MdArrowOutward
                    style={{
                      marginLeft: "8px",
                      fontWeight: "700",
                      fontSize: "1.6rem",
                    }}
                  />
                </>
              }
            />
          )}
          {repo && (
            <CustomLink
              link={repo}
              children={
                <>
                  SEE ON GITHUB
                  <FaGithub
                    style={{
                      marginLeft: "8px",
                      fontWeight: "700",
                      fontSize: "1.6rem",
                    }}
                  />
                </>
              }
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;

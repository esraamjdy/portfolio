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
  demo?: string; // جعل الرابط اختياريًا
  repo: string;
}> = ({ image, title, projectType, description, year, role, demo, repo }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        width: "100%",
        height: "auto",
        borderRadius: "1.6rem",
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        padding: "3rem",
        gap: "3rem",
        fontFamily: manrope.style.fontFamily,
      }}
    >
      <Box
        sx={{
          width: { lg: "40%", xs: "100%" },
          display: "flex",
          justifyContent: "center",
          align: "center",
          backgroundColor: "#333333",
          borderRadius: "1.2rem",
          padding: "1rem",
        }}
      >
        <Image
          src={image}
          alt={title}
          width={500}
          height={400}
          style={{
            borderRadius: "1.2rem",
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </Box>

      <Box
        sx={{
          width: { lg: "60%", xs: "100%" },
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1.5rem",
          marginLeft: { lg: "1.5rem", xs: "0" },
          marginTop: { lg: "4rem", xs: "1rem" },
        }}
      >
        <Stack sx={{ marginBottom: "5rem" }}>
          <Typography
            sx={{
              fontSize: { lg: "2.4rem", xs: "2rem" },
              fontWeight: "500",
              color: "#fff",
              lineHeight: "1.3",
              fontFamily: manrope.style.fontFamily,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: { lg: "1.4rem", xs: "1rem" },
              fontWeight: "200",
              color: "#b0b0b0",
              lineHeight: "1.2",
              fontFamily: manrope.style.fontFamily,
              marginTop: "1.5rem",
            }}
          >
            {description}
          </Typography>
          <Box>
            <Typography
              sx={{
                fontSize: "1.4rem",
                fontWeight: "500",
                color: "#fff",
                marginTop: "1.5rem",
                marginBottom: "1rem",
                lineHeight: "1.6",
              }}
            >
              PROJECT INFO
            </Typography>
            <Divider sx={{ marginBottom: "1.5rem", borderColor: "#555" }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: "1rem",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.4rem",
                  color: "#fff",
                  fontWeight: "400",
                  fontFamily: manrope.style.fontFamily,
                }}
              >
                Year
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.4rem",
                  color: "#b0b0b0",
                  fontWeight: "300",
                  fontFamily: manrope.style.fontFamily,
                }}
              >
                {year}
              </Typography>
            </Box>
            <Divider sx={{ borderColor: "#555" }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingY: "1rem",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.4rem",
                  color: "#fff",
                  fontWeight: "500",
                  fontFamily: manrope.style.fontFamily,
                }}
              >
                Role
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.4rem",
                  color: "#b0b0b0",
                  fontWeight: "400",
                  fontFamily: manrope.style.fontFamily,
                }}
              >
                {role}
              </Typography>
            </Box>
            <Divider sx={{ borderColor: "#555" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "1.5rem",
              marginTop: "2rem",
            }}
          >
            {demo && ( // عرض الرابط فقط إذا كان موجودًا
              <CustomLink
                link={demo}
                children={
                  <>
                    LIVE DEMO
                    <MdArrowOutward
                      style={{
                        marginLeft: "8px",
                        fontWeight: "700",
                        fontSize: "1.8rem",
                      }}
                    />
                  </>
                }
              />
            )}
            <CustomLink
              link={repo}
              children={
                <>
                  SEE ON GITHUB
                  <FaGithub
                    style={{
                      marginLeft: "8px",
                      fontWeight: "700",
                      fontSize: "1.7rem",
                    }}
                  />
                </>
              }
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProjectCard;

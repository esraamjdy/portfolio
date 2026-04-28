"use client";
import { Bebas_Neue, Manrope } from "next/font/google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import { CustomButton } from "@/components/customButton";
import { FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400"],
});

// Animation Variants
const containerVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const letterVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const buttonVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const hoverEffect = {
  whileHover: { scale: 1.1, rotate: 2, transition: { duration: 0.3 } },
};

const iconVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay: i * 0.1 },
  }),
};

const shakeEffect = {
  whileHover: { x: [-5, 5, -5, 5, 0], transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      style={{
        background: "linear-gradient(135deg, #000 0%, #111 100%)",
        padding: "4rem",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        sx={{
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
          {/* Animated Heading */}
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
            <motion.div>
              {`Hello, I AM `.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariant}
                  style={{ color: "white" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            <motion.div>
              {`Esraa Magdy.`.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariant}
                  style={{ color: char === "." ? "#FF0080" : "white" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </Typography>

          {/* Animated Subtext */}
          <motion.div variants={buttonVariant}>
            <Typography
              variant="h5"
              sx={{
                paddingTop: "1.5rem",
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
                fontWeight: 400,
                color: "#B0B0B0",
                fontFamily: manrope.style.fontFamily,
                lineHeight: "1.8",
              }}
            >
              Full-Stack Developer specializing in modern web technologies, delivering scalable solutions with a focus on user experience and performance.
            </Typography>
          </motion.div>

          {/* Professional Role */}
          <motion.div variants={buttonVariant}>
            <Typography
              variant="h6"
              sx={{
                paddingTop: "1rem",
                fontSize: { xs: "1rem", sm: "1.2rem" },
                fontWeight: 300,
                color: "#FF0080",
                fontFamily: manrope.style.fontFamily,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Front-End & Back-End Expertise
            </Typography>
          </motion.div>

          {/* Buttons Section */}
          <motion.div variants={buttonVariant}>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                marginTop: "2rem",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ textDecoration: "none" }}
              >
                <motion.div {...hoverEffect}>
                  <CustomButton
                    label="Contact Me"
                    icon={<FaCircle size={10} />}
                    sx={{
                      background: "linear-gradient(45deg, #FF0080, #7700FF)",
                      color: "white",
                      padding: "0.8rem 2rem",
                      fontSize: "1rem",
                      borderRadius: "50px",
                      width: "fit-content",
                      "&:hover": {
                        background: "linear-gradient(45deg, #7700FF, #FF0080)",
                      },
                    }}
                  />
                </motion.div>
              </ScrollLink>
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ textDecoration: "none" }}
              >
                <motion.div {...hoverEffect}>
                  <CustomButton
                    label="View My Work"
                    icon={<FaCircle size={10} />}
                    sx={{
                      background: "transparent",
                      color: "#FF0080",
                      border: "2px solid #FF0080",
                      padding: "0.8rem 2rem",
                      fontSize: "1rem",
                      borderRadius: "50px",
                      width: "fit-content",
                      "&:hover": {
                        background: "#FF0080",
                        color: "white",
                      },
                    }}
                  />
                </motion.div>
              </ScrollLink>
            </Stack>
          </motion.div>

          {/* Animated Icons */}
          <Stack direction="row" spacing={2} sx={{ marginTop: "1rem" }}>
            {[1, 2].map((index) => (
              <motion.div
                key={index}
                variants={iconVariant}
                custom={index}
                {...shakeEffect}
              >
                <IconButton
                  component="a"
                  href={
                    index === 1
                      ? "https://linkedin.com/in/esraamjdy"
                      : "https://github.com/esraamjdy"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderRadius: "50%",
                    backgroundColor: "#222",
                    width: "50px",
                    height: "50px",
                    color: "#FF0080",
                    "&:hover": { backgroundColor: "#FF0080", color: "#fff" },
                  }}
                >
                  {index === 1 ? (
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                      }}
                    >
                      in
                    </Typography>
                  ) : (
                    <GitHubIcon sx={{ fontSize: "1.2rem" }} />
                  )}
                </IconButton>
              </motion.div>
            ))}
          </Stack>
        </Box>
      </Stack>
    </motion.div>
  );
}

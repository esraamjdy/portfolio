"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, Tabs, Tab, Stack } from "@mui/material";
import { WebOutlined, PhoneAndroidOutlined } from "@mui/icons-material";
import ProjectCard from "./project"; 
import { bebasNeue } from "../theme/theme";
import { motion } from "framer-motion";

const initialProjects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Tailwind CSS.",
    year: "2023",
    role: "Front-end Developer",
    demoLink: "https://portfolio.com",
    githubLink: "https://github.com/username/portfolio",
    image: "/portfolio.webp",
    type: "Web Development",
  },
  {
    id: 2,
    title: "Autism detection Mobile App",
    description: "A cross-platform mobile app built with Flutter which detects Autism and provides a user-friendly interface. I used 2 AI models to detect Autism by two different methods either using images or filling a form. Flask was used for the backend.",
    year: "2023",
    role: "Mobile Developer",
    githubLink: "https://github.com/username/mobile-app",
    image: "/autism.jpg",
    type: "Mobile Development",
    backend: "AI"
  },
  {
    id: 3,
    title: "HR Management System",
    description: "A full-stack e-commerce website built with HTML, CSS, JavaScript and Flask with Python for the backend.",
    year: "2022",
    role: "Full Stack Developer",
    githubLink: "https://github.com/username/ecommerce",
    image: "/HRMS.jpg",
    type: "Web Development",
  },
];

export default function FeaturedProjects() {
  const [selectedType, setSelectedType] = useState("Web Development");
  const [filteredProjects, setFilteredProjects] = useState(initialProjects);

  const handleTypeChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedType(newValue);
  };

  useEffect(() => {
    setFilteredProjects(initialProjects.filter((project) => project.type === selectedType));
  }, [selectedType]);

  // Framer Motion Variants
  const titleVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const tabsVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.5 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: index * 0.3 },
    }),
  };

  const gradientText = {
    background: "white",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const hoverCard = {
    scale: 1.05,
    boxShadow: "0px 10px 30px rgba(255, 0, 128, 0.5)",
    transition: { duration: 0.3 },
  };

  return (
    <Box sx={{ backgroundColor: "black", color: "white", padding: "3rem" }} id="projects">
      {/* Animated Title */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={titleVariant}
      >
        <Stack direction="row" gap={"25rem"}>
          <Typography
            variant="h4"
            sx={{
              ...gradientText,
              fontWeight: "regular",
              textAlign: "left",
              marginBottom: "2rem",
              fontSize: "4.75rem",
              fontFamily: bebasNeue.style.fontFamily,
              gap: "2rem",
              marginLeft: { xs: "0", md: "2.5rem" },
            }}
          >
            Featured Projects
          </Typography>
        </Stack>
      </motion.div>

      {/* Animated Tabs */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={tabsVariant}
      >
        <Tabs
          value={selectedType}
          onChange={handleTypeChange}
          centered
          textColor="inherit"
          TabIndicatorProps={{
            style: {
              background: "linear-gradient(45deg, #FF0080, #7700FF)",
              height: "4px",
              borderRadius: "2px",
            },
          }}
          sx={{
            marginBottom: "3rem",
            "& .MuiTab-root": {
              fontWeight: "bold",
              textTransform: "none",
              fontSize: "1.1rem",
              color: "#CCCCCC",
              "&:hover": { color: "#FFFFFF" },
            },
            "& .Mui-selected": { color: "#FFFFFF" },
          }}
        >
          <Tab
            label="Web Development"
            value="Web Development"
            icon={<WebOutlined />}
            iconPosition="start"
          />
          <Tab
            label="Mobile Development"
            value="Mobile Development"
            icon={<PhoneAndroidOutlined />}
            iconPosition="start"
          />
        </Tabs>
      </motion.div>

      {/* Animated Project Cards */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariant}
            whileHover={hoverCard}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              year={project.year}
              role={project.role}
              image={project.image}
              demo={project.demoLink}
              repo={project.githubLink}
              projectType={project.type}
            />
          </motion.div>
        ))}
      </motion.div>
    </Box>
  );
}

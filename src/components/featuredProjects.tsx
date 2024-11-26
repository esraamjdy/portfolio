"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, Tabs, Tab, Stack } from "@mui/material";
import { WebOutlined, PhoneAndroidOutlined } from "@mui/icons-material";
import ProjectCard from "./project"; 
import { bebasNeue } from "../theme/theme";

const initialProjects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Tailwind CSS.",
    year: "2023",
    role: "Front-end Developer",
    demoLink: "https://portfolio.com",
    githubLink: "https://github.com/username/portfolio",
    image: "/portfolio.jpg",
    type: "Web Development",
  },
  {
    id: 2,
    title: "Autism detection Mobile App",
    description: "A cross-platform mobile app built with Flutter which detects Autism and provides a user-friendly interface. I used 2 AI models to detect Autism by two different methods either using images or filling a form. Flask was used for the backend.",
    year: "2023",
    role: "Mobile Developer",
    demoLink: "https://mobileapp.com",
    githubLink: "https://github.com/username/mobile-app",
    image: "/mobile.jpg",
    type: "Mobile Development", "backend": "AI"
  },
  {
    id: 3,
    title: "HR Management System",
    description: "A full-stack e-commerce website built with HTML, CSS, JavaScript and Flask with Python for the backend.",
    year: "2022",
    role: "Full Stack Developer",
    demoLink: "https://ecommerce.com",
    githubLink: "https://github.com/username/ecommerce",
    image: "/ecommerce.jpg",
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

  return (
    <Box sx={{ backgroundColor: "black", color: "white", padding: "3rem",}}>
      <Stack direction="row" gap={"8rem"} >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "regular",
              textAlign: "left",
              marginBottom: "2rem",
              fontSize: "4.75rem",
              fontFamily: bebasNeue.style.fontFamily,
              color: "#FFFFFF",
              gap: "2rem"
            }}
          >
            Featured Projects
          </Typography>
          <Tabs
            value={selectedType}
            onChange={handleTypeChange}
            centered
            textColor="inherit"
            TabIndicatorProps={{
              style: { backgroundColor: "#FF0080", height: "4px", borderRadius: "2px" },
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
      </Stack>

      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          year={project.year}
          role={project.role}
          image={project.image}
          demo={project.demoLink}
          repo={project.githubLink}
          projectType={project.type}
        />
      ))}
    </Box>
  );
}
"use client";

import React from "react";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  Grid,
  Button,
  Divider,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { bebasNeue } from "@/theme/theme";
import AboutAgain from "@/components/AboutAgain";
import Header from "@/components/header";
import Capabilities from "@/components/Capabilities";
import Experience from "@/components/Experience";




const projects = [
  {
    title: "Portfolio Website",
    description: "Built using React and Material UI.",
    image: "/images/portfolio.png",
    link: "#",
  },
  {
    title: "Flight Booking System",
    description: "A full-stack app built with Flask.",
    image: "/images/booking.png",
    link: "#",
  },
];

export default function AboutPage() {
  return (
    <Stack spacing={0} sx={{ backgroundColor: "black", color: "#fff" }} >
      <AboutAgain />
      <Divider sx={{borderColor: "#484848"}}/>
      <Capabilities />
      <Divider sx={{borderColor: "#484848"}}/>
      <Experience />
      <Divider sx={{borderColor: "#484848"}}/>
      
    </Stack>
  );
}

"use client";

import About from "@/components/About";
import FeatureProjects from "@/components/featuredProjects";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { Divider } from "@mui/material";
import Connect from "@/components/Contact";




export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Divider sx={{borderColor: "#484848"}}/>
      <FeatureProjects />
      <Divider sx={{borderColor: "#484848"}}/>
      <About />      
      <Divider sx={{borderColor: "#484848"}}/>
      <Connect />
    </div>
  );
}
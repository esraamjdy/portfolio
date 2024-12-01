"use client";

import About from "@/components/About";
import FeatureProjects from "@/components/featuredProjects";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { Divider, Link } from "@mui/material";
import Connect from "@/components/Contact";
import AboutPage from "./about/page";




export default function HomePage() {
  return (
    <div id="home" style={{backgroundColor: "#000"}}>
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
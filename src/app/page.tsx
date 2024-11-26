"use client";

import FeatureProjects from "@/components/featuredProjects";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { Divider } from "@mui/material";




export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Divider sx={{borderColor: "#484848"}}/>
      <FeatureProjects />
    </div>
  );
}
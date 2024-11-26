"use client";

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";
import { Inter, Bebas_Neue } from "next/font/google";
import { PaddingOutlined } from "@mui/icons-material";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});


export default function Header() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ backgroundColor: "black"}}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ flexGrow: 1, paddingLeft: "4rem", paddingBottom:"24px", paddingTop:"24px"}}>
          <Link
            href="/"
            style={{
              backgroundColor: "inherit",
              textDecoration: "none",
              color: "#C7C7C7",
              fontSize: "2rem",
              fontFamily: bebas.style.fontFamily
            }}
          >
            Esraa Magdy
          </Link>
        </Typography>
        <Box sx={{ display: "flex", gap: "1.3rem" }} >
          <Button component={Link} href="/about" sx={{ color: "#C7C7C7", fontFamily: inter.style.fontFamily, fontSize: "0.8rem"}}>
            About   
          </Button>
          <Button component={Link} href="/projects" sx={{ color: "#C7C7C7", fontFamily: inter.style.fontFamily, fontSize: "0.8rem"}}>
            Projects
          </Button>
          <Button component={Link} href="/contact" sx={{ color: "#C7C7C7", fontFamily: inter.style.fontFamily, fontSize: "0.8rem"}}>
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

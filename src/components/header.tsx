"use client";

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

export default function Header() {
  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", Color: "inherit" }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link href="/" style={{ backgroundColor: "inherit", textDecoration: "none", color: "inherit" }}>
            My Portfolio
          </Link>
        </Typography>
        <Box>
          <Button component={Link} href="/about" sx={{ color: "#B0B0B0" }}>
            About
          </Button>
          <Button component={Link} href="/projects">
            Projects
          </Button>
          <Button component={Link} href="/contact">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

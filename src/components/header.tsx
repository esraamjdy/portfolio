"use client";

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as ScrollLink } from "react-scroll"; // لإضافة التمرير السلس
import { Inter, Bebas_Neue } from "next/font/google";

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
      sx={{
        backgroundColor: "black",
        marginTop: "-30px",
        zIndex: 1100,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* العنوان الرئيسي */}
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            paddingLeft: "4rem",
            paddingBottom: "24px",
            paddingTop: "24px",
          }}
        >
          <ScrollLink
            to="home" // id الخاص بالقسم
            spy={true}
            smooth={true}
            offset={-70} // تعويض الهيدر الثابت
            duration={500}
            style={{
              backgroundColor: "inherit",
              textDecoration: "none",
              color: "#C7C7C7",
              fontSize: "2rem",
              fontFamily: bebas.style.fontFamily,
              cursor: "pointer",
            }}
          >
            Esraa Magdy
          </ScrollLink>
        </Typography>

        {/* الروابط */}
        <Box sx={{ display: "flex", gap: "1.3rem" }}>
          <Button
            component={ScrollLink}
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            sx={{
              color: "#C7C7C7",
              fontFamily: inter.style.fontFamily,
              fontSize: "0.8rem",
              cursor: "pointer",
            }}
          >
            About
          </Button>
          <Button
            component={ScrollLink}
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            sx={{
              color: "#C7C7C7",
              fontFamily: inter.style.fontFamily,
              fontSize: "0.8rem",
              cursor: "pointer",
            }}
          >
            Projects
          </Button>
          <Button
            component={ScrollLink}
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            sx={{
              color: "#C7C7C7",
              fontFamily: inter.style.fontFamily,
              fontSize: "0.8rem",
              cursor: "pointer",
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

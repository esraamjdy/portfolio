import { bebasNeue, manrope } from "@/theme/theme";
import { Box, Stack, Typography } from "@mui/material";
import { CustomButton } from './customButton';
import CustomLink from './customLink';
import Link from "next/link";

export default function About() {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        padding: { xs: "2rem", md: "4rem 8rem" }, 
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }} 
        spacing={{ xs: 4, md: 10 }} 
        alignItems="flex-start"
        justifyContent="space-between"
      >

        <Typography
          variant="h4"
          sx={{
            fontWeight: "regular",
            fontSize: { xs: "3rem", md: "4.75rem" },
            fontFamily: bebasNeue.style.fontFamily,
            color: "#FFFFFF",
            lineHeight: "1.2",
            marginRight: { xs: 0, md: "2.5rem" },
          }}
        >
          About Me
        </Typography>

        <Stack direction="column" spacing={2} sx={{ maxWidth: "600px" }}>
          <Typography
            sx={{
              fontWeight: "500",
              fontFamily: "Manrope, sans-serif",
              fontSize: { xs: "1.2rem", md: "2rem" },
              lineHeight: "1.4",
              color: "#FFFFFF", 
            }}
          >
            I am a full-stack developer based in Cairo. Has Mobile Development and ML background.
          </Typography>
          <Typography
            sx={{
              fontWeight: "300",
              fontFamily: "Manrope, sans-serif",
              fontSize: { xs: "1rem", md: "1.2rem" },
              lineHeight: "1.5",
              color: "#B0B0B0", 
            }}
          >
            I am a full-stack developer based in Cairo, looking for exciting
            opportunities. Has Mobile Development and ML background. Likes to
            focus on accessibility when developing. Passionate and curious
            about solving problems. Currently, I’m exploring Reactjs, Nextjs, Typescript, Python
            and a bit of Designing. While I am not a programmer, I enjoy drawing, photography, and cooking. 
            Learning more to improve my skill.
          </Typography>

          <CustomLink link="/About">
                MORE ABOUT ME
          </CustomLink>

        </Stack>
      </Stack>
    </Box>
  );
}

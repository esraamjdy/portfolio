import { bebasNeue, manrope } from "@/theme/theme";
import { Stack, Typography, Grid, Button, Box } from "@mui/material";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Material UI",
  "Flutter",
  "SQL",
  "Python",
  "Flask",
  "Java",
  "Problem Solving",
  "C++",
  "GitHub",
  "Adobe Photoshop",
];

export default function Capabilities() {
  return (
    <Box
      sx={{
        backgroundColor: "#000", 
        padding: "4rem 3rem", 
        color: "#fff", 
        minHeight: "100vh", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
      }}
    >
      <Stack spacing={0} direction="row" alignItems="left" paddingLeft={"6rem"} gap={"3rem"}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: bebasNeue.style.fontFamily,
            fontSize: { xs: "3rem", md: "4.5rem" }, 
            color: "#fff",
            textAlign: "left", 
            width: { xs: "100%", md: "50%" },
          }}
        >
          My Capabilities
        </Typography>
        <Stack direction={"column"} gap={"2rem"}>
            <Typography
            variant="h2"
            sx={{
                fontFamily: manrope.style.fontFamily,
                fontSize: { xs: "0.8rem", md: "1.4rem" }, 
                color: "#C7C7C7",
                fontWeight: "400",
            
            }}
            >
            I am constantly seeking opportunities to expand my expertise and refine my abilities, embracing every challenge as a chance to grow and innovate.
            </Typography>

            <Grid container spacing={3} justifyContent="center">
                {skills.map((skill, index) => (
                    <Grid item xs={6} sm={4} md={3} key={index}>
                        <Button
                            variant="outlined"
                            sx={{
                            borderColor: "#484848", 
                            color: "#fff",
                            borderRadius: "20px", 
                            fontSize: "0.9rem", 
                            textTransform: "capitalize", 
                            "&:hover": {
                                backgroundColor: "#FF4081",
                                color: "#fff",
                            },
                            width: "100%", 
                            padding: "0.5rem 1rem", 
                            }}
                        >
                            {skill}
                        </Button>
                    </Grid>
                 ))}
            </Grid>
        </Stack>
        
      </Stack>
    </Box>
  );
}

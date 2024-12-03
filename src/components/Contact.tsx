import { Box, Stack, Typography, IconButton } from "@mui/material";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import { manrope, bebasNeue } from "../theme/theme";
import { CustomButton } from "./customButton";
import { motion } from "framer-motion";
import { sendEmail } from "@/api/sendEmail";
import ConnectForm from "./ConnectForm";
import Grid from '@mui/material/Grid2';


const hoverEffect = {
  whileHover: { scale: 1.1, rotate: 2, transition: { duration: 0.3 } },
};

const Connect = () => {

  return (
    <Grid 
    container
      id="contact"
      sx={{
        padding: { xs: "4rem", lg: "8rem" },
        paddingTop: { xs: "2rem", lg: "4rem" },
        backgroundColor: "#000",
        // display: "flex",
        // flexDirection: { xs: "column-reverse", lg: "row" },
        // justifyContent: "space-between",
        // alignItems: "flex-start",
        // gap: { xs: "4rem", lg: "0rem" },
      }}
      size={{ xs: 12, lg: 12 }}
      spacing={2}
    >
      <Grid  size={{ xs: 12, lg: 4 }}>

      <Stack
        direction={"column"}
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "space-between",
          height: "100%",
          gap: "2.5rem",
        }}
      >
        <Stack direction="column" gap="0.5rem">
          <Typography
            variant="h1"
            sx={{
              fontFamily: bebasNeue.style.fontFamily,
              fontWeight: "700",
              fontSize: "4.75rem",
              letterSpacing: "0.2rem",
              color: "#FFF",
            }}
          >
            LET'S CONNECT
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: manrope.style.fontFamily,
              fontWeight: "400",
              fontSize: "1.2rem",
              color: "#C7C7C7",
              marginTop: "1rem",
            }}
          >
            Say hello at{" "}
            <Link
              style={{
                color: "#FFF",
                borderBottom: "1px solid #FF0080",
              }}
              href="mailto:esraamjdy@gmail.com"
            >
              esraamjdy@gmail.com
            </Link>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: manrope.style.fontFamily,
              fontWeight: "400",
              fontSize: "1.2rem",
              color: "#C7C7C7",
            }}
          >
            For more info,{" "}
            <Link
              style={{
                color: "#FFF",
                borderBottom: "1px solid #FF0080",
              }}
              href="https://drive.google.com/file/d/1Z731pnI5hKtc-zv3TvisTfz5leYUqQ-s/view?usp=sharing"
            >
              here is my resume
            </Link>
          </Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            gap: "1.6rem",
          }}
        >
          <Link href="https://github.com/esraamjdy">
            <IconButton
              sx={{
                backgroundColor: "transparent",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <FaGithub size={25} color="#FF0080" />
            </IconButton>
          </Link>
          <Link href="https://www.linkedin.com/in/esraamjdy/">
            <IconButton
              sx={{
                backgroundColor: "transparent",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <FaLinkedinIn size={25} color="#FF0080" />
            </IconButton>
          </Link>
        </Stack>
        <Typography
          sx={{
            fontFamily: manrope.style.fontFamily,
            fontWeight: "400",
            fontSize: "1rem",
            color: "#C7C7C7",
            alignSelf: "left",
            marginTop: { xs: "2rem", lg: "30rem" },
          }}
        >
          © 2024 Esraa Magdy
        </Typography>
      </Stack>
      </Grid>

      <Grid   size={{ xs: 12, lg: 8 }}>
      <ConnectForm />

      </Grid>
      
    </Grid>
  );
};

export default Connect;

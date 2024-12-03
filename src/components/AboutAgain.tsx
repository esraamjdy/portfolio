import { bebasNeue } from "@/theme/theme";
import { Stack, Typography, Box, Button, IconButton } from "@mui/material";
import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import Image from "next/image";
import { CustomButton } from "./customButton";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };
  
  const hoverEffect = {
    whileHover: { scale: 1.1, rotate: 2, transition: { duration: 0.3 } },
  };

  const iconVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, delay: i * 0.1 },
    }),
  };

  const shakeEffect = {
    whileHover: { x: [-5, 5, -5, 5, 0], transition: { duration: 0.5 } },
  };

  
export default function AboutAgain() {
    const handleDownload = () => {
        
        const link = document.createElement("a");
        link.href = "https://drive.google.com/file/d/1Z731pnI5hKtc-zv3TvisTfz5leYUqQ-s/view?usp=sharing"; 
        link.download = "resume.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    

  return (
    <div style={{ backgroundColor: "#000", padding: "2rem", color: "#fff" }}>
      <Stack spacing={6} direction="column" alignItems="center">

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          sx={{
            width: "100%",
            maxWidth: "1200px",
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >

          <Typography
            variant="h2"
            sx={{
              fontFamily: bebasNeue.style.fontFamily,
              fontSize: { xs: "3rem", md: "5rem" },
              color: "#fff",
              flex: "1",
              textAlign: "left",
            }}
          >
            ABOUT ME
          </Typography>

          <Stack direction="column" spacing={4} sx={{ flex: "2" }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "#ccc",
                lineHeight: "1.8",
              }}
            >
              I am a full-stack developer based in Cairo,
               looking for exciting opportunities. Has Mobile Development and ML background. 
               Likes to focus on accessibility when developing. Passionate and curious about solving problems. 
               Currently, I’m exploring Reactjs, Nextjs, Typescript, Python and a bit of Designing. 
               While I am not a programmer, I enjoy drawing, photography, and cooking. Learning more to improve my skill.
            </Typography>
            <Stack direction="row" spacing={3} margin={"auto"}>
            <motion.div variants={buttonVariant}>
            <Stack direction="row" spacing={3} margin={"auto"}>
              <Link href="/resume.pdf" passHref></Link>
              <motion.div {...hoverEffect}>
                <CustomButton 
                  label="Download Resume"
                  icon={<MdDownloadForOffline size={20} />}
                  onClick={handleDownload}
                  
                  sx={{
                    background: "linear-gradient(45deg, #FF0080, #7700FF)",
                    color: "white",
                    padding: "0.8rem 2rem",
                    fontSize: "1rem",
                    borderRadius: "50px",
                    width: "fit-content",
                    "&:hover": {
                      background: "linear-gradient(45deg, #7700FF, #FF0080)",
                    },
                  }}
                />
              </motion.div>
            </Stack>
          </motion.div>
              
              
              {
[
                {
                    link:"https://linkedin.com",
                    Icon: FaLinkedinIn

                },
                    {
                    link:"https://github.com",
                    Icon: FaGithub

                },

                ].map((item) => (
                    <Link href={item.link} passHref key={item.link}>
                        <motion.div
                            variants={iconVariant}
                            custom={item}
                            {...shakeEffect}
                        >
                            <IconButton sx={{
                                borderRadius: "50%",
                                backgroundColor: "#222",
                                width: "50px",
                                height: "50px",
                                color: "#FF0080",
                                "&:hover": { backgroundColor: "#FF0080", color: "#222" },
                            }}>
                                <item.Icon 
                                    size={32}
                                    
                                />
                                
                            </IconButton>
                        </motion.div>
                        </Link>
                ))

              }
              </Stack>
             
            </Stack>
          </Stack>
        </Stack>

        
    </div>
  );
}

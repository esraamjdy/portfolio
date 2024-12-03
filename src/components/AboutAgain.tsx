import { bebasNeue } from "@/theme/theme";
import { Stack, Typography, Box, Button, IconButton } from "@mui/material";
import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import Image from "next/image";
import { CustomButton } from "./customButton";




  
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
              <Link href="/resume.pdf" passHref>
              <CustomButton
                label="Download Resume"
                icon={<MdDownloadForOffline size={20} />}
                onClick={handleDownload}
                sx={{
                  fontSize: "0.8rem", 
                  padding: "8px 16px",
                  width: "fit-content",
                  "&:hover": { backgroundColor: "484848" },
                }}
                />
              </Link>
              <Link href="https://linkedin.com" passHref>
                <IconButton sx={{ backgroundColor: "black", "&:hover": { backgroundColor: "484848" }}}>
                  <FaLinkedinIn color="#FF0080" size={32}/>
                </IconButton>
              </Link>
              <Link href="https://github.com" passHref>
                <IconButton sx={{ backgroundColor: "black", "&:hover": { backgroundColor: "484848" } }}>
                  <FaGithub color="#FF0080" size={32}/>
                </IconButton>
              </Link>
            </Stack>
          </Stack>
        </Stack>

        
      </Stack>
    </div>
  );
}

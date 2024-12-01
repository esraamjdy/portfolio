import { Stack, Typography, Box } from "@mui/material";

const experience = [
  {
    role: "Full-stack Intern",
    description:
      "Built a full-stack flight booking system using HTML, CSS, JavaScript, and Flask. The system included features for managing bookings and flight data.",
    company: "Remotecoders",
    date: "Oct 2024",
  },
];

const Experience = () => {
  return (
    <Box
      id="experience"
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "6rem 2rem",
      }}
    >
      <Stack
        alignItems="flex-start" // محاذاة العنوان إلى اليسار
        spacing={9}
        direction={'row'}
        sx={{
          maxWidth: "1200px", // نفس العرض المحدد لأي قسم آخر
          margin: "0 auto", // للمحاذاة المركزية للعنصر بالكامل
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: { xs: "2.5rem", md: "4.5rem" },
            textAlign: "left",
            letterSpacing: "0.1rem",
            ml: { xs: "0.5rem", md: "1rem" }, // نفس المسافة المستخدمة في القسم الآخر
          }}
        >
          My Experience
        </Typography>

        <Stack spacing={4} sx={{ maxWidth: "900px", width: "100%" }}>
          {experience.map((exp, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid #333",
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "1.3rem",
                  }}
                >
                  {exp.role}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#C7C7C7",
                    fontSize: "1rem",
                  }}
                >
                  {exp.date}
                </Typography>
              </Stack>

              <Typography
                variant="h6"
                sx={{
                  color: "#FF0080",
                  fontSize: "1.1rem",
                  fontFamily: "Manrope, sans-serif",
                }}
              >
                {exp.company}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#C7C7C7",
                  fontSize: "1rem",
                  fontFamily: "Manrope, sans-serif",
                }}
              >
                {exp.description}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Experience;

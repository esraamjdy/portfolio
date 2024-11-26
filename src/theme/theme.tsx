import { createTheme } from "@mui/material/styles";
import { Bebas_Neue } from "next/font/google";


export const bebasNeue = Bebas_Neue({
    subsets: ["latin"],
    weight: ["400"],
});

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#d32f2f" },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});


export default theme;
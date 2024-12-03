import { manrope } from "@/theme/theme";
import { Button } from "@mui/material";

export const CustomButton = ({
  label,
  onClick,
  icon,
  sx,
}: {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  sx?: object;
  type?: "submit" | "reset" | "button";
}) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      
      sx={{
        backgroundColor: "linear-gradient(45deg, #FF0080, #7700FF)",
        color: "black",
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "10rem",
        width:"11.68rem",
        height: "3.37rem",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        fontFamily: manrope.style.fontFamily,
        "&:hover": {
          backgroundColor: "pink",
        },
        ...sx
      }}
    >
      {label}
      {icon && icon}
    </Button>
  );
};

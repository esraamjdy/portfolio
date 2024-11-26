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
}) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        backgroundColor: "#FF0080",
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
        fontFamily: "Manrope, sans-serif",
        "&:hover": {
          backgroundColor: "pink",
        },
      }}
    >
      {label}
      {icon && icon}
    </Button>
  );
};

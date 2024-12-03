import Link from "next/link";
import React, { ReactNode } from "react";

import { Manrope } from "next/font/google";


const manrope = Manrope({ weight: "400", subsets: ["latin"] });

const CustomLink: React.FC<{ children: ReactNode; link: string }> = ({
  children,
  link,
}) => {
  return (
    <Link
      style={{
        fontFamily: manrope.style.fontFamily,
        borderColor: "#FF0080",
        borderBottom: "2px solid",
        paddingBottom: "4px",
        display: "flex",
        alignItems: "center",
        fontWeight: "600",
        fontSize: "1rem",
        color:"#FF0080",
        width: "fit-content",
        letterSpacing:"0.1rem",

      }}
      href={link}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
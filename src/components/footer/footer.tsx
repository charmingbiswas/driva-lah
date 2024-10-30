import { Box, Button } from "@mui/material";
import { HTMLProps } from "react";
import { theme } from "../../theme";

interface FooterProps extends HTMLDivElement {}

export const Footer: React.FC<HTMLProps<FooterProps>> = (props) => {
  return (
    <Box
      id={props.id}
      sx={{
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        display: "flex",
        justifyContent: "center",
        background: "#FCFCFC",
        zIndex: 1,
        borderTop: "1px solid rgba(0, 0, 0, 0.1)",
        height: "64px",
        p: theme.spacing(1, 2),
      }}
    >
      <Button
        sx={{ backgroundColor: "#FFCD05", width: "100%", color: "#026786" }}
      >
        Next
      </Button>
    </Box>
  );
};

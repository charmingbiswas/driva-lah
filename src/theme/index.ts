import { ThemeOptions, createTheme } from "@mui/material";

const themeOptions = (): ThemeOptions => {
  return {
    palette: {
      primary: {
        main: "#00A3AD",
        dark: "#026786",
      },
      text: {
        primary: "#4A4A4A",
        secondary: "#B2B2B2",
      },
    },
    typography: {
      body1: {
        color: "#FFFFFF",
        opacity: 1,
      },
      body2: {
        color: "#026786",
        opacity: 1,
      },
      subtitle1: {
        color: "#4A4A4A",
        opacity: 1,
        fontFamily: "MuseoSansRounded500",
        fontSize: "20px",
        letterSpacing: "0px",
      },
      subtitle2: {},
      h1: {
        color: "#026786",
        opacity: 1,
        fontFamily: "MuseoSansRounded700",
        fontSize: "32px",
      },
      h3: {
        color: "#4A4A4A",
        opacity: 1,
        fontFamily: "MuseoSansRounded500",
        fontSize: "22px",
      },
      h6: {
        color: "#4A4A4A",
        opacity: 1,
        fontFamily: "MuseoSansRounded300",
        fontSize: "12px",
      },
    },
  };
};

export const theme = createTheme(themeOptions());

import { CssBaseline, Box, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { theme } from "./theme";

export const RootLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="MainContainer">
        <Navbar />
        <Box
          className="PageContent"
          sx={{
            p: 4,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

import { Menu } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <Box
      sx={{
        background: "#00a3ad 0% 0% no-repeat padding-box",
        display: "flex",
        justifyContent: { sm: "space-between" },
        alignItems: "center",
        height: "40px",
        p: 2,
      }}
    >
      <Menu sx={{ display: { xs: "inline-block", sm: "none" } }} />
      <img
        src="logo-drivelah.jpg"
        sizes=""
        alt="logo"
        style={{
          width: "142px",
        }}
      />
      <Stack
        direction="row"
        alignItems="center"
        gap={2}
        mr={2}
        sx={{ display: { xs: "none", sm: "flex" } }}
      >
        <NavLink to="#">
          <Typography variant="h5">Learn more</Typography>
        </NavLink>
        <NavLink to="#">
          <Typography variant="h5">List your car</Typography>
        </NavLink>
        <NavLink to="#">
          <Typography variant="h5">Inbox</Typography>
        </NavLink>
      </Stack>
    </Box>
  );
};

export default Navbar;

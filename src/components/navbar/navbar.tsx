import { Box, Typography, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import { theme } from "../../theme";

const StyledNavLink = styled(NavLink)(({}) => ({
  marginRight: theme.spacing(5),
}));

export const Navbar = () => {
  return (
    <Box
      sx={{
        background: "#00a3ad 0% 0% no-repeat padding-box",
        display: "flex",
        justifyContent: "space-between",
        height: "40px",
      }}
    >
      <img
        src="logo-drivelah.jpg"
        alt="logo"
        style={{
          width: "142px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <StyledNavLink to="#">
          <Typography variant="h5">Learn more</Typography>
        </StyledNavLink>
        <StyledNavLink to="#">
          <Typography variant="h5">List your car</Typography>
        </StyledNavLink>
        <StyledNavLink to="#">
          <Typography variant="h5">Inbox</Typography>
        </StyledNavLink>
      </Box>
    </Box>
  );
};

export default Navbar;

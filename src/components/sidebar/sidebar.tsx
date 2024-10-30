import {
  Box,
  List,
  ListItem,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import jsonData from "../../dummy-data/dummy.json";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { useState } from "react";

export const Sidebar = () => {
  const [dropDownValue, setDropdownValue] = useState<string>("Devices");

  const handleDropdown = (e: SelectChangeEvent) => {
    setDropdownValue(e.target.value as string);
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "25%" },
        mb: { xs: 2 },
      }}
    >
      <List
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        {jsonData.map((item) => {
          return (
            <ListItem
              key={item.id}
              secondaryAction={
                <CheckCircleOutlineRoundedIcon color="primary" />
              }
            >
              <Typography variant="body2">{item.name}</Typography>
            </ListItem>
          );
        })}
      </List>
      <Select
        value={dropDownValue}
        onChange={handleDropdown}
        sx={{ width: "100%", display: { sm: "none" } }}
      >
        {jsonData.map((item) => {
          return (
            <MenuItem key={item.id} value={item.name}>
              <Typography variant="body2">{item.name}</Typography>
            </MenuItem>
          );
        })}
      </Select>
    </Box>
  );
};

export default Sidebar;

import { Box, List, ListItem, Typography } from "@mui/material";
import jsonData from "../../dummy-data/dummy.json";
import { useEffect, useState } from "react";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

export const Sidebar = () => {
  const [data, setData] = useState<JSX.Element[]>([]);
  useEffect(() => {
    const elements = jsonData.map((item) => {
      return (
        <ListItem
          key={item.id}
          secondaryAction={<CheckCircleOutlineRoundedIcon color="primary" />}
        >
          <Typography variant="body2">{item.name}</Typography>
        </ListItem>
      );
    });
    setData(elements);
  }, []);
  return (
    <Box
      sx={{
        width: "25%",
      }}
    >
      <List>{data}</List>
    </Box>
  );
};

export default Sidebar;

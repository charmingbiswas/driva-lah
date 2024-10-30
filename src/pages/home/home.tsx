import { Box, Paper, TextField, Typography } from "@mui/material";
import { Sidebar } from "../../components/sidebar";
import sectionsJson from "../../dummy-data/sections.json";

type SectionsProps = {
  key: string;
  device_name: string;
  device_type: string;
};

const Sections: React.FC<SectionsProps> = (props) => {
  return (
    <Box key={props.key} sx={{ height: "359px" }}>
      <Box
        className="left"
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h3">{props.device_name}</Typography>
        <Box>
          <Typography variant="h6">Device type</Typography>
          <TextField
            variant="outlined"
            value={props.device_type}
            sx={{ width: "100%", height: "54px" }}
          />
        </Box>
      </Box>

      <Box className="right" sx={{ width: "50%" }}></Box>
    </Box>
  );
};

export const Home = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Paper
        sx={{
          p: 2,
        }}
      >
        <Box className="Head">
          <Typography variant="h1">Device Management</Typography>
          <Typography variant="subtitle1">
            Add details of the device, if any already installed on your car. If
            none, then continue to next stop
          </Typography>
          {sectionsJson.map((item) => (
            <Sections {...item} />
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

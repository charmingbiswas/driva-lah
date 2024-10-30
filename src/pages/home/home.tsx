import {
  Box,
  Paper,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Sidebar } from "../../components/sidebar";
import sectionsJson from "../../dummy-data/sections.json";
import { useState } from "react";

type SectionsProps = {
  id: string;
  device_name: string;
  device_type: string;
};

const Sections: React.FC<SectionsProps> = (props) => {
  const [show, setShow] = useState(true);
  const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setShow(e.target.checked);
  };
  return (
    <Box sx={{ p: 2, borderBottom: "1px solid rgba(0, 0, 0, 0.1)" }}>
      <Typography variant="h3" sx={{ mb: "20px" }}>
        {props.device_name}
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} gap={2}>
        <Stack
          className="left"
          sx={{ width: { xs: "100%", sm: "50%" } }}
          gap={2}
        >
          <Stack className="left_row1">
            <Typography variant="h6">Device type</Typography>
            <TextField
              variant="outlined"
              value={props.device_type}
              sx={{ width: "100%", height: "54px" }}
            />
          </Stack>

          {show ? (
            <Stack className="left_row2">
              <Typography variant="h6">Serial number</Typography>
              <TextField
                variant="outlined"
                placeholder="Enter the serial number of the device"
                sx={{ width: "100%", height: "54px" }}
              />
            </Stack>
          ) : null}
        </Stack>
        <Stack
          className="right"
          sx={{ width: { xs: "100%", sm: "50%" } }}
          gap={2}
        >
          <Stack className="right_row1">
            <Stack
              direction="row"
              sx={{ justifyContent: { xs: "space-between" } }}
            >
              <Typography variant="subtitle1">
                Bringing your own device?
              </Typography>
              <Switch onChange={handleSwitch} defaultChecked />
            </Stack>
            <Typography variant="h6">
              Toggle this on if you're bringing your own device. Leave it off if
              Drive mate is to provide the device.
            </Typography>
          </Stack>

          {show ? (
            <Stack className="right_row2">
              <Typography variant="h6">
                Upload an image of the device
              </Typography>
              <Box
                sx={{
                  background: "#FCFCFC 0% 0% no-repeat padding-box",
                  border: "1px solid #E6E6E6",
                  borderRadius: "4px",
                  opacity: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "100%", sm: "70%" },
                  height: "160px",
                }}
              >
                <Typography
                  sx={{
                    color: "#026786",
                    textDecoration: "underline",
                  }}
                >
                  Click to upload
                </Typography>
              </Box>
            </Stack>
          ) : null}
        </Stack>
      </Stack>
    </Box>
  );
};

export const Home = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
      <Sidebar />
      <Paper>
        <Stack
          direction="column"
          gap={1}
          sx={{
            p: 2,
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h1">Device Management</Typography>
          <Typography variant="subtitle1">
            Add details of the device, if any already installed on your car. If
            none, then continue to next stop
          </Typography>
        </Stack>
        {sectionsJson.map((item) => (
          <Sections key={item.id} {...item} />
        ))}
      </Paper>
    </Box>
  );
};

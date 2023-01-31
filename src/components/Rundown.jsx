import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  CssBaseline,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Circle } from "@mui/icons-material";

const ResponsiveBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    width: 488,
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const baseURL = "https://nurul-iman-blok-m.herokuapp.com/api/v1/rundown";

export default function HomePage() {
  const [rundown, setRundown] = React.useState("");

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setRundown(response.data);
    });
  }, []);

  if (!rundown) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress sx={{ margin: "auto", color: "green" }} />
      </Box>
    );
  } else {
    return (
      <ResponsiveBox>
        <CssBaseline />

        {rundown.data.map(({ title, ustadz_name, date, time, on_scheduled }, index) => (
          <List>
            <ListItem button key={index + title}>
              <Box sx={{ width: "100%" }}>
                <Card variant="outlined" sx={{borderRadius:"14px"}}>
                  <CardContent>
                    <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
                      {title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: "400",
                        marginTop: "13px",
                      }}>
                      {ustadz_name}
                    </Typography>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography
                        sx={{
                          fontSize: "11px",
                          fontWeight: "400",
                          marginTop: "9px",
                          color: "#818181",
                        }}>
                        {date}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "11px",
                          fontWeight: "400",
                          marginTop: "9px",
                        }}>
                        {time}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent:"end" }}>
                    { on_scheduled ? <Circle sx={{width:'9px', height:"9px", color:"green", marginTop:"13px"}}/> : <Circle sx={{width:'9px', height:"9px", color:"red", marginTop:"13px"}}/>}
                      <Typography
                        sx={{
                          fontSize: "11px",
                          fontWeight: "400",
                          marginTop: "9px",
                          marginLeft:"4px"
                        }}>
                        {on_scheduled ? "Terjadwal" : "dibatalkan"}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </ListItem>
          </List>
        ))}
      </ResponsiveBox>
    );
  }
}

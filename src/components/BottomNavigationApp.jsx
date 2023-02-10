import { Article, CalendarMonth, Home } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const outerTheme = createTheme({
  palette: {
    primary: {
      main: "#2F7F46",
    },
  },
});

export default function BottomNavigationApp(){
    const [bnValue, setBnValue] = useState(0);
    const navigate = useNavigate();
    return (
      <ThemeProvider theme={outerTheme}>
        <BottomNavigation
          showLabels={true}
          sx={{ width: "100%", position: "absolute", bottom: 0 }}
          value={bnValue}
          onChange={(event, setValue) => setBnValue(setValue)}>
          <BottomNavigationAction
            label="Home"
            onClick={() => navigate("/")}
            icon={<Home />}
          />
          <BottomNavigationAction
            label="Jadwal"
            onClick={() => navigate("/rundown")}
            icon={<CalendarMonth />}
          />
          <BottomNavigationAction
            label="Artikel"
            onClick={() => navigate("/article")}
            icon={<Article />}
          />
        </BottomNavigation>
      </ThemeProvider>
    );
}
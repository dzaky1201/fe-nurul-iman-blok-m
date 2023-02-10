import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { Article, CalendarMonth, Home } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material";
import HomePage from "./Home";
import RundownPage from "./RundownPage";
import ArticlePage from "./Article";

const outerTheme = createTheme({
  palette: {
    primary: {
      main: "#2F7F46",
    },
  },
});

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  if (value === 0) {
    return (
      <Box sx={{ pb: 7 }} ref={ref}>
        <CssBaseline />

        <HomePage />

        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}>
          <ThemeProvider theme={outerTheme}>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}>
              <BottomNavigationAction label="Home" icon={<Home />} />
              <BottomNavigationAction label="Jadwal" icon={<CalendarMonth />} />
              <BottomNavigationAction label="Artikel" icon={<Article />} />
            </BottomNavigation>
          </ThemeProvider>
        </Paper>
      </Box>
    );
  }else if(value === 1){
     return (
       <Box sx={{ pb: 7 }} ref={ref}>
         <CssBaseline />

         <RundownPage />

         <Paper
           sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
           elevation={3}>
           <ThemeProvider theme={outerTheme}>
             <BottomNavigation
               showLabels
               value={value}
               onChange={(event, newValue) => {
                 setValue(newValue);
               }}>
               <BottomNavigationAction label="Home" icon={<Home />} />
               <BottomNavigationAction
                 label="Jadwal"
                 icon={<CalendarMonth />}
               />
               <BottomNavigationAction label="Artikel" icon={<Article />} />
             </BottomNavigation>
           </ThemeProvider>
         </Paper>
       </Box>
     );
  }else if(value === 2){
    return (
      <Box sx={{ pb: 7 }} ref={ref}>
        <CssBaseline />

        <ArticlePage />

        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}>
          <ThemeProvider theme={outerTheme}>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}>
              <BottomNavigationAction label="Home" icon={<Home />} />
              <BottomNavigationAction label="Jadwal" icon={<CalendarMonth />} />
              <BottomNavigationAction label="Artikel" icon={<Article />} />
            </BottomNavigation>
          </ThemeProvider>
        </Paper>
      </Box>
    );
  }
}



import { AppBar, createTheme, styled, ThemeProvider, Toolbar, Typography } from "@mui/material";
import React from "react";
import nurulLogo from ".././img/logo-nurul.png"

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  backgroundColor: "#2F7F46",
  justifyContent: "center"
});

const TextCustom = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize:"20px"
  },
}));

const poopinsFont = createTheme({
  typography: {
    fontFamily: ["Poopins", "sans-serif"].join(","),
  },
});

//  const matches = useMediaQuery("(min-width:372px)");

const NavBar = () =>{
    return (
      <ThemeProvider theme={poopinsFont}>
        <AppBar position="sticky">
          <StyledToolbar>
            <img
              src={nurulLogo}
              style={{ padding: 8, height: 58 }}
              alt="nurul-iman"
            />
            <TextCustom fontSize={25} marginLeft={2}>
              Masjid Nurul Iman blok M
            </TextCustom>
          </StyledToolbar>
        </AppBar>
      </ThemeProvider>
    );
}

export default NavBar;
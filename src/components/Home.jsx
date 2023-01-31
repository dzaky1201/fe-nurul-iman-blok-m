import * as React from "react";
import { styled } from "@mui/material/styles";
import imagesExample from ".././img/sedekah-ramadhan.png";
import { Box, CircularProgress, CssBaseline, Divider, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import axios from "axios";

const ResponsiveBox = styled(Box)(({theme})=>({
    [theme.breakpoints.up('md')]:{
        width: 488,
        marginLeft: "auto",
        marginRight: "auto"
    }
}));

const baseURL = "https://nurul-iman-blok-m.herokuapp.com/api/v1/announcements";


export default function HomePage() {
  const [announcement, setAnnouncement] = React.useState('');

   React.useEffect(() => {
     axios.get(baseURL).then((response) => {
       setAnnouncement(response.data);
     });
   }, []);

   if(!announcement){
    return (
      <Box sx={{ display: "flex"}}>
        <CircularProgress sx={{margin: "auto", color: "green"}} />
      </Box>
    );
   }else{
      return (
        <ResponsiveBox>
          <CssBaseline />
          <img
            src={imagesExample}
            style={{ padding: 8, width: "100%", borderRadius: 20 }}
            alt="nurul-iman"
          />

          {announcement.data.map(({ banner, description, title }, index) => (
            <List>
              <ListItem button key={index + title}>
                <img
                  src={banner}
                  style={{marginRight:8,width: "78px", borderRadius: 8 }}
                  alt="nurul-iman"
                />
                <ListItemText primary={title} secondary={description} />
              </ListItem>
              <Divider variant="middle" />
            </List>
          ))}
        </ResponsiveBox>
      );
   }
};


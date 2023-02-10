import { Box } from "@mui/material";
import NavBar from "./components/NavBar";
import FixedBottomNavigation from "./components/FixedBottomNavigation";
import BottomNavigationApp from "./components/BottomNavigationApp";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home";
import RundownPage from "./components/RundownPage";
import ArticlePage from "./components/Article";
import DetailAnnouncementPage from "./components/DetailAnnouncement";

function App() {
  return (
    // <Box>
    //   <NavBar />
    //   <FixedBottomNavigation />
    // </Box>
    <div>
      <NavBar />
      <BottomNavigationApp />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rundown" element={<RundownPage />} />
        <Route path="/article" element={<ArticlePage />} />
        {/* <Route
          path="/announcement/:announcementId"
          element={<DetailAnnouncementPage />}
        /> */}
      </Routes>
      {/* <Route path="/announcement/:announcementId">
        <DetailAnnouncementPage />
      </Route> */}
    </div>
  );
}

export default App;

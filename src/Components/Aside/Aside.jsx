import "./Aside.css"
import { NavLink } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

const Aside = () => {
  return (
    <div className="aside-container">
      <aside>
        <NavLink to="/" className="navlink">
          <HomeIcon /> Home
        </NavLink>
        <NavLink to="/explore" className="navlink">
          <ExploreIcon /> Explore
        </NavLink>
        <NavLink to="/explore" className="navlink">
          <PlaylistAddIcon /> Playlists
        </NavLink>
        <NavLink to="/explore" className="navlink">
          <WatchLaterIcon /> Watch Later
        </NavLink>
      </aside>
    </div>
  );
};
export default Aside;

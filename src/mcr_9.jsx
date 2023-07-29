import { Routes, Route } from "react-router";

import Landing from "./Pages/LandingPage/Landing";
import Explore from "./Pages/ExplorePage/Explore";
import Details from "./Pages/VideoDetails/Details";
import WatchLater from "./Pages/WatchLater/WatchLater";
import Playlist from "./Pages/Playlist/playlist";
import Category from "./Pages/Category/category";


import { DataContext } from "./Context/DataContext";
export { DataContext }
const Mcr_9 = () => {
    return <div className="app-container">
        <h1>MCR_9</h1>

        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/explore" element={<Explore/>}/>
            <Route path="/details/:videoId" element={<Details/>}/>
            <Route path="/watch-later" element={<WatchLater/>}/>
            <Route path="/playlist" element={<Playlist/>}/>
            <Route path="/category/:catName" element={<Category/>}/>
        </Routes>
    </div>
}
export default Mcr_9;
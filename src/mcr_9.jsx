import { Routes, Route } from "react-router";

import Landing from "./Pages/LandingPage/Landing";
import Explore from "./Pages/ExplorePage/Explore";

const Mcr_9 = () => {
    return <div className="app-container">
        <h1>MCR_9</h1>

        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/explore" element={<Explore/>}/>
        </Routes>
    </div>
}
export default Mcr_9;
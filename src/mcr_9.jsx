import { Routes, Route } from "react-router";

import CategoryCard from "./Cards/CategoryCards";

const Mcr_9 = () => {
    return <div className="app-container">
        <h1>MCR_9</h1>

        <Routes>
            <Route path="/" element={<CategoryCard/>}/>
        </Routes>
    </div>
}
export default Mcr_9;
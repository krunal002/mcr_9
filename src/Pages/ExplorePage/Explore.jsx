import "./Explore.css"
import { useContext, useState } from "react";

import { DataContext } from "../../mcr_9";
import Aside from "../../Components/Aside/Aside";
import Videocard from "../../Cards/VideoCards/videoCard";

const Explore = () => {
  const { videoData } = useContext(DataContext);

  const [searchedText, setSearchedText] = useState("");
    const searchedData = videoData.filter(({ title }) =>
        title.toLowerCase().includes(searchedText.toLowerCase())
    );

  return (
    <div className="explore-container">
      <div className="left-container">
        <Aside/>
      </div>
      
      <div>
      <h1>Explore</h1>
      
      <div className="search-container">
        <input type="search" placeholder="Search video by title" onChange={(e) => setSearchedText(e.target.value)} />
      </div>

      <Videocard data={searchedData} />
      </div>
    </div>
  );
};
export default Explore;

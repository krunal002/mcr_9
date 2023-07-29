import { videos } from "../Data/VideosData";
import { createContext, useEffect, useState } from "react";
export const DataContext = createContext();

export const DataContextHandler = ({ children }) => {
  const [videoData, setVideoData] = useState(videos);
  useEffect(() => localStorage.setItem("data", JSON.stringify(videoData)));
  const [playlist, setPlaylist] = useState([
    { name: "Music Video", desc: "my personal favorite", songs: [] },
  ]);

  const addToWL = (videoId) => {
    const updatedVideosData = videoData.map((video) =>
      video._id === videoId ? { ...video, watchLater: true } : video
    );
    setVideoData(updatedVideosData);
  };

  const removeFromWL = (videoId) => {
    console.log("added", videoId);
    const updatedVideosData = videoData.map((video) =>
      video._id === videoId ? { ...video, watchLater: false } : video
    );
    setVideoData(updatedVideosData);
  };

  return (
    <div>
      <DataContext.Provider
        value={{
          videoData,
          playlist,
          setVideoData,
          setPlaylist,
          addToWL,
          removeFromWL,
        }}
      >
        {" "}
        {children}
      </DataContext.Provider>
    </div>
  );
};

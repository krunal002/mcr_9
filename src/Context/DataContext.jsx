import {videos} from "../Data/VideosData"
import { createContext, useState } from "react";
export const DataContext = createContext();

export const DataContextHandler = ({ children }) => {
  const [ videoData, setVideoData ] = useState(videos)
  const [ playlist, setPlaylist ] = useState([{newplaylist:[]}])

  const addToWL = (videoId) => {
    const updatedVideosData = videoData.map((video) =>
      video._id === videoId ? { ...video, watchLater: true } : video
    );
    setVideoData(updatedVideosData);
  };

  const removeFromWL = (videoId) => {
    console.log("added", videoId)
    const updatedVideosData = videoData.map((video) =>
      video._id === videoId ? { ...video, watchLater: false } : video
    );
    setVideoData(updatedVideosData);
  };

  return (
    <div>
      <DataContext.Provider
        value={{ videoData, setVideoData, addToWL, removeFromWL }}
      > {children}</DataContext.Provider>
    </div>
  );
};

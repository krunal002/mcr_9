import {videos} from "../Data/VideosData"
import { createContext, useState } from "react";
export const DataContext = createContext();

export const DataContextHandler = ({ children }) => {
  const [ videoData, setVideoData ] = useState(videos)
  return (
    <div>
      <DataContext.Provider
        value={{videoData, setVideoData}}
      > {children}</DataContext.Provider>
    </div>
  );
};

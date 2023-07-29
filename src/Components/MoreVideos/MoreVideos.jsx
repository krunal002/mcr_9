import "./MoreVideos.css"
import { useContext } from "react";
import { DataContext } from "../../mcr_9";

const MoreVideos = () => {
  const { videoData } = useContext(DataContext);
  return (
    <div className="more-video">
      {videoData.map((video) => (
        <div className="more-video-container">
          <div ><img src={video.thumbnail} alt="thumbnail" className="more-video-pri-container"/></div>
          <div className="more-video-sec-container">
            <span><b>{video.title}</b></span>
            <span>{video.creator}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MoreVideos;

import { useNavigate } from "react-router";
import "./VideoCard.css";

const Videocard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="video-cards-container">
      <h1>Videos</h1>
      <div className="video-container">
        {data.map((video) => {
          return (
            <div
              className="video-card-container"
              onClick={() => navigate(video.src)}
            >
              <img src={video.thumbnail} alt="thumbnail" className="video-thumbnail"/>
              <div className="video-card-info">
                <img src="https://tse3.mm.bing.net/th?id=OIP.Fe8Ph21Hbdb5TIYZmjCK2QHaFj&pid=Api&P=0&h=180" alt="tempImage" className="video-provider-Image"/>
              <div className="video-card-details">
                <span>{video.title}</span>
                <span>{video.category}</span>
                <span className="views">
                  {video.views} views | {video.creator}
                </span>
              </div>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Videocard;

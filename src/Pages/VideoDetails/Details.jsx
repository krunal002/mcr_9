import "./Details.css"
import { useContext } from "react";
import { useParams } from "react-router";

import { DataContext } from "../../mcr_9";
import Aside from "../../Components/Aside/Aside";
import MoreVideos from "../../Components/MoreVideos/MoreVideos";

const Details = () => {
  const { videoId } = useParams();
  const { videoData } = useContext(DataContext);

  const VideoDetails = videoData.find(({ _id }) => _id === Number(videoId));
  return (
    <div className="details-container">
      <div className="left-container">
        <Aside />
      </div>

      <div>
        <iframe
          title={VideoDetails._id}
          width="560"
          height="315"
          src={VideoDetails.src}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div>
        <MoreVideos />
      </div>
    </div>
  );
};
export default Details;

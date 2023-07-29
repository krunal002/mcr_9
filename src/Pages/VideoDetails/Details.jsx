import "./Details.css";
import { useContext } from "react";
import { useParams } from "react-router";

import WatchLaterIcon from "@mui/icons-material/WatchLater";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import DeleteIcon from "@mui/icons-material/Delete";

import { DataContext } from "../../mcr_9";
import Aside from "../../Components/Aside/Aside";
import MoreVideos from "../../Components/MoreVideos/MoreVideos";
import EditNoteModal from "../../Components/EditNoteModel";
import AddNewNoteModal from "../../Components/AddNewNoteModal";

const Details = () => {
  const { videoId } = useParams();
  const { videoData, setVideoData, addToWL, removeFromWL } =
    useContext(DataContext);

  const VideoDetails = videoData.find(({ _id }) => _id === Number(videoId));
  const isWL = VideoDetails.watchLater;

  const handleDelete = (note) => {
    const updatedVideosData = videoData.map((video) =>
      video._id === VideoDetails._id
        ? {
            ...video,
            notes: video.notes.filter(
              (currentNote) => currentNote.id !== note.id
            ),
          }
        : video
    );
    setVideoData(updatedVideosData);
  };

  return (
    <div className="details-container">
      <div className="left-container">
        <Aside />
      </div>

      <div>
        <div className="video-details-container">
          <iframe
            title={VideoDetails._id}
            width="560"
            height="315"
            src={VideoDetails.src}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <div className="details-info">
            <div className="video-card-info">
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.Fe8Ph21Hbdb5TIYZmjCK2QHaFj&pid=Api&P=0&h=180"
                alt="tempImage"
                className="video-provider-Image"
              />
              <div className="video-card-details">
                <span>{VideoDetails.title}</span>
              </div>
            </div>
            <div className="detail-buttons">
              <div
                onClick={() =>
                  isWL
                    ? removeFromWL(VideoDetails._id)
                    : addToWL(VideoDetails._id)
                }
              >
                {isWL ? (
                  <WatchLaterIcon sx={{ cursor: "pointer" }} />
                ) : (
                  <WatchLaterOutlinedIcon sx={{ cursor: "pointer" }} />
                )}
              </div>
              <div>
                <PlaylistAddIcon sx={{ cursor: "pointer" }} />
              </div>
              <div title="Add Note">
                                    <AddNewNoteModal
                                        currentvideo={VideoDetails}
                                    />
                                </div>



            </div>
          </div>
        </div>

        {/* <h2>My Notes</h2> */}
        <div>
          <h2 className="notes">My Notes:</h2>
          
          

          {VideoDetails.notes.map((note) => (
            <div key={note.id} className="note_container">
              <div>{note.content}</div>
              <div className="note_container_btns">
                <EditNoteModal
                  sx={{ cursor: "pointer" }}
                  currentvideo={VideoDetails}
                  note={note}
                />
                <DeleteIcon
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleDelete(note)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <MoreVideos />
      </div>
    </div>
  );
};
export default Details;

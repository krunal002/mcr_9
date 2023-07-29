import "./playlist.css";
import { useContext, useState } from "react";
import { DataContext } from "../../mcr_9";
import Aside from "../../Components/Aside/Aside";

const Playlist = () => {
  const { playlist, setPlaylist } = useContext(DataContext);

  const [pData, setPData] = useState({ name: "", desc: "", songs: [] });

  const playlistHandler = () => {
    setPlaylist([...playlist, pData]);
  };

  return (
    <div className="playlist-Container">
      <div className="left-container">
        <Aside />
      </div>

      <div>
        {playlist.map((list) => (
          <div>
            <h1>{list.name}</h1>
            <p>{list.desc}</p>
          </div>
        ))}
        <button>add</button>

        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={(e) => setPData({ ...pData, name: e.target.value })}
          />
          <label htmlFor="desc">description</label>
          <input
            type="text"
            onChange={(e) => setPData({ ...pData, desc: e.target.value })}
          />
          <button onClick={() => playlistHandler()}>Create</button>
        </div>
      </div>
    </div>
  );
};
export default Playlist;

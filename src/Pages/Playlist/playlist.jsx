import { useContext, useState } from "react"
import { DataContext } from "../../mcr_9"

const Playlist = () => {
    const { playlist, setPlaylist } = useContext(DataContext)

    const [pData, setPData ] = useState({name:"", desc:"", songs:[]})

    const playlistHandler = () => {
        setPlaylist(...playlist, pData)
    }

    return <div className="playlist-Container">
        {playlist.map((list) => (
            <h1>{list.name}</h1>
        ))}
        <button onClick={playlistHandler}>add</button>

            <div>
                <label htmlFor="name">Name</label>
                <input type="text" onChange={setPData({...pData, })}/>
                <label htmlFor="desc">description</label>
                <input type="text" onChange={pData.desc}/>
                <button onClick={playlistHandler}>Create</button>
            </div>

    </div>
}
export default Playlist
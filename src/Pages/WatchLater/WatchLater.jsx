import { useContext } from "react"
import { DataContext } from "../../mcr_9"
import Videocard from "../../Cards/VideoCards/videoCard"
import Aside from "../../Components/Aside/Aside"
import "./WatchLater.css"

const WatchLater = () => {
    const { videoData } = useContext(DataContext)
    const WLData = videoData.filter(({watchLater}) => watchLater)
    return <div className="watch-later-container">
        <div className="left-container">
        <Aside />
      </div>
        <Videocard data={WLData}/>
    </div>
}
export default WatchLater
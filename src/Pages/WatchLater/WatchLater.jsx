import { useContext } from "react"
import { DataContext } from "../../mcr_9"
import Videocard from "../../Cards/VideoCards/videoCard"

const WatchLater = () => {
    const { videoData } = useContext(DataContext)
    const WLData = videoData.filter(({watchLater}) => watchLater)
    return <div className="watch-later-container">
        <Videocard data={WLData}/>
    </div>
}
export default WatchLater
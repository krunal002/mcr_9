import { useContext } from "react"
import { DataContext } from "../../mcr_9"
import Videocard from "../../Cards/VideoCards/videoCard"

const Explore = () =>{
    const { videoData } = useContext(DataContext)
    return <div className="explore-container">
        <h1>Explore</h1>
<Videocard data={videoData}/>
    </div>
}
export default Explore
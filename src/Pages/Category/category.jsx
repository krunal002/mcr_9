import { useContext } from "react"
import Videocard from "../../Cards/VideoCards/videoCard"
import { DataContext } from "../../mcr_9"
const Category = () =>{
    const {videoData} = useContext(DataContext)
    const catData = videoData.filter(({category}) => category)
    return <div>
        <Videocard data ={catData}/>
    </div>
}
import "./category.css"
import { useContext } from "react"
import Videocard from "../../Cards/VideoCards/videoCard"
import { DataContext } from "../../mcr_9"
import { useParams } from "react-router"
import Aside from "../../Components/Aside/Aside"

const Category = () =>{
    const {videoData} = useContext(DataContext)
    const { catName } = useParams()
    const catData = videoData.filter(({category}) => category === catName)
    return <div className="cat-cont"> 
        <div className="left-container">
        <Aside />
      </div>
        <Videocard data ={catData}/>
    </div>
}
export default Category;
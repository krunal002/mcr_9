import "./Landing.css"
import { categories } from "../../Data/CategoryData";
import CategoryCard from "../../Cards/CategoryCards/CategoryCards";
import Aside from "../../Components/Aside/Aside";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="left-container">
        <Aside />
      </div>
      <div>
        <CategoryCard data={categories} />
      </div>
    </div>
  );
};
export default Landing;

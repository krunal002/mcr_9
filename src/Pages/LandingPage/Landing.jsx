import { categories } from "../../Data/CategoryData";
import CategoryCard from "../../Cards/CategoryCards/CategoryCards";
const Landing = () => {
  console.log(categories, "categories");
  return (
    <div className="landing-container">
      <CategoryCard data={categories} />
    </div>
  );
};
export default Landing;

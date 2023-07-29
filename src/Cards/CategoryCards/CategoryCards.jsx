import "./CategoryCard.css";
import {useNavigate} from "react-router-dom"

const CategoryCard = ({ data }) => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Categoties</h1>
      
      <div className="primary-category-container">
        {data.map((cat) => {
          return (
            <div className="cat-card-container" onClick={() => navigate(`/category/${cat.category}`)}>
              <img src={cat.thumbnail} alt="thumbnail" />
              <span>{cat.category}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CategoryCard;

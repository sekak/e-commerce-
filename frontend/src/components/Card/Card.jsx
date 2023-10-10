import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ item ,type}) => {
   return (
    <Link to={`/product/${item._id}`} className="link">
      <div className="card">
        <div className="image">
          {item.isNew && <span>new product</span>}
          <img
            className="img"
            src={
             item?.img1
            }
            alt=""
          />
          <img
            className="img2"
            src={
               item?.img2
            }
            alt=""
          />
        </div>
        <span className="type">{item.title}</span>
        <div className="prices">
          <span>${item.newPrice || item.newPrice + 20}</span>
          <span>${item.newPrice}</span>
        </div>
      </div>
     </Link>
  );
};

export default Card;

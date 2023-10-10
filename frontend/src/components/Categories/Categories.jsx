import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categorier">
      <div className="col">
        <div className="row">
          <img src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          <button>
            <Link className="link" to="/products/sales">
              Sales
            </Link>
            <Link to="/login">frfr</Link>
          </button>
        </div>
        <div className="row">
          <img src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          <button>
            <Link className="link" to="/products/women">
              women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          <button>
            <Link className="link" to="/products/new-season">
              new season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row ">
          <div className="col">
            <div className="row">
              <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
              <button>
                <Link className="link" to="/products/men">
                  men
                </Link>
              </button>
            </div>
          </div>
          <div className="col ">
            <div className="row">
              <img src="https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
              <button>
                <Link className="link" to="/products/shoes">
                  shoes
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" />
          <button>
            <Link className="link" to="/products/sales">
              Sales
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;

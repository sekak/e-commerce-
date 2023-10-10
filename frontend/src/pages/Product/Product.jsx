import "./Product.scss";
import List from "../../List/List";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const params = useParams().text;

  const [sort, setSort] = useState("asc");
  const [max, setMax] = useState(50);
  const [filter, setFilter] = useState([]);
  const location = useLocation();
  const loca = location.pathname.split("/")[2];
  const [error, setError] = useState(false);
  const [loding, setLoding] = useState(false);
  const [data, setData] = useState([]);
  let b;
  useEffect(() => {
    setLoding(true)
    const getData = async () => {
      try{
        const data = await axios.get("http://localhost:4000/products");
        setData(data.data.filter((item) => item.categories.includes(loca)));
        
      }catch(err){
        setError(true)
      }
    };
    getData();
     setLoding(false)
  }, []);
 
  const handleChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setFilter(checked ? [...filter, value] : filter.filter(it => it !== value));
  };
  console.log(filter)
   return (
    <div className="product">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {error ? "something is wrong" : loding ? "loading..." :  data.map((item) => {
            return (
              <div className="inputItem" key={item.id}>
                <input
                  type="checkbox"
                  id={item.title}
                  value={item.title}
                  onChange={handleChange}
                />
                <label htmlFor={item.title}>{item.title}</label>
              </div>
            );
          })}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <input
            type="range"
            min={50}
            max={900}
            value={max}
            onChange={(e) => setMax(e.target.value)}
           />
            <span>{max}</span>
          </div>
        </div>
        <div className="inputItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lower first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Higher first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src="https://images.unsplash.com/photo-1496346236646-50e985b31ea4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          alt="image"
        />
         <List data={data} filter={filter} max={max} sort={sort} /> 
      </div>
    </div>
  );
};

export default Product;

// <List data={data} params={params} sort={sort} max={max} filter={filter} />

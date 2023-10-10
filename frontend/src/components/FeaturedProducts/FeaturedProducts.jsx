import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetched from "../../hook/useFetched";
import { useEffect, useState } from "react";
import axios from "axios";

const FeaturedProducts = ({ type }) => {
  
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loding, setLoding] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try{
        setLoding(true)
        const data = await axios.get("http://localhost:4000/products");
        setData(data.data.filter(item =>item.types !== type));
      }catch(err)
      {
        setError(true)
      }
    };
    getData()
    setLoding(false)
  }, []);
   console.log(data);
  return (
    <div className="feature">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
      {error ? "something is wrong" : loding ? "loading...." :
        data.map((item)=>{
          return(
            <Card item={item} key={item._id}/>
          )
        })
      }
      </div>
    </div>
  );
};

// error? "somthing went is wrong!" : loading ? "loading...":

export default FeaturedProducts;

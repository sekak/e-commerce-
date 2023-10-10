import React, { useEffect, useState } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import "./Products.scss";
import useFetched from "../../hook/useFetched";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loding, setLoding] = useState(false);

  const id = useParams().id;
  useEffect(() => {
    const getData = async () => {
      try {
        setLoding(true);
        const datos = await axios.get("http://localhost:4000/products");

        setData(datos.data.find((it) => it._id == id));
      } catch (err) {
        setError(true);
      }
    };
    setLoding(false);
    getData();
  }, []);

  // const data = data.find((it) => it._id == id);
  console.log(data.img1);
  const [index, setIndex] = useState("");
  const [quantity, setQuantity] = useState(1);
  // console.log(index)
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        {!loding ? (
          "loading..."
        ) : (
          <div className="products">
            <div className="left">
              <div className="images">
                <img
                  src={data.img1}
                  alt="D"
                  onClick={() => setIndex(data.img1)}
                />
                {data?.img2 && (
                  <img
                    src={data.img2}
                    alt="D"
                    onClick={() => setIndex(data.img2)}
                  />
                )}
              </div>
              <img className="mainImg" src={index || data.img1} alt="index" />
            </div>
            <div className="right">
              <h1>{data.title} </h1>
              <span className="price">${data.newPrice}</span>
              <p className="desc">{data.desc}</p>
              <div className="buttons">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev < 2 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                {quantity}
                <button onClick={() => setQuantity((prev) => prev + 1)}>
                  +
                </button>
              </div>
              <button
                className="cart"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: data._id,
                      title: data.title,
                      desc: data.desc,
                      price: data.newPrice,
                      img: data.img1,
                      quantity,
                    })
                  )
                }
              >
                <AddShoppingCartOutlinedIcon /> ADD TO CART
              </button>
              <div className="links">
                <div className="item">
                  <FavoriteBorderOutlinedIcon /> ADD TO WISH LIST
                </div>
                <div className="item">
                  <BalanceOutlinedIcon /> ADD TO COMPARE
                </div>
              </div>
              <div className="info">
                <span>Vendor: Polo</span>
                <span>Product Type: T-shirt</span>
                <span>Tag: T-shrit, Women, Top</span>
              </div>
              <hr />
              <div className="details">
                <span>DESCRIPTION</span>
                <span>ADDITIONAL INFORMATION</span>
                <span>FAQ</span>
              </div>
            </div>
          </div>
        )}
      </div>
      );
    </div>
  );
};

export default Products;

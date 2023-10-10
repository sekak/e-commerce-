import {
  ConfirmationNumberOutlined,
  KeyboardDoubleArrowUpRounded,
  RemoveCircleOutline,
} from "@mui/icons-material";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, restCart } from "../../redux/cartReducer";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const total = () => {
    let total = 0;
    products.forEach((item) => (total += item.price * item.quantity));
    return total.toFixed(2);
  };
  console.log("cart", products);
  return (
    <div className="cartI">
      <h1>Product shopping</h1>
      {products.length === 0 ? "cart empty...": products?.map((item) => {
        return (
          <div className="item">
            <div className="config">
              <img src={item.img} />
              <div className="text">
                <h2>{item.title}</h2>
                <h3>{item.desc}</h3>
                <p>
                  Quantity: <span>{item.quantity}</span>
                </p>
              </div>
            </div>
            <RemoveCircleOutline
              className="icon"
              onClick={() => dispatch(removeFromCart({ id: item.id }))}
            />
          </div>
        );
      })}
      <div className="price">
        <div>SUBTOTAL</div>
        <div>${total()}</div>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span onClick={() => dispatch(restCart())}>Reset Cart</span>
    </div>
  );
};

export default Cart;

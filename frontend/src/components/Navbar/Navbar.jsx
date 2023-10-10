import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import './Navbar.scss'
import { useState } from "react";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const products = useSelector(state=>state.cart.products)
    
 
    return (
        <div className="navbar">
            <div className="wrap">
                <div className="left">
                    <div className="item">
                        <img src="" alt="" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/women">Women</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/men">Men</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/children">Children</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className="link" to="/">LAMASHOPPING</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className="link" to="/">Homepage</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">About</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Contact</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchRoundedIcon />
                        <PersonOutlinedIcon />
                        <FavoriteBorderOutlinedIcon />
                        <div className="icon" onClick={()=>setOpen(!open)}>
                            <LocalGroceryStoreOutlinedIcon />
                           {/* <span>{products?.length  }</span>*/}
                        </div>
                    </div>
                </div>
            </div>
             {open && <Cart/>}
         </div>
    );
};

export default Navbar;

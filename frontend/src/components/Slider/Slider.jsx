import "./Slider.scss";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import { useState } from "react";
const Slider = () => {
  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  var [slide, setSlide] = useState(0);
  const handleclick = (name) => {
    if (name === "right") {
      setSlide((slide + 1) % 3);
    } else {
      if (slide == 0) {
        slide = 3;
      }
      setSlide((slide - 1) % 3);
      console.log(slide);
    }
  };
  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translate(${-100 * slide}vw)` }}
      >
        <img src={data[0]} alt="img1" />
        <img src={data[1]} alt="img2" />
        <img src={data[2]} alt="img3" />
      </div>
      <div className="arrows">
        <KeyboardDoubleArrowLeftOutlinedIcon
          className="arrow-left"
          onClick={() => handleclick("left")}
        />
        <KeyboardDoubleArrowRightOutlinedIcon
          className="arrow-left"
          style={{ cursor: "pointer" }}
          onClick={() => handleclick("right")}
        />
      </div>
    </div>
  );
};

export default Slider;

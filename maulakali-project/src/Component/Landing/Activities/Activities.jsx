import React from "react";
import "./styles.css";
import insideimg from "../../../assets/insideimg.png";
import Slider, { Settings } from "react-slick";
const Activities = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} draggable={true}>
      <div className="slider_component_div">
        <div className="card-div">
          <div className="image-div">
            <img src={insideimg} alt="aa" />
          </div>
          <div className="text-div">
            <h1>20% OFF</h1>
            <h3>Lorem Ipsum</h3>
            <button>Book Now</button>
          </div>
        </div>
      </div>
      <div className="slider_component_div">
        <div className="card-div">
          <div className="image-div">
            <img src={insideimg} alt="aa" />
          </div>
          <div className="text-div">
            <h1>20% OFF</h1>
            <h3>Lorem Ipsum</h3>
            <button>Book Now</button>
          </div>
        </div>
      </div>
      <div className="slider_component_div">
        <div className="card-div">
          <div className="image-div">
            <img src={insideimg} alt="aa" />
          </div>
          <div className="text-div">
            <h1>20% OFF</h1>
            <h3>Lorem Ipsum</h3>
            <button>Book Now</button>
          </div>
        </div>
      </div>
      <div className="slider_component_div">
        <div className="card-div">
          <div className="image-div">
            <img src={insideimg} alt="aa" />
          </div>
          <div className="text-div">
            <h1>20% OFF</h1>
            <h3>Lorem Ipsum</h3>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Activities;

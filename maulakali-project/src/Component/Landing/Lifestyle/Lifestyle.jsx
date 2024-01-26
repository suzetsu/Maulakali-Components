import React, { useRef } from "react";
import "./Lifestyle.scss";
import LifestyleSlider from "./LifestyleSlider";
import prevarr from "../../../assets/prev1.png";
import nextarr from "../../../assets/next.png";
const Lifestyle = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };
  return (
    <div className="lifestyle-container">
      <div className="lifestyle-container-div">
        <div className="lifestyle-container-div-left">
          <div className="lifestyle-texts">
            <div className="lifestyle-heading">
              <h1>LIFESTYLE</h1>
              <p>Embrace the Thrill of Every Journey.</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do
              eiusmod mpor incididunt ut , consectetur adipiscing elit, sed do
              eiusmod mpor labore et dolore magna aliqua.
            </p>
            <div className="slider-arrows">
              <div className="slidearr" onClick={handlePrev}>
                <img src={prevarr} alt="a" />
              </div>
              <div className="slidearr" onClick={handleNext}>
                <img src={nextarr} alt="a" />
              </div>
            </div>
            <button className="button-global">Discover More</button>
          </div>
        </div>
        <div className="lifestyle-container-div-right">
          <LifestyleSlider
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          />
        </div>
      </div>
    </div>
  );
};

export default Lifestyle;

import React, { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
  Autoplay,
} from "swiper/modules";
import { LifestyleData } from "../../../CustomData/Slider";
import "./lifestyleslider.scss";

const LifestyleSlider = ({ onSwiper }) => {
  return (
    <div className="lifestyleslider-container">
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={210}
        onSwiper={onSwiper}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true, // added
          disableOnInteraction: false,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 210,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 210,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 210,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {LifestyleData &&
          LifestyleData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="lifestyle-image-container">
                <img src={item.image} alt="" />
                <div className="packages-name">
                  <h1>Birthday</h1>
                  <button>Read More</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default LifestyleSlider;

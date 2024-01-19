import React, { Component, useRef } from "react";
// import "./slider.css";
import insideimg from "../../../assets/insideimg.png";
import sliderbg from "../../../assets/sliderbg.png";
import Slider from "react-slick";
import "../Activities/styles.css";
import SampleNextArrow from "./CustomArrow/SampleNextArrow";
import SamplePrevArrow from "./CustomArrow/SamplePrevArrow";
import left from "../../../assets/left-arrow.png";
import right from "../../../assets/right-arrow.png";

const SliderComponent = () => {
  const slider = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <img
        src={left}
        onClick={() => slider?.current?.slickPrev()}
        style={{
          position: "absolute",
          top: "8.5rem",
          left: "-3rem",
          cursor: "pointer",
        }}
      />
      <Slider {...settings} ref={slider} draggable={true} autoplay>
        <div className="slider_component_div">
          <div className="card-div">
            <div className="sliderimage-div">
              <img src={insideimg} alt="aa" className="hotdealimg" />
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
            <div className="sliderimage-div">
              <img src={insideimg} alt="aa" className="hotdealimg" />
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
            <div className="sliderimage-div">
              <img src={insideimg} alt="aa" className="hotdealimg" />
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
            <div className="sliderimage-div">
              <img src={insideimg} alt="aa" className="hotdealimg" />
            </div>
            <div className="text-div">
              <h1>20% OFF</h1>
              <h3>Lorem Ipsum</h3>
              <button className="book-btn">Book Now</button>
            </div>
          </div>
        </div>
      </Slider>
      <img
        src={right}
        onClick={() => slider?.current?.slickNext()}
        style={{
          position: "relative",
          top: "-10.5rem",
          // left: "-3rem",
          left: "69.5rem",
          cursor: "pointer",
        }}
      />
    </>
  );
};

export default SliderComponent;

// import React from "react";
// import "./slider.css";
// // import "./styles.css";
// import left from "../../../assets/left-arrow.png";
// import right from "../../../assets/right-arrow.png";
// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import "swiper/swiper-bundle.css";
// import {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
//   FreeMode,
//   Autoplay,
// } from "swiper/modules";
// // import { Images } from "../CustomData/Images";

// import insideimg from "../../../assets/insideimg.png";

// const SliderComponent = () => {
//   const swiper = useSwiper();
//   const swiperRef = React.useRef(null);
//   const handlePrev = () => {
//     swiperRef.current.slidePrev();
//   };

//   const handleNext = () => {
//     swiperRef.current.slideNext();
//   };
//   return (
//     <div className="slider_container">
//       {/* <img
//         src={left}
//         onClick={() => slider?.current?.slickPrev()}
//         style={{
//           position: "relative",
//           top: "10.5rem",
//           left: "-3rem",
//           cursor: "pointer",
//         }}
//       /> */}
//       <Swiper
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//         slidesPerView={2}
//         spaceBetween={40}
//         pagination={{ clickable: true }}
//         // autoplay={{ delay: 2000 }}
//         // navigation={{ clickable: true }}
//         modules={[Pagination, Navigation, Autoplay]}
//         className="mySwiper"
//       >
//         {/* {Images &&
//           Images.map((image) => (
//             <SwiperSlide className="swiper-slide" key={image.image}>
//               {<img src={image.image} />}
//             </SwiperSlide>
//           ))} */}
//         <SwiperSlide className="swiper-slide">
//           <div className="card-div">
//             <div className="image-div">
//               <img src={insideimg} alt="aa" />
//             </div>
//             <div className="text-div">
//               <h1>20% OFF</h1>
//               <h3>Lorem Ipsum</h3>
//               <button>Book Now</button>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="swiper-slide">
//           <div className="slider_component_div">
//             <div className="card-div">
//               <div className="image-div">
//                 <img src={insideimg} alt="aa" />
//               </div>
//               <div className="text-div">
//                 <h1>20% OFF</h1>
//                 <h3>Lorem Ipsum</h3>
//                 <button>Book Now</button>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="swiper-slide">
//           <div className="slider_component_div">
//             <div className="card-div">
//               <div className="image-div">
//                 <img src={insideimg} alt="aa" />
//               </div>
//               <div className="text-div">
//                 <h1>20% OFF</h1>
//                 <h3>Lorem Ipsum</h3>
//                 <button>Book Now</button>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="swiper-slide">
//           <div className="slider_component_div">
//             <div className="card-div">
//               <div className="image-div">
//                 <img src={insideimg} alt="aa" />
//               </div>
//               <div className="text-div">
//                 <h1>20% OFF</h1>
//                 <h3>Lorem Ipsum Dealsss</h3>
//                 <button>Book Now</button>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="swiper-slide">
//           <div className="slider_component_div">
//             <div className="card-div">
//               <div className="image-div">
//                 <img src={insideimg} alt="aa" />
//               </div>
//               <div className="text-div">
//                 <h1>20% OFF</h1>
//                 <h3>Lorem Ipsum</h3>
//                 <button>Book Now</button>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="swiper-slide">
//           <div className="slider_component_div">
//             <div className="card-div">
//               <div className="image-div">
//                 <img src={insideimg} alt="aa" />
//               </div>
//               <div className="text-div">
//                 <h1>20% OFF</h1>
//                 <h3>Lorem Ipsum</h3>
//                 <button>Book Now</button>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//       <img src={right} alt=" " className="custom-next" onClick={handleNext} />

//       <img src={left} alt=" " className="custom-prev" onClick={handlePrev} />

//       {/* <img
//         src={right}
//         onClick={() => slider?.current?.slickNext()}
//         style={{
//           position: "relative",
//           top: "-10.5rem",
//           // left: "-3rem",
//           left: "69.5rem",
//           cursor: "pointer",
//         }}
//       /> */}
//     </div>
//   );
// };

// export default SliderComponent;

import React, { useState, useEffect } from "react";
import "./activityslider.css"; // Import your component-specific styles if needed
import { SliderData } from "../../../CustomData/Slider";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const ActivitiesSlider = () => {
  //   const [activeCard, setActiveCard] = useState(null);
  const middleCardIndex = Math.floor(SliderData.length / 2);
  const [activeCard, setActiveCard] = useState(middleCardIndex);
  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  return (
    <div className="activity_container">
      <div className="activities_headings">
        <h1>Activities</h1>
        <p>EXPLORE MAULAKALI CABLECAR ATTRACTIONS</p>
      </div>
      <div className="container">
        {SliderData.map((card, index) => (
          <div
            key={index}
            className={`card ${index === activeCard ? "active" : ""}`}
            //   onClick={() => handleCardClick(index)}
            onMouseEnter={() => handleCardClick(index)}
            onMouseLeave={() => handleCardClick(null)}
          >
            <img className="background" src={card.image} alt="" />

            <div className="card-content">
              <h3 className="title">{card.title}</h3>
              <div className="profile-image">
                {/* You can add an image tag here if needed */}
                <button>Read More</button>
              </div>
            </div>

            <div className="backdrop"></div>
          </div>
        ))}
      </div>

      <div className="slider_container">
        <Carousel
          autoPlay
          loop
          height={200}
          controlsOffset="lg"
          controlSize={40}
          withIndicators
          nextControlIcon={
            <FaAngleDoubleRight
              style={{
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: "8.5rem",
                right: "0.3rem",
                color: "white",
              }}
            />
          }
          previousControlIcon={
            <FaAngleDoubleLeft
              style={{
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: "8.5rem",
                left: "0.3rem",
                color: "white",
              }}
            />
          }
        >
          {SliderData.map((card, index) => (
            <Carousel.Slide key={index}>
              <div className="slider_content">
                <img src={card.image} alt={`Slide ${index + 1}`} />
                <div className="slider_content_text">
                  <p>{card.title}</p>
                  <button>Read More</button>
                </div>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>

      <div className="dot-indicators">
        {SliderData.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeCard ? "active-dot" : ""}`}
          ></div>
        ))}
      </div>
      <div className="activities_bottom">
        <p>
          Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod
          mpor incididunt ut , consectetur adipiscing elit, sed do eiusmod mpor
          labore et dolore magna aliqua.
        </p>
        <button>Discover More</button>
      </div>
    </div>
  );
};

export default ActivitiesSlider;

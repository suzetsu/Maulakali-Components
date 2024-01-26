import React from "react";
import "./booknow.css";
import cablecar1 from "../../../assets/cablecar1.png";
import cablecar2 from "../../../assets/cablecar2.png";
import cablecar3 from "../../../assets/cablecar3.png";
import cablecar4 from "../../../assets/cablecar4.png";
import cablecar5 from "../../../assets/cablecar5.png";
import outrect from "../../../assets/outerrect.png";
import image1 from "../../../assets/image1.jpg";
import image2 from "../../../assets/image2.jpg";
import image3 from "../../../assets/image3.jpg";
import image4 from "../../../assets/image5.jpg";
import image5 from "../../../assets/image6.jpg";
import line1 from "../../../assets/line1.png";
import line2 from "../../../assets/line1.png";

const Booknow = () => {
  return (
    <div className="book_container">
      <div className="left_content">
        <div>
          <img src={line2} className="line2" />
          <img src={outrect} alt=".." className="rectimg" />
          <img src={line1} className="line1" />
        </div>

        <div className="booknow_texts">
          <div className="booknow_text">
            <h2>
              BOOK NOW <span>&</span>
            </h2>
            <h1>GET 20 % OFF</h1>
            <h3>MAULAKLAI CABLECAR</h3>
          </div>
        </div>
        <div className="descriptions">
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod mpor incididunt ut labore et.
            </p>
            <button>Book Now</button>
          </div>
        </div>
      </div>
      <div className="right_content">
        <div className="image-content">
          <div className="image-div firstimage-div">
            <img src={image1} alt="aa" />
          </div>
          <div className="image-div secondimage-div">
            <img src={image2} alt="aa" />
          </div>
          <div className="image-div thirdimage-div">
            <img src={image3} alt="aa" />
          </div>
          <div className="image-div fourthimage-div">
            <img src={image4} alt="aa" />
          </div>
          <div className="image-div fifthimage-div">
            <img src={image5} alt="aa" />
          </div>
          {/* <img src={image2} alt="aa" className="secondimg" />
          <img src={image3} alt="aa" className="thirdimg" />
          <img src={image4} alt="aa" className="fourthimg" />
          <img src={image5} alt="aa" className="fifthimg" /> */}
        </div>
      </div>
    </div>
  );
};

export default Booknow;

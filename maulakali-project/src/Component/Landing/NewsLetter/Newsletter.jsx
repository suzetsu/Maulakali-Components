import React from "react";
import "./newsletter.scss";
import newsimg from "../../../assets/newsimg1.jpg";
import n1 from "../../../assets/n1.jpg";
const Newsletter = () => {
  return (
    <div className="newsletter-container ">
      <div className="overlay"></div>
      <div className="news-image">
        <img src={n1} alt={newsimg} />
      </div>
      <div className="newsletter-container-div">
        <div className="newsletter-container-div-left container-inline">
          <div className="newsletter-image">
            <img src={newsimg} alt="aa" />
          </div>
        </div>
        <div className="newsletter-container-div-right">
          <div className="newsLetter">
            <div className="texts_container">
              <h1>NEWSLETTER</h1>
              <p>Join the Journey: Subscribe for Adventure News</p>
            </div>
            <div className="news-input-field">
              <input type="text" placeholder="Enter your email address" />
            </div>
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

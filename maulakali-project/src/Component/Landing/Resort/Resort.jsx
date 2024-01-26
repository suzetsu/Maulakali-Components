import React from "react";
import "./resort.scss";
import resortimg from "../../../assets/resort.jpg";

const Resort = () => {
  return (
    <div className="resort-container">
      <div className="resort-container-div">
        <div className="resort-leftdiv">
          <div className="resort-leftdiv-image">
            <img src={resortimg} alt="" />
            <div className="indeximg">
              <div>
                <h1>+76</h1>
                <p>Big Suites</p>
              </div>
            </div>
          </div>
        </div>
        <div className="resort-rightdiv">
          <div className="resort-rightdiv-description">
            <div className="relax">
              <p>
                <span>Relax</span> In Our
              </p>
            </div>
            <div className="hotel">
              <p>
                Hotel <span>Resort</span>
              </p>
            </div>
            <p className="global-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <button className="button-global">Discover More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resort;

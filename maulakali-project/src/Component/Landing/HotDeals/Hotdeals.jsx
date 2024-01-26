import React from "react";
import "./hotdeals.css";
import SliderComponent from "./SliderComponent";
import { useNavigate } from "react-router-dom";

const Hotdeals = () => {
  const history = useNavigate();
  return (
    <>
      <div className="hotdeals_container">
        <div className="hotdeals_inner">
          <div className="left_wrapper">
            <div className="deals_texts">
              <h1>HOT DEALS</h1>
              <h3>Ignite Your Savings: Hot Deals Await!</h3>
            </div>
            <div className="button_container">
              <button
                onClick={() => {
                  {
                    history("hotdeals");
                  }
                }}
              >
                Discover More
              </button>
            </div>
          </div>
          <div className="right_wrapper">{/* <img src={temple} /> */}</div>
        </div>
        <div className="hotdeals_outer">
          <SliderComponent />
        </div>
      </div>
    </>
  );
};

export default Hotdeals;

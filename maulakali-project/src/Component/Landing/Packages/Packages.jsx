import React from "react";
import "./packages.css";
import image1 from "../../../assets/image1.jpg";
import { PackageData } from "./PackageData";

const Packages = () => {
  return (
    <div className="packages_container">
      <div className="left_package_container">
        <div className="left_inside_content">
          {PackageData &&
            PackageData.map((item, index) => (
              <div className="package_card_container">
                <div className="package_image">
                  <img src={item.image} alt="image" />
                </div>
                <div className="package_name">
                  <h3>{item.title}</h3>
                  <div>
                    <img src={item.starImg} alt="image" />
                    <img src={item.starImg} alt="image" />
                    <img src={item.starImg} alt="image" />
                    <img src={item.starImg} alt="image" />
                    <img src={item.starImg} alt="image" />
                  </div>
                </div>
                <div className="package-content">
                  {item.content}
                  <span> Read More</span>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="right_package_container">
        <div className="right_inside_content">
          <div>
            <h1>Packages</h1>
            <h3>Adventure Simplified : Discover Our Exciting Packages!</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do
            eiusmod mpor incididunt ut , consectetur adipiscing elit, sed do
            eiusmod mpor labore et dolore magna aliqua.
          </p>
          <button>Discover More</button>
        </div>
      </div>
    </div>
  );
};

export default Packages;

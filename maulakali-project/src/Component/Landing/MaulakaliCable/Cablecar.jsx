import React from "react";
import "./cablecar.scss";
import cablecar1 from "../../../assets/cable1.png";
import cablecar2 from "../../../assets/cable2.png";
import c1 from "../../../assets/cQc1.png";
import c2 from "../../../assets/cQc2.png";

const Cablecar = () => {
  return (
    <div className="cablecar-container">
      <div className="cablecar-container-div">
        <div className="cablecar-container-leftdiv">
          <div className="firstcablecar-image">
            <img src={cablecar1} alt="Cable Car" />
            <div className="secondcablecar-image">
              <img src={cablecar2} alt="Cable Car" />
            </div>
          </div>
        </div>
        <div className="cablecar-container-rightdiv">
          <div className="cablecar-text-div">
            <div className="first-cableicon">
              <img src={c1} alt="aa" />
            </div>
            <h1>Maulakali</h1>
            <h1>Cablecar</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur incididunt ut labore et
              dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod mpor incididunt
              ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, labore et dolore magna aliqua.
            </p>
            <button className="button-global">Discover More</button>
            <div className="second-cableicon">
              <img src={c2} alt="aa" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cablecar;

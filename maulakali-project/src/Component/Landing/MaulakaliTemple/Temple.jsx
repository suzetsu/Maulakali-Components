import React from "react";
import "./temple.scss";
import templeImg from "../../../assets/t1.jpg";
import templeImg2 from "../../../assets/t2.png";
import templeImg3 from "../../../assets/t3.jpg";

const Temple = () => {
  return (
    <div className="temple-container container-inline">
      <div className="temple-container-div ">
        <div className="temple-container-left">
          <div className="temple-container-left-inside">
            <h1>MAULAKALI TEMPLE</h1>
            <div className="hya">
              <div className="templeimg">
                <img src={templeImg} alt="aa" className="" />
              </div>
              <div className="temple-description-1">
                <p>
                  Located on the top of the Mauladada or Maula hill on the north
                  of Narayani River in Gaindakot, Maula Kalika temple is
                  situated 561 metres above sea level.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="temple-container-right ">
          <div className="temple-container-right-firstdiv">
            <div className="hya">
              <div className="templeimg">
                <img src={templeImg2} alt="aa" />
              </div>
              <div className="temple-description-2">
                <p>
                  Located on the top of the Mauladada or Maula hill on the north
                  of Narayani River in Gaindakot, Maula Kalika temple is
                  situated 561 metres above sea level.
                </p>
              </div>
            </div>
          </div>
          <div className="temple-container-right-seconddiv">
            <div className="hya">
              <div className="templeimg">
                {" "}
                <img src={templeImg3} alt="aa" />
              </div>
              <div className="temple-description-3">
                <p>
                  Located on the top of the Mauladada or Maula hill on the north
                  of Narayani River in Gaindakot, Maula Kalika temple is
                  situated 561 metres above sea level.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button>Discover More</button>
      </div>
    </div>
  );
};

export default Temple;

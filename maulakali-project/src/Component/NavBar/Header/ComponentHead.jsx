// ComponentHead.jsx
import React from "react";
import { useTitle } from "../../Routes/TitleContext";
import "./headers.scss";
import rectImg from "../../../assets/submenuRect.png";

const ComponentHead = () => {
  const { title } = useTitle();
  console.log(title);

  return (
    <div className="headerCss">
      {/* <img src={rectImg} alt="aa" /> */}
      <div className="componentHeading">
        <p className="titleCss">{title}</p>
        <p className="homeCss">
          <span>Home</span>
          <span>&nbsp;/&nbsp;{title}</span>
        </p>
      </div>
    </div>
  );
};

export default ComponentHead;

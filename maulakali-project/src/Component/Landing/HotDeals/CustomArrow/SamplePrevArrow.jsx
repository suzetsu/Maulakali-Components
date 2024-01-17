import React from "react";

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className="sample-prev-arrow"
      style={{ display: "none", background: "green" }}
      onClick={onClick}
    ></div>
  );
};

export default SamplePrevArrow;

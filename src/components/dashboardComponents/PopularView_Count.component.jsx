import React from "react";

const PopularView_CountComponent = ({ text, rate }) => {
  return (
    <div className=" flex  gap-3 items-center">
      <p>{text} -</p>
      <p>{rate}</p>
    </div>
  );
};

export default PopularView_CountComponent;

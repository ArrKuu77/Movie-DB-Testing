import React from "react";
import { MdImageNotSupported } from "react-icons/md";

const NoImageComponent = ({ loadingHeight, loadingWeight, area }) => {
  return (
    <div
      className={`${
        area ? `${loadingHeight} ${loadingWeight} ` : `h-[550px]`
      }  h-full flex  flex-col justify-center items-center`}
    >
      <MdImageNotSupported className=" text-5xl animate-pulse bg-white/50 w-full h-full  text-white" />
      <p>No Image</p>
    </div>
  );
};

export default NoImageComponent;

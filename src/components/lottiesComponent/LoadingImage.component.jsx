import React from "react";
import Lottie from "lottie-react";
import LoadingLottie from "../../lotties/Animation - 1723978064500.json";
const LoadingImageComponent = ({ loadingHeight, loadingWeight, area }) => {
  return (
    <div
      className={`  bg-[#151515]   ${
        area ? `${loadingHeight} ${loadingWeight} ` : `h-[550px]`
      }   !opacity-100  flex justify-center items-center flex-col  `}
    >
      <Lottie className=" w-2/5 " animationData={LoadingLottie} loop />
      <p className=" text-white text-3xl font-bold">Loading...</p>
    </div>
  );
};

export default LoadingImageComponent;

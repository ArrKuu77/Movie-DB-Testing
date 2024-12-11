import React, { useEffect, useState } from "react";
import { Api_Image_Bais_Url } from "../../store/Lib/apiBaisUrl";
import { PopularView_Count } from "..";
import LoadingImageComponent from "../lottiesComponent/LoadingImage.component";
import ErrorImageComponent from "../lottiesComponent/ErrorImage.component";
import { Link } from "react-router-dom";
import ImageFunctionComponent from "../ImageFunction.component";

const PopularMovieCardComponent = ({
  result: {
    poster_path,
    title,
    overview,
    vote_average,
    vote_count,
    popularity,
    backdrop_path,
    release_date,
    id,
  },
}) => {
  // console.log(id);

  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const toSlug = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };
  const handleImageLoad = () => {
    setIsLoaded(true);
    setHasError(false);
    console.log(isLoaded, hasError);
  };

  const handleImageError = () => {
    setHasError(true);
    setIsLoaded(false);
    console.log(isLoaded, hasError);
  };

  return (
    <div className="card bg-black w-96 shadow-xl shadow-red-400/20 border-[2px] border-red-400/40">
      <figure className=" w-full relative">
        <ImageFunctionComponent
          imgUrl={poster_path}
          imgHeight={"h-[450px] w-full "}
          loadingHeight={"h-[450px] "}
          loadingWeight={" w-[450px]"}
          area={false}
        />

        {isLoaded && (
          <div className=" absolute bottom-0 left-0 text-white bg-red-500/70 p-1  text-lg flex items-center gap-3">
            <p>Date -</p>
            <p>{release_date}</p>
          </div>
        )}
      </figure>

      <div className=" text-white w-[90%] my-1 mx-auto">
        <h2 className="card-title py-1 font-bold text-">{title}</h2>
        {/* <p>{overview.slice(0, 50) + "....."}</p> */}
        <PopularView_Count text={"view"} rate={popularity} />

        <div className=" flex  items-center gap-1">
          <PopularView_Count text={"Vote average "} rate={vote_average} />
          <p className=" me-1">|</p>
          <PopularView_Count text={"Vote count"} rate={vote_count} />
        </div>

        <div className="card-actions justify-end py-1">
          <Link to={`/dashboardPage/detailCard/${id}`}>
            <button className="p-2 rounded-md bg-red-500 font-bold text-md text-black">
              Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularMovieCardComponent;

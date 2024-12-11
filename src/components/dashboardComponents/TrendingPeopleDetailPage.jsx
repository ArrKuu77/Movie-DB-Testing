import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useGetTrendingAllQuery } from "../../store/service/endPointService/endPoint";
import { MovieCard } from "..";
import { Api_Image_Bais_Url } from "../../store/Lib/apiBaisUrl";
import LoadingImageComponent from "../lottiesComponent/LoadingImage.component";
import ErrorImageComponent from "../lottiesComponent/ErrorImage.component";
import ImageFunctionComponent from "../ImageFunction.component";

const TrendingPeopleDetailPage = () => {
  const { actorName } = useParams();
  const { state } = useLocation();
  // console.log(state);

  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

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
    <div className=" text-white flex flex-col gap-5 py-5">
      <div>
        <Link to={"/dashboardPage/people-page"}>
          <button className=" p-2 bg-red-500 text-black font-bold rounded-md">
            Back{" "}
          </button>
        </Link>
      </div>
      <div className=" flex justify-around items-center h-[350px]">
        <div className=" w-1/2 flex flex-col justify-evenly items-center  h-full">
          <div className=" flex justify-center items-center shadow-xl shadow-red-400/20 gap-3">
            <h1 className=" ">Name :</h1>
            <h1>{state.original_name}</h1>
          </div>
          <div className=" flex justify-center items-center shadow-xl shadow-red-400/20 gap-3">
            <h1> Job :</h1>
            <p>{state.known_for_department}</p>
          </div>
          <div className=" flex justify-center items-center shadow-xl shadow-red-400/20 gap-3">
            <h1>Popular :</h1>
            <p>{state.popularity}</p>
          </div>
          <div className=" flex justify-center items-center shadow-xl shadow-red-400/20 gap-3">
            <h1>Gender:</h1>
            <p>{state.gender === 1 ? "Female" : "Male"}</p>
          </div>
        </div>

        <div className=" md:w-1/4 w-1/3 h-full shadow-xl shadow-red-400/20 border-[2px] border-red-400/40">
          <ImageFunctionComponent
            imgUrl={state.profile_path}
            imgHeight={" h-full w-full"}
            loadingHeight={"h-[250px]"}
            loadingWeight={" w-[250px]"}
            area={true}
          />
        </div>
      </div>
      <div className=" my-5 text-center text-2xl font-bold bg-neutral-700/60 shadow-red-600/40 shadow-lg p-3">
        <h1>{state.name} movies list</h1>
      </div>
      {/* <div className=" flex flex-wrap  justify-center gap-5 items-center">
        {state.known_for.map((movie) => (
          <MovieCard key={movie.id} result={movie} />
        ))}
      </div> */}
    </div>
  );
};

export default TrendingPeopleDetailPage;

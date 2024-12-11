import React, { useState } from "react";
import { Api_Image_Bais_Url } from "../../store/Lib/apiBaisUrl";
import LoadingImageComponent from "../lottiesComponent/LoadingImage.component";
import ErrorImageComponent from "../lottiesComponent/ErrorImage.component";
import { Link } from "react-router-dom";
import ImageFunctionComponent from "../ImageFunction.component";

const TrendingPeopleActorCard = ({ result }) => {
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
  const toSlug = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };
  return (
    <Link
      to={`/dashboardPage/people-page/${toSlug(result.original_name)}`}
      state={result}
    >
      <div key={result.id} className="text-white cursor-pointer ">
        <figure className="  w-full  relative  ">
          <ImageFunctionComponent
            imgUrl={result.profile_path}
            imgHeight={"h-[250px] w-[250px]"}
            loadingHeight={"h-[250px]"}
            loadingWeight={" w-[200px]"}
            area={true}
          />

          <div className=" bg-black/70 p-1  flex flex-col justify-between items-center gap-2 absolute bottom-3 right-3 rounded-md text-sm ">
            <div className=" flex justify-center items-center">
              <p> Job:</p>
              <p>{result.known_for_department}</p>
            </div>
            <div className=" flex justify-center items-center">
              <p>Gender :</p>
              <p>{result.gender === 1 ? "Female" : "Male"}</p>
            </div>
          </div>
        </figure>
        <div className="bg-black/80 p-3 shadow-md shadow-gray-600 ">
          <h1 className="text-xl">{result.original_name}</h1>
          <div className=" flex justify-between items-center text-sm">
            {/* <div className=" text-slate-400 flex justify-center items-center gap-1">
              <span>{result.known_for.length}</span>
              <span>vedio{result.known_for.length > 1 && "s"}</span>
            </div> */}
            <div className=" flex justify-between items-center gap-1 ">
              <p>popularity -</p>

              <p className="flex justify-center items-center">
                <span>
                  {" "}
                  {parseInt(result.popularity) >= 1000
                    ? `${Math.floor(parseInt(result.popularity) / 1000)}`
                    : parseInt(result.popularity)}
                </span>
                <span>K</span>
              </p>
            </div>
          </div>
        </div>
        {/* <div className=" flex  justify-center items-center gap-3">
      {act.known_for.map((movie) => (
        <MovieCard key={movie.id} result={movie} />
      ))}
    </div> */}
      </div>
    </Link>
  );
};

export default TrendingPeopleActorCard;

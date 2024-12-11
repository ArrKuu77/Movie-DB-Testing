import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useGetDetailMovieQuery } from "../../store/service/endPointService/endPoint";
import { Api_Image_Bais_Url } from "../../store/Lib/apiBaisUrl";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaStar, FaRegStar } from "react-icons/fa6";
import ImageFunctionComponent from "../../components/ImageFunction.component";
import PreventComponent from "../../components/PreventComponent";
import LoadingImageComponent from "../../components/lottiesComponent/LoadingImage.component";
import ErrorImageComponent from "../../components/lottiesComponent/ErrorImage.component";

const MovieCardDetali = () => {
  const { idCardDetail } = useParams();
  const { data, isLoading, isError, isSuccess } =
    useGetDetailMovieQuery(idCardDetail);
  console.log(data);
  let array = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <PreventComponent
      goPage={`/dashboardPage/detailCard/${idCardDetail}`}
      check={localStorage.getItem("authToken")}
    >
      {isLoading ? (
        <LoadingImageComponent
          loadingHeight={"h-screen"}
          loadingWeight={"w-full"}
          area={true}
        />
      ) : isError ? (
        <ErrorImageComponent
          loadingHeight={"h-screen"}
          loadingWeight={"w-full"}
          area={true}
        />
      ) : (
        isSuccess && (
          <div className=" text-white bg-black  pb-10  ">
            <div className="  relative w-full h-full object-fill  ">
              {/* <img
            className=" w-full"
            src={Api_Image_Bais_Url + data?.backdrop_path}
            alt=""
          /> */}
              <ImageFunctionComponent
                imgUrl={data?.backdrop_path}
                imgHeight={"h-full w-full"}
                loadingHeight={"h-[300px]"}
                loadingWeight={"w-full"}
                area={false}
              />
              <div className=" absolute flex justify-center items-center flex-col h-full top-0 container bg-black/50 ">
                <div className="  my-3  flex  gap-5 h-[300px] lg:h-[350px]  items-center ">
                  <div className=" cursor-pointer w-[20%] h-full overflow-hidden object-fill ">
                    {/* <img
                  className=" h-full w-full"
                  src={Api_Image_Bais_Url + data?.poster_path}
                  alt=""
                /> */}
                    <ImageFunctionComponent
                      imgUrl={data?.poster_path}
                      imgHeight={"h-full "}
                      loadingHeight={"h-[300px]"}
                      loadingWeight={"w-full"}
                      area={true}
                    />
                  </div>

                  <div className=" flex flex-col justify-evenly  h-full w-[45%]  ">
                    <div className="">
                      <span className=" text-xl font-bold">
                        {data?.original_title}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <p>
                        <span>Tagline : </span>
                        <span>{data?.tagline}</span>
                      </p>
                    </div>

                    <div className=" flex items-center gap-3">
                      <p>Release Date : </p> <span>{data?.release_date}</span>
                    </div>
                    <div className=" flex items-center gap-3">
                      <p>Popularity : </p> <span>{data?.popularity}</span>
                    </div>
                    <div className=" flex items-center gap-3">
                      <p>Runtime : </p> <span>{data?.runtime + "minutes"}</span>
                    </div>
                    <div className=" flex items-center gap-2">
                      <p>Production Country : </p>
                      {data?.production_countries.map((country, index) => (
                        <p key={index} className="   ">
                          <span className="">{country.name}</span>
                        </p>
                      ))}
                      {}
                    </div>

                    <div className=" flex items-center gap-2 ">
                      <p>Spoken Languages : </p>
                      {data?.spoken_languages.map((language, index) => (
                        <p key={index} className="">
                          {data?.spoken_languages.length - 1 == index
                            ? language.name
                            : language.name + ","}
                        </p>
                      ))}
                    </div>

                    <div className=" flex items-center gap-3">
                      <p>Budget : </p> <span>{data?.budget}</span>
                    </div>
                    <div className=" flex items-center gap-3">
                      <p>Revenue : </p> <span>{data?.revenue}</span>
                    </div>
                  </div>
                  <div className=" w-[30%] h-full ">
                    <div className="flex flex-col gap-5 justify-evenly   h-full w-full">
                      <div className=" bg-red-800/70  p-2">
                        <p className=" font-semibold text-md">Overview</p>
                      </div>
                      <div className="   text-gray-200 text-sm">
                        <p>{data?.overview}</p>
                      </div>
                      <a href={data?.homepage} target="blank">
                        <button className=" hover:scale-105 hover:shadow-sm hover:shadow-red-500/80  w-full px-1 py-2 gap-3 bg-red-500/80 text-lg font-bold flex justify-center items-center   rounded-lg">
                          <span>
                            {data?.homepage
                              ? "Go Official Wedsite"
                              : "Have not Official Wedsite"}
                          </span>
                          <FaArrowCircleRight />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className=" w-full py-3">
                  <div className=" flex  gap-3 items-center">
                    <div className=" flex flex-col justify-center w-[20%] items-center">
                      <div className=" flex justify-center items-center">
                        <span className=" text-xl font-bold">
                          {data?.vote_average}
                        </span>
                        <span className=" text-xl text-white/80">/10</span>
                      </div>
                      <div className=" text-red-600   flex justify-center items-center gap-3 text-2xl  p-2 ">
                        {array.map((arrNum) => {
                          return arrNum * 2 <= data?.vote_average.toFixed() ? (
                            <FaStar
                              className="shadow-red-700/90 shadow-lg"
                              key={arrNum}
                            />
                          ) : (
                            <FaRegStar
                              className="shadow-neutral-700/90 shadow-lg"
                              key={arrNum}
                            />
                          );
                        })}
                      </div>
                      <div>
                        <p>
                          {" "}
                          <span>From {data?.vote_count} Vote Count</span>
                        </p>
                      </div>
                    </div>
                    <div className=" ">
                      <div className=" flex flex-col items-center gap-1  ">
                        <p className=" text-xl font-semibold bg-red-800/70  p-2 w-full ">
                          Genre{" "}
                        </p>
                        <div className=" flex flex-wrap gap-3  items-center ">
                          {data?.genres.map((genre) => (
                            <p
                              key={genre.id}
                              className=" p-1 cursor-pointer hover:scale-110 hover:shadow-md hover:shadow-neutral-800 text-center bg-neutral-900/80 font-bold text-md rounded-md    "
                            >
                              {genre.name}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* belongs_to_collection */}
            <div className=" my-3">
              <div className=" text-xl font-semibold bg-red-800/70  p-2  flex justify-center gap-3 my-3 items-center  w-1/2 mx-auto">
                <h1>Collection:</h1>
                <h1>
                  {data?.belongs_to_collection?.name
                    ? data?.belongs_to_collection?.name
                    : "have not yet"}
                </h1>
              </div>
              <div className=" flex gap-5 flex-wrap items-center justify-center">
                <ImageFunctionComponent
                  imgUrl={data?.belongs_to_collection?.backdrop_path}
                  imgHeight={
                    " w-[300px] object-fill h-[300px] hover:scale-105 hover:opacity-80 cursor-pointer"
                  }
                  loadingHeight={"h-[300px]"}
                  loadingWeight={" w-[300px]"}
                  area={true}
                />
                <ImageFunctionComponent
                  imgUrl={data?.belongs_to_collection?.poster_path}
                  imgHeight={
                    " w-[300px] object-fill h-[300px] hover:scale-105 hover:opacity-80 cursor-pointer"
                  }
                  loadingHeight={"h-[300px]"}
                  loadingWeight={" w-[300px]"}
                  area={true}
                />
              </div>
            </div>

            <div className=" my-5  ">
              <div className=" w-full flex   flex-col justify-center items-center ">
                <p className="  text-xl font-semibold bg-red-800/70  p-2 ">
                  {data?.production_companies.length > 1
                    ? "Production Companies"
                    : " Production Company"}{" "}
                </p>
                <div className="flex  justify-center mt-3 flex-wrap  gap-5 w-full  items-center">
                  {data?.production_companies.map((company) => (
                    <div
                      className=" w-[20%] h-[125px]    flex flex-col justify-center items-center"
                      key={company.id}
                    >
                      <p className="   ">
                        <span className="">{company.name}</span>
                      </p>

                      <ImageFunctionComponent
                        imgUrl={company.logo_path}
                        imgHeight={
                          "bg-white/50 h-full w-full object-fill overflow-hidden  dden  p-1"
                        }
                        loadingHeight={"h-full overflow-hidden"}
                        loadingWeight={" w-full "}
                        area={true}
                      />
                    </div>
                  ))}
                </div>
                {}
              </div>
            </div>
          </div>
        )
      )}
    </PreventComponent>
  );
};

export default MovieCardDetali;

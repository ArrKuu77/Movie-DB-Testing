import React, { useState } from "react";
import { useGetPopularMoviesQuery } from "../../store/service/endPointService/endPoint";
import MotherPageComponents from "../../components/dashboardComponents/MotherPage.components";
import { MovieCard } from "../../components";
import { useLocation, useSearchParams } from "react-router-dom";

const PopularMovie_DBPage = () => {
  // console.log(useGetPopularMoviesQuery);
  const [param, setParam] = useSearchParams();
  const location = useLocation();
  // console.log(location);

  // const objParam = Object.fromEntries(param.entries());

  return (
    <MotherPageComponents
      pageName={"popular"}
      goPage={`/dashboardPage${location.search == "" ? "" : "?" + param}`}
      requestMethod={useGetPopularMoviesQuery}
      LoopingCard={MovieCard}
    />
  );
};

export default PopularMovie_DBPage;

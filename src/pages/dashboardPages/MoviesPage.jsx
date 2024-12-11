import React, { useState } from "react";
import { MovieCard, PreventComponent } from "../../components";
import { useGetTrendingAllQuery } from "../../store/service/endPointService/endPoint";
import MotherPageComponents from "../../components/dashboardComponents/MotherPage.components";
import { useLocation, useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [param, setParam] = useSearchParams();
  const location = useLocation();
  console.log(location);
  return (
    <MotherPageComponents
      pageName={"movie"}
      goPage={`/dashboardPage/movies-page${
        location.search == "" ? "" : "?" + param
      }`}
      requestMethod={useGetTrendingAllQuery}
      LoopingCard={MovieCard}
    />
  );
};

export default MoviesPage;

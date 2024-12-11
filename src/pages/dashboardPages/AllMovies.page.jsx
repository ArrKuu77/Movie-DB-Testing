import React, { useState } from "react";
import { MovieCard, PaginationTool, PreventComponent } from "../../components";
import { useGetTrendingAllQuery } from "../../store/service/endPointService/endPoint";
import MotherPageComponents from "../../components/dashboardComponents/MotherPage.components";
import { useLocation, useSearchParams } from "react-router-dom";

const AllMoviesPage = () => {
  const [param, setParam] = useSearchParams();
  const location = useLocation();
  console.log(location);
  return (
    <MotherPageComponents
      requestMethod={useGetTrendingAllQuery}
      pageName={"all"}
      goPage={`/dashboardPage/all-movie-page${
        location.search == "" ? "" : "?" + param
      }`}
      LoopingCard={MovieCard}
    />
  );
};

export default AllMoviesPage;

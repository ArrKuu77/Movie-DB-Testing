import React, { useState } from "react";
import { useGetTrendingAllQuery } from "../../store/service/endPointService/endPoint";
import { MovieCard } from "../../components";
import { Api_Image_Bais_Url } from "../../store/Lib/apiBaisUrl";
import TrendingPeopleActorCard from "../../components/dashboardComponents/TrendingPeopleActorCard";
import MotherPageComponents from "../../components/dashboardComponents/MotherPage.components";
import { useLocation, useSearchParams } from "react-router-dom";

const TrendingPeoplePage = () => {
  const [param, setParam] = useSearchParams();
  const location = useLocation();
  console.log(location);
  return (
    <MotherPageComponents
      requestMethod={useGetTrendingAllQuery}
      pageName={"person"}
      goPage={`/dashboardPage/people-page${
        location.search == "" ? "" : "?" + param
      }`}
      LoopingCard={TrendingPeopleActorCard}
    />
  );
};

export default TrendingPeoplePage;

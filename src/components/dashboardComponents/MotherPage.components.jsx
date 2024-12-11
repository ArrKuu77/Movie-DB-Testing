import React, { useEffect, useState } from "react";
// import { useGetTrendingAllQuery } from "../../store/service/endPointService/endPoint";
import PreventComponent from "../PreventComponent";
import MoviePaginationContainerComponent from "./MoviePaginationContainer.component";
import LoadingImageComponent from "../lottiesComponent/LoadingImage.component";
import ErrorImageComponent from "../lottiesComponent/ErrorImage.component";
import useLogoutFun from "../../store/zustand/useLogoutFun";
import { useLocation, useSearchParams } from "react-router-dom";

const MotherPageComponents = ({
  pageName,
  goPage,
  requestMethod,
  LoopingCard,
}) => {
  console.log(goPage);
  const location = useLocation();
  const [param, setParam] = useSearchParams();
  const jj = new URLSearchParams(location.search);
  // console.log(jj);
  const objParam = Object.fromEntries(jj.entries());
  // console.log(objParam.page);

  // setParam({ page: 2, limit: 2 });
  // console.log(param);
  const [page, setPage] = useState(1);
  // console.log(page);

  const { data, isError, isLoading, isSuccess } = requestMethod({
    pageName,
    pageNumber: page,
  });
  useEffect(() => {
    if (objParam.page !== page || objParam.page !== undefined) {
      console.log(page, objParam);
      setPage(objParam.page == undefined ? 1 : objParam.page);
    }
  }, [objParam.page]);
  console.log(data, isError, isLoading, isSuccess);

  return (
    <PreventComponent goPage={goPage} check={localStorage.getItem("authToken")}>
      {isLoading ? (
        <LoadingImageComponent
          loadingHeight={"h-screen"}
          loadingWeight={"w-full"}
          area={true}
        />
      ) : isError ? (
        <ErrorImageComponent />
      ) : (
        isSuccess && (
          <MoviePaginationContainerComponent
            data={data}
            page={page}
            setPage={setPage}
            LoopingCard={LoopingCard}
          />
        )
      )}
    </PreventComponent>
  );
};

export default MotherPageComponents;

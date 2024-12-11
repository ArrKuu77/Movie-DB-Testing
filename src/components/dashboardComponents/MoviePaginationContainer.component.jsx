import React from "react";
import { PaginationTool } from "..";

const MoviePaginationContainerComponent = ({
  data,
  page,
  setPage,
  LoopingCard,
}) => {
  // console.log(data);

  return (
    <div className=" flex flex-col justify-between items-center  pb-5">
      <div className=" flex justify-center items-center flex-wrap gap-5 my-5">
        {data?.results.map((result) => (
          <LoopingCard key={result.id} result={result} />
        ))}
      </div>

      <PaginationTool
        totalPage={500}
        page={page}
        limit={5}
        siblings={1}
        setPage={setPage}
      />
    </div>
  );
};

export default MoviePaginationContainerComponent;

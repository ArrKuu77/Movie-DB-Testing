import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { returnPaginationRange } from "./popularReturnPaginationRange";
import { useSearchParams } from "react-router-dom";

const PopularPaginationToolComponent = ({
  totalPage,
  page,
  siblings,
  setPage,
}) => {
  let arr = returnPaginationRange(totalPage, page, siblings);
  const [param, setParam] = useSearchParams();
  const objParam = Object.fromEntries(param.entries());

  const handlePagination = (e) => {
    console.log(parseInt(e.target.innerHTML));
    setParam({ page: e.target.innerHTML });
    setPage(e.target.innerHTML);
  };
  const handlePrevNext = (previous, next) => {
    console.log(previous, next);
    if (previous == "previous") {
      page > 1 && setPage(page - 1);
    } else if (next == "next") {
      page < totalPage && setPage(parseInt(page) + 1);
    }
  };
  return (
    <div className=" shadow-md shadow-gray-600  ">
      <Pagination>
        <PaginationContent>
          {/* Previous Buttom */}
          <PaginationItem className=" bg-black text-white cursor-pointer select-none">
            <PaginationPrevious
              onClick={handlePrevNext.bind(null, "previous", null)}
            />
          </PaginationItem>

          {arr.map((value, index) => (
            <PaginationItem
              className=" bg-black text-white   cursor-pointer select-none"
              key={index}
            >
              {value == "..." ? (
                <PaginationEllipsis>{value}</PaginationEllipsis>
              ) : (
                <PaginationLink
                  className={` bg-black  border border-orangeColor text-white ${
                    value == page && "bg-red-500 text-black "
                  }`}
                  isActive={value == page}
                  onClick={handlePagination}
                >
                  {value}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

          {/* {newArray.map((number) => (
            <PaginationItem key={number}>
              <PaginationLink>{number}</PaginationLink>
            </PaginationItem>
          ))} */}

          {/* <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem> */}
          {/* Next buttom */}
          <PaginationItem>
            <PaginationNext
              className=" bg-black text-white cursor-pointer select-none"
              onClick={handlePrevNext.bind(null, null, "next")}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PopularPaginationToolComponent;

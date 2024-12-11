import _ from "lodash";

export const returnPaginationRange = (totalPage, page, siblings) => {
  let totalPageNOInArray = 7 + siblings;
  // console.log(totalPageNOInArray, page);

  if (totalPageNOInArray >= totalPage) {
    console.log(totalPageNOInArray >= totalPage);
    return _.range(1, totalPage + 1);
  }

  let leftSliblingsIndex = Math.max(page - siblings, 1);
  let rightSliblingIndex = Math.min(parseInt(page) + siblings, totalPage);
  // console.log(rightSliblingIndex, leftSliblingsIndex);

  let showLeftDots = leftSliblingsIndex > 2;
  let showRightDots = rightSliblingIndex < totalPage - 2;

  // console.log(showLeftDots, showRightDots);
  if (!showLeftDots && showRightDots) {
    let leftItemCount = 3 + 2 * siblings;
    let leftRange = _.range(1, leftItemCount + 1);
    return [...leftRange, "...", totalPage];
  } else if (showLeftDots && !showRightDots) {
    let rightItemCount = 3 + 2 * siblings;
    let rightRange = _.range(totalPage - rightItemCount + 1, totalPage + 1);
    return [1, "...", ...rightRange];
  } else {
    let middleRange = _.range(leftSliblingsIndex, leftSliblingsIndex + 3);
    // console.log(rightSliblingIndex, leftSliblingsIndex);
    return [1, "...", ...middleRange, "...", totalPage];
  }
};

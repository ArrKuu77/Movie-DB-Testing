import React, { useState } from "react";
import { Api_Image_Bais_Url } from "../store/Lib/apiBaisUrl";
import LoadingImageComponent from "./lottiesComponent/LoadingImage.component";
import ErrorImageComponent from "./lottiesComponent/ErrorImage.component";
import NoImageComponent from "./NoImage.component";

const ImageFunctionComponent = ({
  imgUrl,
  imgHeight,
  area,
  loadingHeight,
  loadingWeight,
}) => {
  // console.log(Api_Image_Bais_Url + imgUrl);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const handleImageLoad = () => {
    setIsLoaded(true);
    setHasError(false);
    // console.log(isLoaded, hasError);
  };

  const handleImageError = () => {
    setHasError(true);
    setIsLoaded(false);
    console.log(isLoaded, hasError);
  };
  return (
    <>
      {imgUrl == undefined ? (
        <NoImageComponent
          loadingHeight={loadingHeight}
          loadingWeight={loadingWeight}
          area={area}
        />
      ) : (
        <>
          {" "}
          <img
            alt="Movie Poster"
            onLoad={handleImageLoad}
            onError={handleImageError}
            // style={{ display: isLoaded ? "block" : "none" }}
            className={` object-fill   ${imgHeight ? imgHeight : "w-full"}  ${
              isLoaded ? "block" : "hidden"
            }`}
            src={Api_Image_Bais_Url + imgUrl}
          />{" "}
          {!isLoaded && !hasError && (
            <div>
              <LoadingImageComponent
                loadingHeight={loadingHeight}
                loadingWeight={loadingWeight}
                area={area}
              />
            </div>
          )}
          {hasError && (
            <ErrorImageComponent
              loadingHeight={loadingHeight}
              loadingWeight={loadingWeight}
              area={area}
            />
          )}
        </>
      )}
    </>
  );
};

export default ImageFunctionComponent;

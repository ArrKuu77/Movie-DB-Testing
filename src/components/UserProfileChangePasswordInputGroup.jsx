import React from "react";

const UserProfileChangePasswordInputGroup = ({ register, errors, objName }) => {
  console.log(objName);
  console.log(errors);

  return (
    <div className=" ">
      <label
        htmlFor={objName}
        className={`block mb-2 text-sm font-medium text-white `}
      >
        {objName}
      </label>
      <input
        id={objName}
        type="text"
        {...register(`${objName}`, {
          required: true,
          minLength: 8,
          maxLength: 10,
        })}
        className={` border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500`}
        placeholder={objName}
      />
      {/* {errors.objName?.type === "required" && (
        <p className=" text-red-500 text-sm mt-1">Product name is required</p>
      )}
      {errors.objName?.type === "minLength" && (
        <p className=" text-red-500 text-sm mt-1">
          Product name must be greater than 3 characters
        </p>
      )} */}
      {/* {errors.objName?.type === "maxLength" && (
        <p className=" text-red-500 text-sm mt-1">
          Product name must be less than 10 characters
        </p>
      )} */}
    </div>
  );
};

export default UserProfileChangePasswordInputGroup;

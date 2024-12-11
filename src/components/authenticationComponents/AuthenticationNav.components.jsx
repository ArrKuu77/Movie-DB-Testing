import React from "react";

const AuthenticationNavComponents = ({ authenticator, setAuthenticator }) => {
  return (
    <div className=" h-[8%] w-full py-3">
      <div className=" mx-auto w-11/12 flex justify-between items-center ">
        <div className=" text-2xl gap-1 items-center flex ">
          <span className=" text-white">ArrKuu</span>
          <span className=" bg-red-500 text-black p-1 rounded-lg ">Movie</span>
        </div>
        <button
          onClick={() => setAuthenticator(!authenticator)}
          className=" text-lg bg-red-500 rounded-lg p-2  text-black font-bold"
        >
          {authenticator ? "SignUp" : "SignIN"}
        </button>
      </div>
    </div>
  );
};

export default AuthenticationNavComponents;

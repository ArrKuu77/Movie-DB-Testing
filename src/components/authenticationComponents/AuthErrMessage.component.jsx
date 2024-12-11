import React from "react";

const AuthErrMessageComponent = ({ message, title }) => {
  return (
    <div className="my-3 text-red-500 text-xl font-bold inline-block bg-black/70  shadow-lg shadow-red-800  animate-bounce">
      <p className=" ">{title}</p>
      <p className="text-lg">{message}</p>
    </div>
  );
};

export default AuthErrMessageComponent;

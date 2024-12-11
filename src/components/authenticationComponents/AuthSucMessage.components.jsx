import React from "react";

const AuthSucMessage = ({ message, title }) => {
  return (
    <div className=" shadow-green-800 bg-black/70 inline-block  my-3 shadow-lg text-green-500 text-xl font-bold">
      <p>{message}</p>
      <p className=" animate-bounce">{title}</p>
    </div>
  );
};

export default AuthSucMessage;

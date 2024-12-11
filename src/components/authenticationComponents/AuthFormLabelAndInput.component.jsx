import React from "react";

const AuthFormLabelAndInput = ({ value, HandleChange, name, type }) => {
  return (
    <div className="form-control ">
      <label className="label ">
        <span className="first-letter:uppercase label-text !text-white">
          {name}
        </span>
      </label>
      <input
        value={value}
        name={name}
        onChange={HandleChange}
        type={type}
        placeholder={name}
        className="input input-bordered"
        required
      />
    </div>
  );
};

export default AuthFormLabelAndInput;

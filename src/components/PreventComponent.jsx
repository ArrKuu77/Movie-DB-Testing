import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PreventComponent = ({ check, goPage, children }) => {
  const nav = useNavigate();
  useEffect(() => {
    if (check) {
      nav(goPage);
    } else {
      nav("/");
    }
  }, []);
  return <div> {children}</div>;
};

export default PreventComponent;

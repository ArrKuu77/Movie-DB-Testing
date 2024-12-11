import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const NavbarLinkComponent = ({ Icon, goPage, PageName }) => {
  return (
    <li className=" my-1 w-full">
      <NavLink className="w-full flex justify-between items-center" to={goPage}>
        <span>{PageName}</span>
        <Icon />
      </NavLink>
    </li>
  );
};

export default NavbarLinkComponent;

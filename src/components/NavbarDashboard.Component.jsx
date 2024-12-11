import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useGetLogOutMutation } from "../store/service/endPointService/endPoint";
import { ImMenu } from "react-icons/im";
import "../App.css";
import { BsPersonWorkspace } from "react-icons/bs";
import NavbarLinkComponent from "./NavbarLinkComponent";
import { BiSolidCameraMovie } from "react-icons/bi";
import { SiThemoviedatabase } from "react-icons/si";
import useLogoutFun from "../store/zustand/useLogoutFun";
import { MdManageAccounts } from "react-icons/md";
import { TbTrendingUp } from "react-icons/tb";
import { MdSwitchAccount } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";

const NavbarDashboardComponent = () => {
  const [LogoutFun, logoutData] = useGetLogOutMutation();
  const nav = useNavigate();
  const { LogoutzustandLoadingStart, LogoutzustandLoadingFinish } =
    useLogoutFun();

  const logOutFunction = async () => {
    // LogoutzustandLoadingStart();
    // const res = await LogoutFun();
    // if (res.data.success) {
    nav("/");
    localStorage.removeItem("authToken");
    LogoutzustandLoadingFinish();
    // }
  };
  return (
    <nav className=" sticky top-0 z-50  bg-neutral-900/80 shadow-lg shadow-neutral-800">
      <div className="  w-full py-3">
        <div className=" mx-auto w-11/12 flex justify-between items-center ">
          <Link to={"/"}>
            <div className=" text-2xl gap-1 items-center flex ">
              <span className=" text-white">ArrKuu</span>
              <span className=" bg-red-500 text-black p-1 rounded-lg ">
                Movie
              </span>
            </div>
          </Link>

          <div className="drawer w-auto">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className=" hover:bg-black hover:text-white text-black btn bg-red-500 border-none drawer-button"
              >
                <ImMenu className=" text-xl" />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-300 text-base-content min-h-full w-1/2 md:w-[30%] lg:w-[22%] p-4 gap-5">
                {/* Sidebar content here */}
                <details className="dropdown text-white w-full ">
                  <summary className="btn hover:bg-black text-white  bg-neutral-700 flex items-center gap-3 justify-center  text-lg m-1">
                    <p>Trending</p> <TbTrendingUp />
                  </summary>
                  <ul className=" w-full shadow-lg shadow-neutral-800 rounded-box bg-neutral-900 p-2 ">
                    <NavbarLinkComponent
                      goPage={"all-movie-page"}
                      PageName={"All"}
                      Icon={SiThemoviedatabase}
                    />

                    <NavbarLinkComponent
                      goPage={"movies-page"}
                      PageName={"Movies"}
                      Icon={BiSolidCameraMovie}
                    />
                    <NavbarLinkComponent
                      goPage={"people-page"}
                      PageName={"People"}
                      Icon={BsPersonWorkspace}
                    />
                  </ul>
                </details>
                <details className="dropdown text-white w-full ">
                  <summary className="btn hover:bg-black text-white  bg-neutral-700 flex items-center justify-center gap-3  text-lg m-1">
                    <p>AccountSetting</p>
                    <MdManageAccounts />
                  </summary>
                  <ul className=" w-full shadow-lg shadow-neutral-800 rounded-box bg-neutral-900 p-2 ">
                    <NavbarLinkComponent
                      goPage={"user-profile"}
                      PageName={"Profile"}
                      Icon={MdSwitchAccount}
                    />
                    <button
                      onClick={logOutFunction}
                      className=" flex justify-between hover:text-white items-center my-3 text-md hover:bg-red-500 rounded-lg py-2 px-4 bg-neutral-900 w-full text-start text-red-600 font-bold"
                    >
                      <p>LogOut</p> <RiLogoutBoxRFill />
                    </button>
                  </ul>
                </details>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDashboardComponent;

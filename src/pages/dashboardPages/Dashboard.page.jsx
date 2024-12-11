import React from "react";
import { NavbarDashboardComponent, PreventComponent } from "../../components";
import { Outlet } from "react-router-dom";
import useLogoutFun from "../../store/zustand/useLogoutFun";
import LoadingImageComponent from "../../components/lottiesComponent/LoadingImage.component";

const DashboardPage = () => {
  const { logoutDataZustand } = useLogoutFun();
  // console.log(logoutDataZustand);

  return (
    <div className=" relative bg-neutral-950">
      {logoutDataZustand ? (
        <LoadingImageComponent
          loadingHeight={"h-screen"}
          loadingWeight={"w-full"}
          area={true}
        />
      ) : (
        // popularmovies
        <>
          <NavbarDashboardComponent />

          <div className=" container mx-auto mt-5">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardPage;

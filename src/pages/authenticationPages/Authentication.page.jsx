import React, { useState } from "react";
import authenticationImg from "../../../Image/Hero-AuthenticationPages.jpg";
import {
  AuthenticationForm,
  AuthenticationNav,
  PreventComponent,
} from "../../components";
const AuthenticationPage = () => {
  const [authenticator, setAuthenticator] = useState(true);
  return (
    <PreventComponent
      goPage={"/dashboardPage"}
      check={localStorage.getItem("authToken")}
    >
      <div className="  ">
        <div className="   relative ">
          <img
            src={authenticationImg}
            className="   max-lg:h-[1000px] "
            alt=""
          />
          <div className=" h-full w-full max-lg:flex flex-col gap-5  absolute top-0">
            <AuthenticationNav
              authenticator={authenticator}
              setAuthenticator={setAuthenticator}
            />
            <AuthenticationForm
              authenticator={authenticator}
              setAuthenticator={setAuthenticator}
            />
          </div>
        </div>
      </div>
    </PreventComponent>
  );
};

export default AuthenticationPage;

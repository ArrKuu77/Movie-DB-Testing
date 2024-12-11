import React, { useState } from "react";
import authenticationNavImg from "../../../Image/logo1.jpg";
import {
  useGetSignInMutation,
  useGetSignUpMutation,
} from "../../store/service/endPointService/endPoint";
import AuthFormLabelAndInput from "./AuthFormLabelAndInput.component";
import { useNavigate } from "react-router-dom";
import AuthSucMessage from "./AuthSucMessage.components";
import AuthErrMessageComponent from "./AuthErrMessage.component";
import { isError } from "lodash";

const authenticationFormComponent = ({ authenticator, setAuthenticator }) => {
  const [SignIn, SignInData] = useGetSignInMutation();
  const [SignUp, SignUpData] = useGetSignUpMutation();
  const nav = useNavigate();
  console.log(SignUpData);
  console.log(SignInData);

  const [authformData, setAuthformData] = useState({
    email: "",
    password: "",
    name: "",
    password_confirmation: "",
  });
  const HandleChange = (e) => {
    setAuthformData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (authenticator) {
      const authFormData = {
        email: authformData.email,
        password: authformData.password,
      };
      const res = await SignIn(authFormData);
      // console.log(res);
      if (res.data?.token) {
        localStorage.setItem("authToken", res.data.token);
        setTimeout(() => {
          nav("/dashboardPage");
          setAuthformData((pre) => ({
            ...pre,
            password: "",
            name: "",
            password_confirmation: "",
          }));
        }, 2000);
      }
    } else {
      console.log("signup");
      const respon = await SignUp(authformData);
      console.log(respon);
      if (respon.data?.token) {
        setTimeout(() => {
          setAuthenticator(!authenticator);
          setAuthformData((pre) => ({
            ...pre,
            password: "",
            name: "",
            password_confirmation: "",
          }));
        }, 5000);
      }
    }
  };
  return (
    <div className={`   ${!authenticator && " flex "}  h-[80%]  hero  `}>
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="text-center text-white lg:text-left">
          <div>
            {SignInData?.isError && (
              <p className=" shadow-green-800 bg-black/70 inline-block  my-3 shadow-lg text-green-500 text-md font-bold ">
                !Please Enter SignIN again
              </p>
            )}
          </div>
          <div className=" flex items-center max-lg:justify-center gap-3 ">
            <img
              src={authenticationNavImg}
              alt=""
              className=" w-[10%] h-[10%] rounded-lg border-black border  "
            />
            <h1 className="text-5xl font-bold">
              {authenticator ? "SignIn" : "SignUp"}!
            </h1>
          </div>
          <h1 className=" text-2xl font-bold">Let the streaming begin</h1>
          <p className="py-6 font-bold shadow-xl shadow-black  ">
            Watch thousands of free movies and TV shows, as well as stream your
            own personal collection of movies, TV episodes, music and podcasts!
          </p>
          <div>
            {authenticator ? (
              SignInData.data?.success ? (
                <AuthSucMessage
                  message={SignInData.data?.message}
                  title={"!Welcome ArrKuu Movie"}
                />
              ) : (
                SignInData.data?.success == false && (
                  <AuthErrMessageComponent
                    message={SignInData?.data?.message}
                    title={"!Please try SignIn again"}
                  />
                )
              )
            ) : SignUpData.data ? (
              <AuthSucMessage
                message={SignUpData.data?.message}
                title={"!Please Enter SignIN again"}
              />
            ) : (
              SignUpData.isError && (
                <AuthErrMessageComponent
                  message={SignUpData.error?.data?.message}
                  title={"!Please try SignUp again"}
                />
              )
            )}
          </div>
        </div>

        <div className="card bg-black/70 backdrop-brightness-90   w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body  p-5 pt-0  " onSubmit={HandleSubmit}>
            {!authenticator && (
              <AuthFormLabelAndInput
                name={"name"}
                type={"text"}
                value={authformData.name}
                HandleChange={HandleChange}
              />
            )}
            <AuthFormLabelAndInput
              type={"email"}
              name={"email"}
              value={authformData.email}
              HandleChange={HandleChange}
            />
            <AuthFormLabelAndInput
              name={"password"}
              type={"password"}
              value={authformData.password}
              HandleChange={HandleChange}
            />

            {!authenticator && (
              <AuthFormLabelAndInput
                type={"password"}
                name={"password_confirmation"}
                value={authformData.password_confirmation}
                HandleChange={HandleChange}
              />
            )}
            {/* <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label> */}

            <div className="form-control mt-6">
              <button
                disabled={SignInData.isLoading || SignUpData.isLoading}
                type="submit"
                className="btn text-black text-lg  font-bold bg-red-600"
              >
                {SignInData.isLoading || SignUpData.isLoading ? (
                  <p className=" bg-red-600 flex justify-center items-center gap-3 w-full h-full text-black  text-lg ">
                    <span>Loading</span>
                    <span className="loading loading-dots loading-md"></span>
                  </p>
                ) : authenticator ? (
                  <p>SignIn</p>
                ) : (
                  <p>SignUp</p>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default authenticationFormComponent;

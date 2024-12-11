import React, { useRef, useState } from "react";
import SimpleImg from "../../../Image/Hero-AuthenticationPages.jpg";
import { BiEdit } from "react-icons/bi";
import { HiCamera } from "react-icons/hi2";
import { TbXboxXFilled } from "react-icons/tb";
import {
  useGetchangeImageProfileMutation,
  useGetchangeNameProfileMutation,
  useGetUserProfileQuery,
} from "../../store/service/endPointService/endPoint";
import toast, { Toaster } from "react-hot-toast";
import LoadingImageComponent from "../../components/lottiesComponent/LoadingImage.component";
import { Link } from "react-router-dom";
import { PreventComponent } from "../../components";

const UserProfilePage = () => {
  const { data, isLoading, refetch } = useGetUserProfileQuery();
  const [changeImageFun, ImgeData] = useGetchangeImageProfileMutation();
  const [changeNameFun, changeNameData] = useGetchangeNameProfileMutation();
  console.log(data);
  const [showChangeName, setshowChangeName] = useState(false);

  const refImgInput = useRef(null);
  const handleClickImageInput = () => {
    refImgInput.current.click();
  };
  const handleUpdateImage = async (event) => {
    const formData = new FormData();
    formData.append("profile_image", event.target.files[0]);
    const res = await changeImageFun(formData);
    console.log(res.data.message);

    if (res.data) {
      console.log("success");
      toast.success(res.data.message);
      refetch();
    } else {
      toast.error(res.data.message);
    }
  };
  console.log(ImgeData);
  const refNameChange = useRef("");
  const handleChangeName = async () => {
    const name = refNameChange.current.value;
    const res = await changeNameFun({ name });
    console.log(res);
    if (res.data) {
      console.log("success");
      toast.success(res.data.message);
      refetch();
      setshowChangeName(!showChangeName);
    } else {
      toast.error(res.data.message);
    }
  };

  return (
    <PreventComponent
      goPage={"/dashboardPage/user-profile"}
      check={localStorage.getItem("authToken")}
    >
      <div className=" text-white grid gap-3 grid-cols-5 py-5">
        <Toaster position="top-right" reverseOrder={false} />
        <div className="  col-span-2 flex flex-col justify-center items-center gap-3 relative">
          <div>
            <h1 className=" text-2xl my-5">My Profile</h1>
          </div>
          <div className=" relative">
            {isLoading || ImgeData.isLoading ? (
              <LoadingImageComponent
                loadingHeight={"h-[250px]"}
                loadingWeight={"w-[250px]"}
                area={true}
              />
            ) : (
              <img
                src={data ? data?.data?.profile_image : SimpleImg}
                className=" object-fill overflow-hidden w-[250px] h-[250px]  p-1 border-red-500 border rounded-lg "
                alt=""
              />
            )}

            <input
              onChange={handleUpdateImage}
              ref={refImgInput}
              type="file"
              className=" hidden"
            />
            <button
              onClick={handleClickImageInput}
              className=" flex justify-center gap-3  text-lg items-center absolute bottom-0 w-full bg-black/70 p-3"
            >
              {" "}
              <HiCamera /> <span>UpdateImage</span>
            </button>
          </div>
          <div>
            <p>You are profile image</p>
          </div>
        </div>
        {/* text */}
        <div className="  col-span-3 gap-3  flex flex-col justify-evenly">
          <div className=" flex items-center  justify-between gap-3  p-3 border-white border rounded-lg ">
            <div className=" flex items-center gap-3">
              <label htmlFor="name">Name :</label>
              <h3>{data?.data?.name}</h3>
            </div>
            <BiEdit
              onClick={() => {
                setshowChangeName(!showChangeName);
              }}
              className=" cursor-pointer  text-red-600"
            />
          </div>
          <div className=" flex items-center justify-between gap-3  p-3 border-white border rounded-lg ">
            <div className=" flex items-center gap-3">
              <label htmlFor="name">Email :</label>
              <h3>aungkaungsan@gamil.com</h3>
            </div>
          </div>

          <div className=" flex items-center justify-between gap-3  p-3 border-white border rounded-lg ">
            <Link
              className=" w-full h-full text-center"
              to={"user-profile-changePassword"}
            >
              <button>Change Password</button>
            </Link>
          </div>
        </div>
        {showChangeName && (
          <div className="  bg-neutral-900/95  absolute w-[95%] h-[90%] left-[2.5%] ">
            <div className=" flex justify-end mt-1 mr-3">
              <TbXboxXFilled
                onClick={() => {
                  setshowChangeName(!showChangeName);
                }}
                className=" text-red-500 text-2xl cursor-pointer "
              />
            </div>
            <div className=" absolute w-full h-full flex flex-col justify-center items-center">
              <div className=" text-white bg-neutral-900 w-1/4 h-2/5 border-2 border-red-500 p-3 flex flex-col justify-between items-start ">
                <h1 className=" text-lg ">Change Your name </h1>
                <input
                  ref={refNameChange}
                  className="bg-white text-black"
                  type="text"
                />

                <button
                  onClick={handleChangeName}
                  className=" bg-black border-red-500 border p-1 rounded-lg "
                >
                  Change Name
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </PreventComponent>
  );
};

export default UserProfilePage;

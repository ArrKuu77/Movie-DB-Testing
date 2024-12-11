import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useGetchangePasswordProfileMutation } from "../../store/service/endPointService/endPoint";
import { useNavigate } from "react-router-dom";
import { PreventComponent } from "../../components";

const UserProfileChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const nav = useNavigate();
  const [changePasswordFun, changePasswordData] =
    useGetchangePasswordProfileMutation();
  console.log(changePasswordData);

  const handleUpdateName = async (data) => {
    console.log(data);
    const res = await changePasswordFun(data);
    console.log(res);

    if (res.data) {
      toast.success(res.data?.message);
      setTimeout(() => {
        reset();
        localStorage.removeItem("authToken");
        nav("/");
      }, 3000);
    } else {
      toast.error(res.error?.data?.message);
    }
  };

  return (
    <PreventComponent
      goPage={"/dashboardPage/user-profile/user-profile-changePassword"}
      check={localStorage.getItem("authToken")}
    >
      <Toaster position="top-right" reverseOrder={false} />

      <section className="w-full py-3 ">
        <form
          onSubmit={handleSubmit(handleUpdateName)}
          className=" mx-auto border border-red-500 p-10 flex gap-5 items-center justify-center w-4/5 flex-col"
        >
          <div>
            <h1 className=" text-xl text-white font-bold underline">
              Change Password
            </h1>
          </div>
          <div className=" w-full ">
            <label
              htmlFor="old_password"
              className={`block mb-2 text-sm font-medium ${
                errors.name ? "text-red-500" : "text-white"
              } `}
            >
              Old Password
            </label>
            <input
              disabled={changePasswordData.isLoading}
              type="text"
              {...register("old_password", {
                required: true,
                minLength: 8,
                maxLength: 10,
              })}
              className={`bg-gray-50 w-[300px] border ${
                errors.old_password
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              }  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500`}
              placeholder="old_password"
            />
            {errors.old_password?.type === "required" && (
              <p className=" text-red-500 text-sm mt-1">
                Product name is required
              </p>
            )}
            {errors.old_password?.type === "minLength" && (
              <p className=" text-red-500 text-sm mt-1">
                Product name must be greater than 3 characters
              </p>
            )}
            {errors.old_password?.type === "maxLength" && (
              <p className=" text-red-500 text-sm mt-1">
                Product name must be less than 10 characters
              </p>
            )}
          </div>

          <div className=" w-full ">
            <label
              htmlFor="new_password"
              className={`block mb-2 text-sm font-medium ${
                errors.name ? "text-red-500" : "text-white"
              } `}
            >
              New Password
            </label>
            <input
              disabled={changePasswordData.isLoading}
              type="text"
              {...register("new_password", {
                required: true,
                minLength: 8,
                maxLength: 10,
              })}
              className={`bg-gray-50 w-[300px] border ${
                errors.new_password
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              }  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500`}
              placeholder="new_password"
            />
            {errors.new_password?.type === "required" && (
              <p className=" text-red-500 text-sm mt-1">
                Product name is required
              </p>
            )}
            {errors.new_password?.type === "minLength" && (
              <p className=" text-red-500 text-sm mt-1">
                Product name must be greater than 3 characters
              </p>
            )}
            {errors.new_password?.type === "maxLength" && (
              <p className=" text-red-500 text-sm mt-1">
                Product name must be less than 10 characters
              </p>
            )}
          </div>

          <div className=" w-full ">
            <label
              htmlFor="new_password_confirmation"
              className={`block mb-2 text-sm font-medium ${
                errors.name ? "text-red-500" : "text-white"
              } `}
            >
              New Password Confirmation
            </label>
            <input
              disabled={changePasswordData.isLoading}
              type="text"
              {...register("new_password_confirmation", {
                required: true,
                minLength: 8,
                maxLength: 10,
              })}
              className={`bg-gray-50 w-[300px] border ${
                errors.new_password_confirmation
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              }  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500`}
              placeholder="new_password_confirmation"
            />
            {errors.new_password_confirmation?.type === "required" && (
              <p className=" text-red-500 text-sm mt-1">
                Product name is required
              </p>
            )}
            {errors.new_password_confirmation?.type === "minLength" && (
              <p className=" text-red-500 text-sm mt-1">
                Product name must be greater than 3 characters
              </p>
            )}
            {errors.new_password_confirmation?.type === "maxLength" && (
              <p className=" text-red-500 text-sm mt-1">
                Product name must be less than 10 characters
              </p>
            )}
          </div>

          <button
            disabled={changePasswordData.isLoading}
            type="submit"
            className="inline-flex gap-3 items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 sm:w-auto"
          >
            <p> Change Password</p>{" "}
            {changePasswordData.isLoading && (
              <span className="loading loading-dots loading-md"></span>
            )}
          </button>
        </form>
      </section>
    </PreventComponent>
  );
};

export default UserProfileChangePassword;

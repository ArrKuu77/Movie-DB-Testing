import { create } from "zustand";
import { useGetLogOutMutation } from "../service/endPointService/endPoint";

const useLogoutFun = create((set) => ({
  logoutDataZustand: false,

  LogoutzustandLoadingStart: () => set({ logoutDataZustand: true }),
  LogoutzustandLoadingFinish: () => set({ logoutDataZustand: false }),
}));

export default useLogoutFun;

import { configureStore } from "@reduxjs/toolkit";
import { MovieApiService, AuthApiService } from "./service/apiService";

export const store = configureStore({
  reducer: {
    [MovieApiService.reducerPath]: MovieApiService.reducer,
    [AuthApiService.reducerPath]: AuthApiService.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      MovieApiService.middleware,
      AuthApiService.middleware
    ),
});
export default store;

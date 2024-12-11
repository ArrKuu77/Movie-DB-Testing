import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Api_Bais_Url, Api_Auth_Bais_Url } from "../Lib/apiBaisUrl";

export const AuthApiService = createApi({
  reducerPath: "AuthApiService",

  baseQuery: fetchBaseQuery({
    baseUrl: Api_Auth_Bais_Url,
    prepareHeaders: (headers) => {
      const authToken = localStorage.getItem("authToken");
      if (authToken) {
        headers.set("Authorization", `Bearer ${authToken}`);
        headers.set("accept", "application/json");
      } else {
        headers.delete("authorization");
      }
      return;
    },
  }),
  endpoints: (builder) => ({}),
});

export const MovieApiService = createApi({
  reducerPath: "MoviesApi",

  baseQuery: fetchBaseQuery({
    baseUrl: Api_Bais_Url,
    prepareHeaders: (headers) => {
      if (localStorage.getItem("authToken")) {
        headers.set(
          "Authorization",
          "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2ZkMDc0NWM3NjFlZTZlZjZhNmJlMjBmYmFmYzQ5YiIsIm5iZiI6MTczMDU1ODM1MS42MTAxNjYzLCJzdWIiOiI2Njk3ZWQxYzI0YWQwNTExZGQ2NmRlYTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.0s7AFJpPTAAsJyiYZN0N6pGX7iamOXAljBd1dCXQDu4"
        );
        headers.set("accept", "application/json");
      }
      // } else {
      //   headers.delete("Authorization");
      //   headers.delete("accept");
      // }
    },
  }),
  endpoints: (builder) => ({}),
});

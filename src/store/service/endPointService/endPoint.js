import { MovieApiService } from "../apiService";
import { AuthApiService } from "../apiService";

//Authentication service
const AuthApiServiceEndPoint = AuthApiService.injectEndpoints({
  endpoints: (builder) => ({
    getSignIn: builder.mutation({
      query: (formData) => ({
        url: "login",
        method: "POST",
        body: formData,
      }),
    }),

    getUserProfile: builder.query({
      query: () => ({
        url: "user-profile/profile",
        method: "GET",
      }),
    }),

    getchangeImageProfile: builder.mutation({
      query: (formData) => ({
        url: "user-profile/change-profile-image",
        method: "POST",
        body: formData,
      }),
    }),
    getchangePasswordProfile: builder.mutation({
      query: (formData) => ({
        url: "user-profile/change-password",
        method: "POST",
        body: formData,
      }),
    }),
    getchangeNameProfile: builder.mutation({
      query: (changeName) => ({
        url: "user-profile/change-name",
        method: "POST",
        body: changeName,
      }),
    }),

    getSignUp: builder.mutation({
      query: (formData) => ({
        url: "register",
        method: "POST",
        body: formData,
      }),
    }),
    getLogOut: builder.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetchangePasswordProfileMutation,
  useGetchangeImageProfileMutation,
  useGetchangeNameProfileMutation,
  useGetSignInMutation,
  useGetSignUpMutation,
  useGetLogOutMutation,
  useGetUserProfileQuery,
} = AuthApiServiceEndPoint;

//Movie service
const MovieApiServiceEndPoint = MovieApiService.injectEndpoints({
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: ({ pageName, pageNumber }) => ({
        url: `movie/${pageName}`,
        method: "GET",
        params: {
          language: "en-US",
          page: pageNumber,
        },
      }),
    }),
    getTrendingAll: builder.query({
      query: ({ pageName, pageNumber }) => ({
        url: `trending/${pageName}/day`,
        method: "GET",
        params: {
          language: "en-US",
          page: pageNumber,
        },
      }),
    }),
    getDetailMovie: builder.query({
      query: (MovieId) => ({
        url: `movie/${MovieId}`,
        method: "GET",
        params: {
          language: "en-US",
        },
      }),
    }),

    getAuthentication: builder.query({
      query: () => ({
        url: `authentication`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useGetTrendingAllQuery,
  useGetDetailMovieQuery,
  useGetAuthenticationQuery,
} = MovieApiServiceEndPoint;

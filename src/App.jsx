import React from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import {
  AuthenticationPage,
  DashboardPage,
  PopularMovie_DB,
  UserProfile,
} from "./pages";
import AllMoviesPage from "./pages/dashboardPages/AllMovies.page";
import MoviesPage from "./pages/dashboardPages/MoviesPage";
import TrendingPeoplePage from "./pages/dashboardPages/TrendingPeople.page";
import TrendingPeopleDetailPage from "./components/dashboardComponents/TrendingPeopleDetailPage";
import MovieCardDetali from "./pages/dashboardPages/MovieCardDetali";
import UserProfileChangePassword from "./pages/dashboardPages/UserProfileChangePassword";

const App = () => {
  return (
    <div className=" ">
      <Routes>
        <Route path="/" element={<AuthenticationPage />} />
        <Route path="/dashboardPage" element={<DashboardPage />}>
          <Route index element={<PopularMovie_DB />} />
          <Route
            path="/dashboardPage/detailCard/:idCardDetail"
            element={<MovieCardDetali />}
          />
          {/* Trending */}
          <Route path="all-movie-page" element={<AllMoviesPage />} />
          <Route path="movies-page" element={<MoviesPage />} />
          <Route path="people-page" element={<TrendingPeoplePage />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route
            path="user-profile/user-profile-changePassword"
            element={<UserProfileChangePassword />}
          />

          <Route
            path="/dashboardPage/people-page/:actorName"
            element={<TrendingPeopleDetailPage />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

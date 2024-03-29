import { Route, Routes, Navigate } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { lazy } from "react";

const Home = lazy(() => import("./Home/Home"));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId/" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="*" element={<Navigate to="/" />} />  
        </Route> 
      </Route> 
      <Route path="*" element={<Navigate to="/" />} /> 
    </Routes>
  );
};

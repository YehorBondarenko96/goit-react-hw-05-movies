import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { lazy } from "react";

const Home = lazy(() => import("./Home/Home"));
const Movies = lazy(() => import('./Mov/Movies'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Route>
    </Routes>
  );
};

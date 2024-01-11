import React from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "./Movies";
import MovieDetails from "./MovieDetails";
import EditMovie from "./EditMovie";
import BestRate from "./BestRate";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/update" element={<EditMovie />} />
        <Route path="/movies/best-rated" element={<BestRate />} />
      </Routes>
    </main>
  );
};

export default Main;

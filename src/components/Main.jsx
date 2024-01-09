import React from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "./Movies";
import MovieDetails from "./MovieDetails";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </main>
  );
};

export default Main;

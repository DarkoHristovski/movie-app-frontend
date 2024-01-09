import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card overflow-hidden transition-transform duration-200 ease-in-out transform hover:scale-150 hover:shadow-2x1 p-2 border border-red-800 shadow-lg text-center bg-gray-300">
      <Link to={`/movies/${movie.id}`}>
        <img
          src={movie.poster}
          alt={movie.title}
          className="p-2 border border-red-900 rounded shadow-lg text-center bg-red-400"
        />
      </Link>
    </div>
  );
};

export default MovieCard;

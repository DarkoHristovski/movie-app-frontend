
import React from 'react';
import axios from "axios";

import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://movie-app-gx5p.onrender.com/api/movies")
      .then(res => {
        setMovies(res.data);
        setLoading(false);
      })
      .catch(e => {
        console.error(e);
        setLoading(false);
    });
  }, []);

if (loading) {
  return <div>Loading...</div>;
}
  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {Array.isArray(movies) && movies.length > 0 ? (movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))
        ) : (
          <li>No movies available</li>
        )}
      </ul>

    </div>
    
  );
};

export default Movies;

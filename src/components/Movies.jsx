
import React from 'react';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


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
    <div className="container mx-auto p-4">
      <h3 className="text-2xl font-bold mb-4">Movies</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4">
      
        {Array.isArray(movies) && movies.length > 0 ? (movies.map(movie => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))
        ) : (
          <div>No movies available</div>
        )}
      
      </div>    
  </div>
    
  );
};

export default Movies;

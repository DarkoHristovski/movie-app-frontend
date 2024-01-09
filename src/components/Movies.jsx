
import React from 'react';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


import MovieCard from "./MovieCard";
import MovieCarousel from "./MovieCarousel";


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
    <div className="container mx-auto p-8">
      <h3 className="text-xl font-bold mb-3">Popular movies</h3>
      <MovieCarousel movies={movies} className="mb-8" />
      <h3 className="text-xl font-bold mb-3">Explore movies</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mx-4">
      
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

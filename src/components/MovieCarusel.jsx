
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const MovieCarousel = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://movie-app-gx5p.onrender.com/api/movies')
      .then((res) => {
        setMovies(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Movies Carousel</h2>
      <div className="flex">
        {Array.isArray(movies) && movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0 w-1/4 p-4">
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

export default MovieCarousel;

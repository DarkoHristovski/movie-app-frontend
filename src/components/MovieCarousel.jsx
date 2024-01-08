import React, { useEffect, useState } from 'react';
import { Carousel } from 'flowbite';

const MovieCarousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://movie-app-gx5p.onrender.com/api/movies');
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }

        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const initializeCarousel = () => {
      const carouselElement = document.getElementById('movie-carousel');

      if (carouselElement) {
        // Only include the last 3 movies
        const last3Movies = movies.slice(-3);

        const items = last3Movies.map((movie, index) => ({
          position: index,
          el: (
            <div key={movie.id} className="hidden duration-700 ease-in-out movie-item" data-carousel-item>
              <img
                src={movie.poster}
                className="absolute block w-full h-full object-cover"
                alt={movie.title}
              />
            </div>
          ),
        }));

        const options = {
          defaultPosition: 0,
          interval: 5000,
        };

        new Carousel(carouselElement, items, options);
      }
    };

    initializeCarousel();

    return () => {
      const carouselElement = document.getElementById('movie-carousel');
      if (carouselElement) {
        const carouselInstance = Carousel.getInstance(carouselElement);
        if (carouselInstance) {
          carouselInstance.pause();
        }
      }
    };
  }, [movies]);

  return (
    <div id="movie-carousel" className="relative w-full">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Carousel items are dynamically generated based on the fetched movies */}
        {movies.map((movie) => (
          <div key={movie.id} className="hidden duration-700 ease-in-out movie-item" data-carousel-item>
            <img src={movie.poster} className="absolute block w-full h-full object-cover" alt={movie.title} />
          </div>
        ))}
      </div>
      {/* Slider controls */}

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
  <button className="text-white" onClick={() => {/* Handle logic to move to the previous item */}}>
    Previous
  </button>
  <button className="text-white ml-4" onClick={() => {/* Handle logic to move to the next item */}}>
    Next
  </button>
</div>

    
    </div>
  );
};

export default MovieCarousel;

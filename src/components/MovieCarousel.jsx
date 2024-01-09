import React, { useEffect, useRef } from 'react';
import { Carousel } from 'flowbite';

const MovieCarousel = ({ movies }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const initializeCarousel = () => {
      const carouselElement = document.getElementById('movie-carousel');

      if (carouselElement && movies.length > 0) {
        // Select the last four movies from the array
        const lastFourMovies = movies.slice(-4);
    
        const movieItems = lastFourMovies.map((movie, index) => ({
          position: index,
          el: carouselElement.getElementsByClassName('movie-item')[index],
        }));

        const options = {
          defaultPosition: 0,
          interval: 5000,
          indicators: {
            activeClasses: 'bg-white dark:bg-gray-800',
            inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
            items: movieItems,
          },
          onNext: () => {
            console.log('Next movie item is shown');
          },
          onPrev: () => {
            console.log('Previous movie item is shown');
          },
          onChange: () => {
            console.log('New movie item has been shown');
          },
        };

        const carouselInstance = new Carousel(carouselElement, movieItems, options);
        carouselRef.current = carouselInstance;
        console.log('Carousel instance:', carouselInstance);
      }
    };

    initializeCarousel();

    return () => {
      if (carouselRef.current) {
        carouselRef.current.pause();
      }
    };
  }, [movies]);

  const handleImageClick = (event) => {
    if (carouselRef.current) {
      const clickX = event.clientX - event.target.getBoundingClientRect().left;
      const imageWidth = event.target.width;

      if (clickX < imageWidth / 2) {
        // Click on the left side of the image
        carouselRef.current.prev();
      } else {
        // Click on the right side of the image
        carouselRef.current.next();
      }
    }
  };

  return (
<div className="relative w-full">
    {/* Left arrow */}
    <button
  className="absolute right-4 top-1/2 z-10 transform -translate-y-1/2 text-white p-2 bg-gray-800 hover:bg-gray-600 rounded-full"
  onClick={() => carouselRef.current && carouselRef.current.next()}
>
  Next
</button>

    <div id="movie-carousel" className="relative h-96 w-full overflow-hidden rounded-lg">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="hidden movie-item cursor-pointer"
          data-carousel-item
          onClick={handleImageClick}
        >
          <img
            src={movie.poster}
            className="absolute block w-full h-full object-cover"
            alt={movie.title}
          />
        </div>
      ))}
    </div>

    {/* Right arrow */}
    <button
  className="absolute left-4 top-1/2 z-10 transform -translate-y-1/2 text-white p-2 bg-gray-800 hover:bg-gray-600 rounded-full"
  onClick={() => carouselRef.current && carouselRef.current.prev()}
>
  Previous
</button>
  </div>
);
};

export default MovieCarousel;

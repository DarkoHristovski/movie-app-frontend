import React, { useEffect, useRef } from 'react';
import { Carousel } from 'flowbite';

const MovieCarousel = ({ movies }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const initializeCarousel = () => {
      const carouselElement = document.getElementById('movie-carousel');

      if (carouselElement && movies.length > 0) {
        const movieItems = movies.map((movie, index) => ({
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
    <div id="movie-carousel" className="relative w-full">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="hidden duration-700 ease-in-out movie-item cursor-pointer"
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
    </div>
  );
};

export default MovieCarousel;

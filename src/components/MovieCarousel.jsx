import React, { useEffect } from 'react';
import { Carousel } from 'flowbite';


const MovieCarousel = ({ movies }) => {
  useEffect(() => {
    const initializeCarousel = () => {
      const carouselElement = document.getElementById('movie-carousel');

      if (carouselElement) {
        // Select your movie items dynamically
        const movieItems = Array.from(carouselElement.getElementsByClassName('movie-item')).map((el, index) => ({
          position: index,
          el,
        }));

        // Define your options (adjust as needed)
        const options = {
          defaultPosition: 0,
          interval: 5000, // Set your desired interval in milliseconds
          indicators: {
            activeClasses: 'bg-white dark:bg-gray-800',
            inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
            items: movieItems, // Use your movie items as indicators
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

        // Create a new Carousel instance
        new Carousel(carouselElement, movieItems, options);
      }
    };

    initializeCarousel();

    // Cleanup function to pause the carousel when the component unmounts
    return () => {
      const carouselElement = document.getElementById('movie-carousel');
      if (carouselElement) {
        // Perform any necessary cleanup or pausing logic here
      }
    };
  }, []); // Run the effect only once when the component mounts

  return (
    <div id="movie-carousel" className="relative w-full">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {movies.map((movie, index) => (
          <div key={index} className="hidden duration-700 ease-in-out movie-item" data-carousel-item>
            <img src={movie.poster} className="absolute block w-full h-full object-cover" alt={movie.title} />
          </div>
        ))}
      </div>
      {/* Slider controls and indicators can be added here */}
    </div>
  );
};

export default MovieCarousel;

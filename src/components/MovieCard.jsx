import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card overflow-hidden transition-transform duration-200 ease-in-out transform hover:scale-150 hover:shadow-2x1 p-4 border border-red-800 shadow-lg text-center">
            <Link to={`/movies/${movie.id}`}>
                <img src={movie.poster} alt={movie.title} className="p-4 border border-red-900 rounded shadow-lg text-center" />
                <h4 className="text-lg font-semibold mt-2">{movie.title}</h4>
            </Link>
        </div>
    );
};

export default MovieCard;

import React from 'react';
import { Link } from 'react-router-dom';

const MovieCards = ({ movie }) => {
    return (
        <div className="movie-card">
            <Link to={`/movies/${movie.id}`}>
                <img src={movie.posterURL} alt={movie.title} />
                <h3>{movie.title}</h3>
            </Link>
        </div>
    );
};

export default MovieCard;

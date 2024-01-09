import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovies] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://movie-app-gx5p.onrender.com/api/movies/${id}`)
      .then((res) => setMovies(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <section className="container border rounded-lg border-red-800 shadow-lg  flex justify-center mx-auto items-center p-4">
      <div className="flex justify-between">
        <div className="img-details-wrapper">
          <img src={movie.poster} alt="" />
        </div>
        <div className="">
          <ul className="ml-12">
            {movie.title && <li className="text-5xl mb-10">{movie.title}</li>}
            {movie.year && (
              <li className="text-3xl mb-5">Director: {movie.director}</li>
            )}
            {movie.year && (
              <li className="text-3xl mb-5">Year: {movie.year}</li>
            )}
            {movie.rating && (
              <li className="text-3xl mb-5">Rating: {movie.rating}/10</li>
            )}
            {movie.length && (
              <li className="text-3xl mb-5">Length: {movie.length}</li>
            )}
            {movie.language && (
              <li className="text-3xl mb-5">Language: {movie.language}</li>
            )}
            {movie.genre && (
              <li className="text-3xl mb-5">Genre: {movie.genre}</li>
            )}
            {movie.actors && (
              <li className="text-3xl mb-5">
                Stars: {movie.actors?.join(", ")}
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;

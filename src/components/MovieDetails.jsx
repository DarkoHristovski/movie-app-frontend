import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import Comments from "./Comments";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  console.log("CURRENT MOVIE: ", movie);

  useEffect(() => {
    axios
      .get(`https://movie-app-gx5p.onrender.com/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((e) => console.log(e));
  }, []);

  const handleDeleteMovie = () => {
    axios
      .delete(`https://movie-app-gx5p.onrender.com/api/movies/${id}`)
      .then(() => navigate("/"))
      .catch((e) => console.error(e));
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="containe pt-10 flex justify-center mx-auto items-center p-4">
        <div className="flex justify-center">
          <div className="img-details-wrapper w-2/4">
            <img src={movie.poster} alt={movie.title} />
          </div>
          <div className="w-2/4">
            <ul className="pt-5 flex flex-wrap w-3/4 justify-between">
              {movie.title && (
                <li className="text-2xl mb-5">Title:{movie.title}</li>
              )}
              {movie.year && (
                <li className="w-2/4 text-2xl mb-5">
                  Director: {movie.director}
                </li>
              )}
              {movie.year && (
                <li className="w-2/4 text-2xl mb-5">Year: {movie.year}</li>
              )}
              {movie.rating && (
                <li className="w-2/4 text-2xl mb-5">
                  Rating: {movie.rating}/10
                </li>
              )}
              {movie.length && (
                <li className="text-2xl mb-5">Length: {movie.length} min</li>
              )}
              {movie.language && (
                <li className="w-2/4 text-2xl mb-5">
                  Language: {movie.language}
                </li>
              )}
              {movie.genre && (
                <li className="w-2/4 text-2xl mb-5">Genre: {movie.genre}</li>
              )}
              {movie.actors && (
                <li className="w-2/4 text-2xl mb-5">
                  Stars: {movie.actors?.join(", ")}
                </li>
              )}
            </ul>
            <div className="mt-10">
              <Link
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-2"
                to={`/movies/${id}/update`}
              >
                Edit
              </Link>
              <a
                onClick={handleDeleteMovie}
                className="bg-gray-300 mt-6 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Delete
              </a>
            </div>
            <Comments movieId={movie.id} />
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieDetails;

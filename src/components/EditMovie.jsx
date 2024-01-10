import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditMovie = () => {
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    year: "",
    poster: "",
    length: "",
    genre: "",
    actors: [],
  });
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://movie-app-gx5p.onrender.com/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((e) => console.error(e));
  }, []);

  const handleChange = (e) => {
    if (e.target.name === 'actors') {
      const actors = e.target.value.split(',');
      setMovie({ ...movie, [e.target.name]: actors })
    } else {
      setMovie({ ...movie, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://movie-app-gx5p.onrender.com/api/movies/${id}`, movie)
      .then(() => navigate("/"))
      .catch((e) => console.error(e));
    console.log(movie);
  };

  return (
    <section className="pt-20">
      <div className="flex justify-center align-middle">
        <div className="w-1/3">
      <div className="img-edit-wrapper">
        <img src={movie.poster} alt={movie.title} />
      </div>
      </div>
      <div className="w-1/2">
      <h2 className="mb-8 text-2xl">Update a Movie</h2>
      <form className="columns-2 w-full" onSubmit={handleSubmit}>
     
        <label
          htmlFor="title"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="title"
          required=""
          defaultValue={movie.title}
          onChange={handleChange}
        />
        <label
          htmlFor="director"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          Director
        </label>
        <input
          type="text"
          id="director"
          name="director"
          className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="director"
          required=""
          defaultValue={movie.director}
          onChange={handleChange}
        />
        <label
          htmlFor="year"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          Year
        </label>
        <input
          type="number"
          id="year"
          name="year"
          className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="year"
          required=""
          defaultValue={movie.year}
          onChange={handleChange}
        />
        <label
          htmlFor="rating"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          Rating
        </label>
        <input
          type="number"
          id="rating"
          name="rating"
          className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="rating"
          required=""
          defaultValue={movie.rating}
          onChange={handleChange}
        />
        <label
          htmlFor="poster"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          Poster
        </label>
        <input
          type="text"
          id="poster"
          name="poster"
          className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="poster"
          required=""
          defaultValue={movie.poster}
          onChange={handleChange}
        />
        <label
          htmlFor="length"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          Length
        </label>
        <input
          type="number"
          id="length"
          name="length"
          className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="length"
          required=""
          defaultValue={movie.length}
          onChange={handleChange}
        />
        <label
          htmlFor="language"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          Language
        </label>
        <input
          type="text"
          id="language"
          name="language"
          className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="language"
          required=""
          defaultValue={movie.language}
          onChange={handleChange}
        />
        <label
          htmlFor="genre"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          Genre
        </label>
        <input
          type="text"
          id="genre"
          name="genre"
          className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="genre"
          required=""
          defaultValue={movie.genre}
          onChange={handleChange}
        />
        <label
          htmlFor="actors"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          Actors
        </label>
        <input
          type="text"
          id="actors"
          name="actors"
          className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="actors"
          required=""
          defaultValue={movie.actors}
          onChange={handleChange}
        />
        <button className="bg-gray-300 mt-6 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-" type="submit">Update</button>
      </form>
      </div>
      </div>
    </section>
  );
};

export default EditMovie;

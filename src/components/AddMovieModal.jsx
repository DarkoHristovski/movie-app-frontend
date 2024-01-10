import React, { useState } from "react";
import axios from "axios";

const AddMovieModal = ({ isModalOpen, setIsModalOpen }) => {
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    year: "",
    rating: "",
    poster: "",
    length: "",
    language: "",
    genre: "",
    actors: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const actorsArray = formData.actors.split(',').map(actor => actor.trim());

    // Update formData with the actors array
    const updatedFormData = { ...formData, actors: actorsArray };
    axios
      .post(`https://movie-app-gx5p.onrender.com/api/movies`, updatedFormData)
      .then(() => navigate("/"))
      .catch((e) => console.error(e));

    setFormData({
      title: "",
      director: "",
      year: "",
      rating: "",
      poster: "",
      length: "",
      language: "",
      genre: "",
      actors: "",
    });
    setIsModalOpen((prev) => !prev);
  };

  const handleClose = () => {
    setFormData({
      title: "",
      director: "",
      year: "",
      rating: "",
      poster: "",
      length: "",
      language: "",
      genre: "",
      actors: "",
    });
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8 max-w-md w-full grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Add a movie to the Databank
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="title">
                    Title:
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter title"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 mb-2"
                    htmlFor="director"
                  >
                    Director:
                  </label>
                  <input
                    type="text"
                    id="director"
                    name="director"
                    value={formData.director}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter director"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="year">
                    Year:
                  </label>
                  <input
                    type="text"
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter year"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="rating">
                    Rating:
                  </label>
                  <input
                    type="text"
                    id="rating"
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter rating"
                  />
                </div>
              </form>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="poster">
                    Poster (Image URL):
                  </label>
                  <input
                    type="text"
                    id="poster"
                    name="poster"
                    value={formData.poster}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter poster URL"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="length">
                    Length:
                  </label>
                  <input
                    type="text"
                    id="length"
                    name="length"
                    value={formData.length}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter length"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 mb-2"
                    htmlFor="language"
                  >
                    Language:
                  </label>
                  <input
                    type="text"
                    id="language"
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter language"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="genre">
                    Genre:
                  </label>
                  <input
                    type="text"
                    id="genre"
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter genre"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="actors">
                    Actors:
                  </label>
                  <input
                    type="text"
                    id="actors"
                    name="actors"
                    value={formData.actors}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter actors"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-2"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddMovieModal;

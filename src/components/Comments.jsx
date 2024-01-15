/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Comments = ({ movieId }) => {
  const [comments, setComments] = useState([]);
  const [commentModal, setCommentModal] = useState(false);
  const [username, setUsername] = useState("");
  const [commenttext, setCommenttext] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (movieId) {
      axios
        .get(
          `https://movie-app-gx5p.onrender.com/api/movies/${movieId}/comments`
        )
        .then((res) => setComments(res.data))
        .catch((e) => console.error(e));
    }
  }, [movieId]);
  {
    console.log("comments", comments);
  }
  const handleDeleteComment = (commentId) => {
    axios
      .delete(`https://movie-app-gx5p.onrender.com/api/comments/${commentId}`)
      .then((res) => navigate("/"))
      .catch((e) => console.error(e));
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://movie-app-gx5p.onrender.com/api/movies/${movieId}/comments`,
        { movieId, commenttext, username }
      )
      .then((res) => navigate("/"))
      .catch((e) => console.error(e));
  };

  const openModal = () => {
    setCommentModal(true);
  };
  const closeModal = () => {
    setCommentModal(false);
  };

  return (
    <>
      {commentModal && (
        <div className="modal">
          <div className="modal-wrapper for-wrapper p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between align-middle">
              <p className="text-">Add a comment</p>
              <p onClick={closeModal} className="text-3xl">
                X
              </p>
            </div>
            <form onSubmit={handleAddComment} action="">
              <label
                htmlFor="userame"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                value={commenttext}
                onChange={(e) => setCommenttext(e.target.value)}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your comment here..."
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-2"
              >
                {" "}
                Send
              </button>
              <button
                onClick={closeModal}
                type="button"
                className="bg-gray-300 mt-6 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                {" "}
                Close
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="mt-10">
        <h3 className="text-2xl">Comments</h3>
        <button
          onClick={openModal}
          type="button"
          className="bg-gray-300 mt-6 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        >
          Post a Comment
        </button>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="mt-5 max-w-sm p-2 pl-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex justify-between">
                <div>
                  <h4 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {comment.username}
                  </h4>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {comment.commenttext}
                  </p>
                </div>
                <p
                  onClick={() => {
                    handleDeleteComment(comment.id);
                  }}
                  className="text-2xl self-center cursor-pointer"
                >
                  X
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No Comments</p>
        )}
      </div>
    </>
  );
};

export default Comments;

import { useEffect, useCase, useState } from "react";
import axios from "axios";

const Comments = ({ movie }) => {
  const [comments, setComments] = useState([]);
  const movieId = movie?.id;
  let urlComments = `https://movie-app-gx5p.onrender.com/api/movies/${movieId}/comments`;
  console.log(urlComments);
  console.log(comments);
  useEffect(() => {
    axios
      .get(urlComments)
      .then((res) => setComments(res.data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <>
      {comments.lenght > 0 ? (
        <section className="pt-5">
          <p>
            {comments.username}: {comments.commenttext}
          </p>
        </section>
      ) : (
        <p>Loading....</p>
      )}
    </>
  );
};

export default Comments;

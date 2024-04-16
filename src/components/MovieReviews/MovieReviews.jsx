import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../../services/api";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieId).then((data) => setReviews(data.results));
  }, [movieId]);

  return (
    <div>
      <h2 className={s.title}>Reviews:</h2>
      {reviews.length === 0 ? (
        <p>No available reviews</p>
      ) : (
        <ul className={s.review}>
          {reviews.length > 0 &&
            reviews.map((review) => (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;

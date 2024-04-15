import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieById } from "../../services/api";
import s from "./MovieDetailsPage.module.css";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(movieId).then((data) => setMovie(data));
  }, [movieId]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Link to="/">
        <button className={s.btn} type="button">
          <BsArrowLeftCircleFill />
          Go back
        </button>
      </Link>
      <h1 className={s.title}>{movie.title}</h1>
      <div className={s.wrap}>
        <img
          className={s.img}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
        <div className={s.film_info}>
          <p>User Score {movie.vote_average}</p>
          <h3>Overview:</h3>
          <p className={s.overview}> {movie.overview}</p>
          <h3>Release Date</h3>
          <p>{movie.release_date}</p>
        </div>
      </div>

      <div className={s.add_info}>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;

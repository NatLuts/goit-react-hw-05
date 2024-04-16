import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {movies.length > 0 &&
        movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
                {movie.title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

export default MovieList;

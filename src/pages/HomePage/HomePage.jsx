import { useEffect, useState } from "react";
import s from "./HomePage.module.css";
import { fetchTrendingMovie } from "../../services/api";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovie().then((data) => setMovies(data.results));
  }, []);
  return (
    <div>
      <h2 className={s.title}>Trending movies</h2>
      <ul className={s.list}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link
              className={s.movie_name}
              to={location.state ?? "/movies/" + movie.id.toString()}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

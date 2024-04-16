import { useEffect, useState } from "react";
import { fetchMovieByCredit } from "../../services/api";
import s from "./MovieCast.module.css";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieByCredit(movieId).then((data) => setCast(data.cast));
  }, [movieId]);

  return (
    <div>
      <h2 className={s.title}>Cast:</h2>
      <ul className={s.list}>
        {cast.length > 0 &&
          cast.map((actor) => {
            return (
              <li key={actor.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                />
                <h3>{actor.name}</h3>
                <p>Character: {actor.character}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieCast;

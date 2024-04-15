import { useEffect, useState } from "react";
import { fetchMovieByCredit } from "../../services/api";
import s from "./MovieCast.module.css";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieByCredit(movieId).then((data) => setCast(data));
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} />
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;

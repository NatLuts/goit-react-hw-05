import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMovie } from "../../services/api";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFormSubmit = async (query) => {
    const response = await fetchMovie(query);
    setMovies(response.results);
  };

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      handleFormSubmit(query);
    }
  }, [searchParams]);

  return (
    <div>
      <SearchBar setSearchParams={setSearchParams} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;

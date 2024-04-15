import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDZmZmMzNWY3Yzg1YjdhMTgyNTNjOGM0ZmE2YzExYiIsInN1YiI6IjY2MTk0YTI5M2FjZDIwMDE3YzQ3MTVjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b0EFAO7ABIMh1adDNCGofqJrD_kekqO-XQeP2fKdZ9s",
  },
};

export async function fetchTrendingMovie() {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/week",
    options
  );
  return response.data;
}

export async function fetchMovie(query) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}`,
    options
  );

  return response.data;
}

export async function fetchMovieById(movie_id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}`,
    options
  );
  return response.data;
}

export async function fetchMovieByCredit(movie_id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
    options
  );
  return response.data;
}

export async function fetchReviews(movie_id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/reviews`,
    options
  );
  return response.data;
}

// import { useEffect, useState } from "react";
// import s from "./MoviesPage.module.css";
// import { useParams } from "react-router-dom";

// const MoviesPage = () => {
//   const [movie, setMovie] = useState("");
//   const [searchParams, setSearchParams] = useParams();

//   function handleSearch(e) {
//     setMovie(e.target.value);
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!movie) return;
//     setSearchParams({ movie });
//   };

//   useEffect(() => {
//     if (searchParams.get("movie")) setMovie(searchParams.get("movie"));
//   }, [searchParams]);

//   return (
//     <div>
//       <form className={s.form} onSubmit={handleSubmit}>
//         <input
//           className={s.input}
//           type="text"
//           name="query"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search film"
//           onChange={handleSearch}
//         />
//         <button className={s.btn} type="submit">
//           Search
//         </button>
//       </form>
//     </div>
//   );
// };

// export default MoviesPage;

const MoviesPage = () => {
  return <div></div>;
};

export default MoviesPage;

import NavBar from "./NavBar";
import Main from "./Main";
import Movies from "./Movies";
import WatchedMovies from "./WatchedMovies";
import Loader from "./Loader";
import Error from "./Error";
import { useEffect, useState } from "react";

// const tempMovieData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt0133093",
//     Title: "The Matrix",
//     Year: "1999",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt6751668",
//     Title: "Parasite",
//     Year: "2019",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
//   },
// ];

// const tempWatchedData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     runtime: 148,
//     imdbRating: 8.8,
//     userRating: 10,
//   },
//   {
//     imdbID: "tt0088763",
//     Title: "Back to the Future",
//     Year: "1985",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//     runtime: 116,
//     imdbRating: 8.5,
//     userRating: 9,
//   },
// ];

const KEY = "46179bf1";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectMovie(id) {
    id === selectedId ? setSelectedId(null) : setSelectedId(id);
  }

  function handleBack() {
    setSelectedId(null);
  }

  useEffect(
    function () {
      const controller = new AbortController();

      async function handleFetch() {
        try {
          setError("");
          setisLoading(true);

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          const data = await res.json();

          if (data.Response === "False") {
            setError("Movie not found 😒");
            return;
          }

          setMovies(data.Search);
        } catch (err) {
          if (err.name !== "AbortError") setError("Something went wrong 🤔");
        } finally {
          setisLoading(false);
        }
      }

      if (query.length < 2) {
        setError("");
        setMovies([]);
        return;
      }

      setSelectedId(null);
      handleFetch();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return (
    <>
      <NavBar
        tempMovieDataLength={movies ? movies.length : 0}
        query={query}
        setQuery={setQuery}
      />
      <Main>
        {/* {isLoading ? <Loader /> : <Movies tempMovieData={movies}></Movies>} */}
        {isLoading && <Loader />}

        {!isLoading && error && <Error message={error} />}

        {!isLoading && !error && (
          <Movies
            tempMovieData={movies}
            selectedId={selectedId}
            handleSelectMovie={handleSelectMovie}
          />
        )}

        <WatchedMovies
          watched={watched}
          selectedId={selectedId}
          handleBack={handleBack}
          KEY={KEY}
          setSelectedId={setSelectedId}
          setWatched={setWatched}
        />
      </Main>
    </>
  );
}

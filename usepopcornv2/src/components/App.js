import { useState, useEffect } from "react";
import Logo from "./Logo";
import Search from "./Search";
import NumResults from "./NumResults";
import Box from "./Box";
import MovieList from "./MovieList";
import WatchedMoviesSummary from "./WatchedMoviesSummary";
import WatchedMovieList from "./WatchedMovieList";
import Error from "./Error";
import Loader from "./Loader";
import MovieDetails from "./MovieDetails";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const apiKey = "46179bf1";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(
    function () {
      const controller = new AbortController();

      async function handleFetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`,
            { signal: controller.signal }
          );

          const data = await res.json();

          setIsLoading(false);

          if (data.Response === "False") {
            setError("Movie not found 😢");
            setMovies([]);
            return;
          }

          setMovies(data.Search);
        } catch (err) {
          err.AbortError === "" ? setError(err.message) : setError("");
        }
      }

      if (query.length < 2) {
        setMovies([]);
        setError("");
        setSelectedMovie(null);
        return;
      }

      handleFetchMovies();
      setError("");
      return function () {
        controller.abort();
      };
    },
    [query]
  );

  function handleSelectMovie(movie) {
    setSelectedMovie((prev) => movie);
  }

  function handleAdd(movie) {
    setWatched((prev) => [...prev, movie]);
    setSelectedMovie(null);
  }

  function handleDeleteMovie(id) {
    setWatched((prev) => prev.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <nav className="nav-bar">
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </nav>

      <main className="main">
        <Box>
          {error === "" && !isLoading ? (
            <MovieList movies={movies} handleSelectMovie={handleSelectMovie} />
          ) : isLoading && error === "" ? (
            <Loader />
          ) : (
            <Error>{error}</Error>
          )}
        </Box>

        <Box>
          {!selectedMovie ? (
            <>
              <WatchedMoviesSummary watched={watched} average={average} />
              <WatchedMovieList
                watched={watched}
                handleSelectMovie={handleSelectMovie}
                onDeleteWatch={handleDeleteMovie}
              />
            </>
          ) : (
            <MovieDetails
              selectedMovie={selectedMovie}
              setSelectedMovie={setSelectedMovie}
              apiKey={apiKey}
              handleAdd={handleAdd}
              watched={watched}
            />
          )}
        </Box>
      </main>
    </>
  );
}

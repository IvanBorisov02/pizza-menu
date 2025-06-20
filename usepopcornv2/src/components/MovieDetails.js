import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";

function MovieDetails({
  selectedMovie,
  setSelectedMovie,
  apiKey,
  handleAdd,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [userRating, setUserRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  function onCloseMovie() {
    setSelectedMovie(null);
  }

  useEffect(
    function () {
      async function handleFetch() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${apiKey}&i=${selectedMovie.imdbID}`
        );

        const data = await res.json();

        setMovie(data);
        setIsLoading(false);
      }

      handleFetch();
    },
    [apiKey, selectedMovie.imdbID]
  );

  useEffect(
    function () {
      document.title = `Movie | ${selectedMovie.Title}`;

      return function () {
        document.title = "usePopcorn";
      };
    },
    [selectedMovie.Title]
  );

  const {
    Poster: poster,
    Title: title,
    Released: released,
    Runtime: runtime,
    Genre: genre,
    imdbRating,
    Plot: plot,
    Actors: actors,
    Director: director,
    imdbID,
  } = movie;

  const movieToAdd = {
    title,
    poster,
    imdbRating,
    userRating,
    runtime,
    imdbID,
  };

  const isWatched = watched.map((movie) => movie.imdbID).includes(imdbID);

  return (
    <div className="details">
      {!isLoading ? (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={title} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} Rating
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button
                      className="btn-add"
                      onClick={() => handleAdd(movieToAdd)}
                    >
                      + Add to List
                    </button>
                  )}
                </>
              ) : (
                <p>{`You've watched that film and already given ${
                  watched.find((movie) => movie.imdbID === selectedMovie.imdbID)
                    ?.userRating
                }⭐`}</p>
              )}
              <p>
                <em>{plot}</em>
                <p>Starring {actors}</p>
                <p>Directed by {director}</p>
              </p>
            </div>
          </section>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default MovieDetails;
